let express = require('express');
let router = express.Router();
let upload = require('../controllers/uploadCon.js');

router.get('/',upload.index);
// router.post('/handle',upload.handler);



module.exports = router;
