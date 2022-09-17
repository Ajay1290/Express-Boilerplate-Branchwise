const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ msg: 'respond with a resource' });
});

module.exports = router;
