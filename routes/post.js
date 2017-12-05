let express = require('express');
let router = express.Router();
let post = require('../controllers/post.js');

router.post('/',post.handler);


module.exports = router;
