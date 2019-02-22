const express = require('express');
const router = express.Router();

// API Routes
router.get('/', (req, res) => {
  res.send('hello');
});

router.get('/users', async (req, res) => {
  const users = await User.query()
  res.json(users)
});

router.get('/experiences/:id', async (req, res) => {
  const user = await User.query().findById(req.params.id).eager('user_experiences')
  res.json(user)
});

module.exports = router;
