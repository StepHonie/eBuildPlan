let sumrep = {};
let sql = require('../plugs/sql');
let fs = require('fs');
let sqlstatement = JSON.parse(fs.readFileSync('./controllers/sqlstatements.json'));

sumrep.index = function(req,res,next)
{
//   let strsql = sqlstatement['GetIOReport'].sql;
//   sql.query(strsql,function(err,result)
//   {
//     if(err!=null)
//     {
//       res.render('error',{error:err})
//     }else{
//       console.log(">>>>",result);
//       res.render('buildPlan',{result:result.recordset});
      res.render('sumrep',{title:"sumrep"});
  //   }
  // });
}

module.exports = sumrep;
