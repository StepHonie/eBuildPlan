let email = {};
let sql = require('../plugs/sql');
let fs = require('fs');
let sqlstatement = JSON.parse(fs.readFileSync('./controllers/sqlstatements.json'));

email.index = function(req,res,next)
{
  let sqlstr = sqlstatement['getEmailGroup'].sql;
  sql.query(sqlstr,function(err,result){
    if(err!=null){
      res.render('error',{error:err});
    }else{
      res.render('email',{result:result.recordset});
    }
  });
}

module.exports = email;
