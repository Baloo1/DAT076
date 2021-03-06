const express = require('express');
const router = express.Router();
require('dotenv').config();
const {User, Experience, About, Project, Image} = require('../models/schema');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const withAuth = require('./authmiddleware');
const cookieParser = require('cookie-parser');
const upload = multer({
    dest: process.env.TMP_IMAGE_PATH
});

// API Routes
router.get('/', (req, res) => {
    res.send('hello');
});

router.get('/users', withAuth, upload.none(), async (req, res) => {
    const requestingUser = await User.query().where('id', '=', req.id).pick(['role']);
    const requestingRole = requestingUser[0].role;
    if(requestingRole === 'admin') {
        const users = await User.query().orderBy('id');
        res.json(users);
    } else {
        res.status(401).contentType('text/plain').end('Insufficient privileges');
    }
});

router.get('/user/:id', async (req, res) => {
    const user = await User.query().findById(req.params.id).omit(['password']).first();
    if(user == null) {
        res.status(401).contentType('text/plain').end('No user found');
    } else {
        res.json(user);
    }
});

// Get all experiences, abouts, projects of a user by id
router.get('/user/:id/experiences', async (req, res) => {
    const experiences = await Experience.query().where('user_id', '=', req.params.id);
    res.json(experiences);
});

router.get('/user/:id/abouts', async (req, res) => {
    const abouts = await About.query().where('user_id', '=', req.params.id);
    res.json(abouts);
});

router.get('/user/:id/projects', async (req, res) => {
    const projects = await Project.query().where('user_id', '=', req.params.id);
    res.json(projects);
});

// Add a new experience, about or project of a user by id
router.post('/user/:id/experience/new', withAuth, upload.none(), async (req, res) => {
    const newExperience = req.body;

    if(req.id != req.params.id) {
        res.status(401).contentType('text/plain').end('Unauthorized');
    } else {
        newExperience.user_id = req.params.id; // Force the insert to use the authorized user_id!
        // If end_date is empty, set it to null instead
        if(newExperience.end_date == '') {
            newExperience.end_date = null;
        }
        Experience.query().insert(newExperience).then(experience => {
            res.status(200).contentType('text/plain').end('New experience added');
        }).catch(err => {
            console.log(err);
            res.status(500).contentType('text/plain').end('Error inserting');
        });
    }
});

router.post('/user/:id/about/new', withAuth, upload.none(), async (req, res) => {
    const newAbout = req.body;

    if(req.id != req.params.id) {
        res.status(401).contentType('text/plain').end('Unauthorized');
    } else {
        newAbout.user_id = req.params.id; // Force the insert to use the authorized user_id!
        About.query().insert(newAbout).then(about => {
            res.status(200).contentType('text/plain').end('New about added');
        }).catch(err => {
            console.log(err);
            res.status(500).contentType('text/plain').end('Error inserting');
        });
    }
});

router.post('/user/:id/project/new', upload.none(), async (req, res) => {
    const newProject = req.body;

    if(false) {
        res.status(401).contentType('text/plain').end('Unauthorized');
    } else {
        newProject.user_id = req.params.id; // Force the insert to use the authorized user_id!
        console.log(newProject);
        Project.query().insert(newProject).then(project => {
            res.status(200).contentType('text/plain').end('New project added');
        }).catch(err => {
            console.log(err);
            res.status(500).contentType('text/plain').end('Error inserting');
        });
    }
});

// Updates a user, experience, about or project with new data
router.post('/user/:id/edit', withAuth, upload.none(), async (req, res) => {
    const updateUser = req.body;

    if(req.id != req.params.id) {
        res.status(401).contentType('text/plain').end('Unauthorized');
    } else if(!validateEmail(updateUser.email)) {
        res.status(401).contentType('text/plain').end('Invalid email adress');
    } else {
        if(updateUser.image_id == null) {
            updateUser.image_id = 0
        }
        updateUser.id = req.params.id; // Force the update to only update the correct user
        User.query().patch(updateUser).where('id', '=', req.params.id).then(user => {
            res.json(user);
        }).catch(err => {
            console.log(err);
            res.status(500).contentType('text/plain').end('Error updating');
        });
    }
});

router.post('/user/:id/about/:item/edit', withAuth, upload.none(), async (req, res) => {
    const updateAbout = req.body;

    if(req.id != req.params.id) {
        res.status(401).contentType('text/plain').end('Unauthorized');
    } else {
        updateAbout.user_id = req.params.id; // Force the update to only update the correct item!
        updateAbout.id = req.params.item;
        About.query().patch(updateAbout).where('user_id', '=', req.params.id).andWhere('id', '=', req.params.item).then(about => {
            res.json(about);
        }).catch(err => {
            console.log(err);
            res.status(500).contentType('text/plain').end('Error updating');
        });
    }
});

router.post('/user/:id/experience/:item/edit', withAuth, upload.none(), async (req, res) => {
    const updateExperience = req.body;

    if(req.id != req.params.id) {
        res.status(401).contentType('text/plain').end('Unauthorized');
    } else {
        updateExperience.user_id = req.params.id; // Force the update to only update the correct item!
        updateExperience.id = req.params.item;
        Experience.query().patch(updateExperience).where('user_id', '=', req.params.id).andWhere('id', '=', req.params.item).then(experience => {
            res.json(experience);
        }).catch(err => {
            console.log(err);
            res.status(500).contentType('text/plain').end('Error updating');
        });
    }
});

router.post('/user/:id/project/:item/edit', upload.none(), async (req, res) => {
    const updateProject = req.body;

    if(false) {
        res.status(401).contentType('text/plain').end('Unauthorized');
    } else {
        updateProject.user_id = req.params.id; // Force the update to only update the correct item!
        updateProject.id = req.params.item;
        Project.query().patch(updateProject).where('user_id', '=', req.params.id).andWhere('id', '=', req.params.item).then(project => {
            res.json(project);
        }).catch(err => {
            console.log(err);
            res.status(500).contentType('text/plain').end('Error updating');
        });
    }
});



// Upload and download an image. Only png and jpg so far
router.post('/uploadimg', upload.single('image'), (req, res) => {
    const uploadPath = req.file.path;
    const savePath = process.env.SAVE_IMAGE_PATH + uuidv4() + path.extname(req.file.originalname).toLowerCase();

    if (path.extname(req.file.originalname).toLowerCase() === '.png'
        || path.extname(req.file.originalname).toLowerCase() === '.jpg') {
        fs.rename(uploadPath, savePath, async err => {
            if (err) return res.status(500).contentType('text/plain').end('Error!');
            const img = await Image.query().insert( {image_path: savePath} );
            res.json({id: img.id});
        });
    } else {
        fs.unlink(uploadPath, err => {
            if (err) return res.status(500).contentType('text/plain').end('Error!');

            res.status(401).contentType('text/plain').end('Only image files are allowed');
        });
    }
});

router.get('/display/:id', async (req, res) => {
    const imgPath = await Image.query().where('id', '=', req.params.id).first();
    if(imgPath == null) {
        const backup = await Image.query().where('id', '=', 0).first();
        res.sendFile(path.resolve('.') + '/' + backup.image_path);
    } else {
        res.sendFile(path.resolve('.') + '/' + imgPath.image_path);
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}


// Handle login, registering and password changes
router.post('/register', upload.none(), async (req, res) => {
    const { email, password } = req.body;
    const userexists = await User.query().where('email', '=', email).first();
    console.log(userexists);
    if(userexists != null) {
        res.status(401).contentType('text/plain').end('User already exists').send();
    } else if(!validateEmail(email)) {
        res.status(401).contentType('text/plain').end('Invalid email adress').send();
    } else {
        bcrypt.hash(password, 10, async function(err, hash) {
            const user = await User.query().insert({email: email, password: hash});
            const payload = { id: user.id, role: user.role };
            const token = jwt.sign(payload, process.env.SECRET, {
                expiresIn: '12h'
            });
            res.json({user: user.id, role: user.role, token: token})
        });
    }
});

function isPasswordCorrect(user, password, callback) {
    bcrypt.compare(password, user.password, function(err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
}

router.post('/login', upload.none(), async (req, res) => {
    const { email, password } = req.body;
    const user = await User.query().where('email', '=', email).first();
    if(user != null) {
        isPasswordCorrect(user, password, function(err, same) {
            if (err) {
                res.status(500).contentType('text/plain').end('Server error!');
            } else if (!same) {
                console.log('Password mismatch');
                res.status(401).contentType('text/plain').end('No such user/password exists');
            } else {
                // Token authentication
                const payload = { id: user.id, role: user.role };
                const token = jwt.sign(payload, process.env.SECRET, {
                    expiresIn: '12h'
                });
                res.json({user: user.id, role: user.role, token: token});
                //res.cookie('token', token, { httpOnly: true }).sendStatus(200);
            }
        });
    } else {
        console.log('No such user found');
        res.status(401).contentType('text/plain').end('No such user/password exists');
    }
});

module.exports = router;
