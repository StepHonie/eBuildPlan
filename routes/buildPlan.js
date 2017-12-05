let express = require('express');
let router = express.Router();
let buildPlan = require('../controllers/buildPlan.js');

router.get('/',buildPlan.index);


module.exports = router;
