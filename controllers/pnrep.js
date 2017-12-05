let pnrep = {};
let sql = require('../plugs/sql');
let fs = require('fs');
let sqlstatement = JSON.parse(fs.readFileSync('./controllers/sqlstatements.json'));

pnrep.index = function(req,res,next)
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
      res.render('pnrep',{title:"pnrep"});
  //   }
  // });
}

module.exports = pnrep;
