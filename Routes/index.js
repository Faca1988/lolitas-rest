const express = require('express');
const router = express.Router();
const { auth } = require('../Middlewares/auth.middleware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    message: 'home page'
  });
});


router.get('/login', auth);

module.exports = router;
