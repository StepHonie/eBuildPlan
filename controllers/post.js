let post={};
let sql = require('../plugs/sql');
let fs=require("fs");
let sqlstatement=JSON.parse(fs.readFileSync("./controllers/sqlstatements.json"));

post.handler = function(req, res, next)
{
		if(req.body.sqlType =='sp')
		{
			sql.exec(req.body.sqlName,req.body.params,function(err,result)
			{
				if(err!=null)
				{
					res.send(err);
				}else{
					res.send(result.recordset);
				}
			});
		}else{
			let sqlstr = sqlstatement[req.body.sqlName].sql;
			sql.queryWithParams(sqlstr,req.body.params,function(err,result)
			{
				if(err!=null)
				{
					res.send(err);
				}else{
					res.send(result.recordset);
				}
			});
		};
}

module.exports = post;
