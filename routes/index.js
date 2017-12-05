let express = require('express');
let router = express.Router();
let index = require('../controllers/index.js');
// let post = require('../controllers/post.js');

// router.post('/addAreaStation',post.addAreaStation);
router.get('/',index.index);

module.exports = router;
