let assem = {};
let sql = require('../plugs/sql');
let fs = require('fs');
let sqlstatement = JSON.parse(fs.readFileSync('./controllers/sqlstatements.json'));

assem.index = function(req,res,next)
{
  let sqlstr = sqlstatement['getAssembly'].sql;
  sql.query(sqlstr,function(err,result){
    if(err!=null){
      res.render('error',{error:err});
    }else{
      res.render('assembly',{result:result.recordset});
    }
  });
}

module.exports = assem;
