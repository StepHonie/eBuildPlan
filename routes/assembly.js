let express = require('express');
let router = express.Router();
let assem = require('../controllers/assemblyCon.js');

router.get('/',assem.index);

module.exports = router;
