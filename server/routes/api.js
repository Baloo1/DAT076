const express = require('express');
const router = express.Router();
require('dotenv').config();
const {User, Experience, About, Project, Image} = require('../models/schema');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const upload = multer({
    dest: process.env.TMP_IMAGE_PATH
});

// API Routes
router.get('/', (req, res) => {
    res.send('hello');
});


router.get('/users', async (req, res) => {
    const users = await User.query()
    res.json(users)
});

// Get all experiences, abouts, projects of a user by id
router.get('/:id/experiences', async (req, res) => {
    const experiences = await Experience.query().where('user_id', '=', req.params.id)
    res.json(experiences)
});

router.get('/:id/abouts', async (req, res) => {
    const abouts = await About.query().where('user_id', '=', req.params.id)
    res.json(abouts)
});

router.get('/:id/projects', async (req, res) => {
    const projects = await Project.query().where('user_id', '=', req.params.id)
    res.json(projects)
});

//TODO add a middleware function to check if user logged in is same as trying to add

// Add a new experience, about or project of a user by id
router.post('/:id/experience', async (req, res) => {
    const newExperience = req.body

    const experience = await Experience.query().insert(newExperience)

    res.send(experience)
});

router.post('/:id/about', async (req, res) => {
    const newAbout = req.body

    const ebout = await Experience.query().insert(newAbout)

    res.send(newAbout)
});

router.post('/:id/project', async (req, res) => {
    const newProject = req.body

    const project = await Experience.query().insert(newProject)

    res.send(project)
});

// Upload and download an image. Only png and jpg so far
router.post('/uploadimg', upload.single('image'), (req, res) => {
    const uploadPath = req.file.path;
    const savePath = process.env.SAVE_IMAGE_PATH + uuidv4() + path.extname(req.file.originalname).toLowerCase();

    if (path.extname(req.file.originalname).toLowerCase() === '.png'
        || path.extname(req.file.originalname).toLowerCase() === '.jpg') {
        fs.rename(uploadPath, savePath, async err => {
            if (err) return res.status(500).contentType('text/plain').end('Error!');
            await Image.query().insert({image_path: savePath});
            res.status(200).contentType('text/plain').end('Upload success! ');
        });
    } else {
        fs.unlink(uploadPath, err => {
            if (err) return res.status(500).contentType('text/plain').end('Error!');

            res.status(401).contentType('text/plain').end('Only image files are allowed');
        });
    }
});

router.get('/display/:id', async (req, res) => {
    const imgPath = await Image.query().where('id', '=', req.params.id);
    res.sendFile(imgPath[0].image_path);
});

// Handle login, registering and password changes
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const userexists = await User.query().where('email', '=', email).first();
    console.log(userexists)
    if(userexists != null) {
        res.status(401).contentType('text/plain').end('User already exists').send();
    } else {
        bcrypt.hash(password, 10, async function(err, hash) {
            const user = await User.query().insert({email: email, password: hash});
            res.status(200).contentType('text/plain').end('User created!');
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

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.query().where('email', '=', email).first();
    if(user != null) {
        isPasswordCorrect(user, password, function(err, same) {
            if (err) {
                res.status(500).contentType('text/plain').end('Server error!');
            } else if (!same) {
                res.status(401).contentType('text/plain').end('No such user/password exists');
            } else {
                // TODO implement auth here
                //const payload = { email };
                //const token = jwt.sign(payload, secret, {
                //    expiresIn: '1h'
                //});
                //res.cookie('token', token, { httpOnly: true })
                //    .sendStatus(200);
            }
        });
    } else {
        res.status(401).contentType('text/plain').end('No such user/password exists');
    }
});

module.exports = router;
