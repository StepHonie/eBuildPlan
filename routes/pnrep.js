let express = require('express');
let router = express.Router();
let pnrep = require('../controllers/pnrep.js');

router.get('/',pnrep.index);


module.exports = router;
