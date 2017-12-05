var nodemailer=require('nodemailer');
var mailSender = {};

mailSender.send = function(req,res,next)
  {
    var trans = nodemailer.createTransport({ignoreTLS:true,host:"corimc04",secureConnection:false});
    trans.sendMail({from:req.body.source,
                    to:req.body.address,
                    subject:req.body.subject,
                    html:req.body.content},
                    function(err,result)
                    {
                      res.send(result);
                      trans.close();
                    });
  }

module.exports = mailSender;
