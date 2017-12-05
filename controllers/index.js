let index = {};
let sql = require('../plugs/sql');
let fs = require('fs');
let sqlstatement = JSON.parse(fs.readFileSync('./controllers/sqlstatements.json'));

index.index = function(req,res,next)
{
  let strsql = sqlstatement['getAreaStation'].sql;
  sql.query(strsql,function(err,result)
  {
    if(err!=null)
    {
      res.render('error',{error:err})
    }else{
      res.render('index',{result:result.recordset});
    }
  });
}


module.exports = index;
