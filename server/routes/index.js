const express = require('express')
const router = express.Router()

// API Routes
router.get('/', (req, res) => {
  res.send('hello')
})

module.exports = router;
