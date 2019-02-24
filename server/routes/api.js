const express = require('express');
const router = express.Router();
const {User, Experience, About, Project} = require('../models/schema')

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


module.exports = router;
