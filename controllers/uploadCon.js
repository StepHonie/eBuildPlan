let upload = {};
let sql = require('../plugs/sql');
let fs = require('fs');
let sqlstatement = JSON.parse(fs.readFileSync('./controllers/sqlstatements.json'));

upload.index = function(req,res,next)
{
  res.render('upload',{result:"title"});
}

module.exports = upload;
