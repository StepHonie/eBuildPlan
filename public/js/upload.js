$(function(){
  bindEvents();
});

function bindEvents()
{
  $('#btnUpload').click(function()
  {
    var group = $('#selGroup').val();
    $('#asList').empty();
    var file = $('#iptCsv')[0].files[0];
    if(file===undefined) {alert("Please upload a file.");return;}
    var fr = new FileReader();
    var group = "stephanie_fang@jabil.com";
    fr.onload = function(e)
    {
       var data = e.target.result;
       var workbook = XLSX.read(data,{type:"binary"});
       var sheetName = workbook.SheetNames[0];
       var sheet = workbook.Sheets[sheetName];
      //  var info = XLSX.utils.sheet_to_json(sheet,{header:1});
       var info = XLSX.utils.sheet_to_json(sheet);
       console.log(info);
       var date = info[0].Date;
       var fam = info[0].Customer;
       var num=0,con="",content="";
       $.each(info,function(idx,obj){
         var query =  {sqlName:'AlterBuildPlan',sqlType:'sp',params:obj};
          $.ajax({
                  url:'/post',
                  type:'POST',
                  contentType: 'application/json',
                  data:JSON.stringify(query),
                  async:false,
                  success:function(res)
                  {
                    if(res.originalError!=null)
                    {
                      $('#asList').append('<tr><td>'+obj.Customer+'</td><td>'+obj.Area+'</td><td>'+obj.AssemblyNumber+'</td><td>'+obj.Date+'</td><td>'+obj.Input+'</td><td>'+obj.Output+'</td><td>'+"failed"+'</td><td>'+res.originalError.info.message+'</td></tr>');
                    }else{
                      content = '<tr><td>'+obj.Customer+'</td><td>'+obj.Area+'</td><td>'+obj.AssemblyNumber+'</td><td>'+obj.Date+'</td><td>'+obj.Input+'</td><td>'+obj.Output+'</td><td>'+""+'</td><td>'+""+'</td></tr>';
                      $('#asList').append(content);
                      con+='</br>'+content;
                      num++;
                    }
                  }
                });
       });
       //send mail
       if(info.length===num)
       {
         var subject = fam + " Build Plan from " + date;
         var obj = {source:"eBuildPlan CTU@JABIL.COM",
                    address:group,
                    subject:subject,
                    content:con};
         $.ajax({url:'/email/sendMail',
                 type:'POST',
                 contentType:'application/json',
                 data:JSON.stringify(obj),
                //  async:false,
                 success:function(res)
                  {
                    //  alert(res.messageId);
                  }
                });
       }
    }
    fr.readAsBinaryString(file);
  });
}
