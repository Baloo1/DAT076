const express = require('express');
const router = express.Router();
// const db = require('./queries');

// API Routes
router.get('/', (req, res) => {
  res.send('hello');
});

// router.get('/login', db.validatePassword);



module.exports = router;
