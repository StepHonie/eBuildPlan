let express = require('express');
let router = express.Router();
let sumrep = require('../controllers/sumrep.js');

router.get('/',sumrep.index);


module.exports = router;
