let express = require('express');
let router = express.Router();
let email = require('../controllers/emailCon.js');
var mailSender = require('../controllers/mailSender.js');

router.get('/',email.index);
router.post('/sendMail',mailSender.send);

module.exports = router;
