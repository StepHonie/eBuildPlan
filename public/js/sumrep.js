$(function(){
  bindEvents();
  loadCustomer();
  loadArea();
  loadFamily();
});

function bindEvents(){
  $('#viewBP').click(function(){
    var obj = {DateFrom:$('#fdate').val(),
               DateTo:$('#tdate').val(),
               Customer_ID:$('#selCus').val(),
               Family_ID:$('#selfam').val(),
               Area:$('#selArea').val()};
  ajax({sqlName:'GetIOReport',sqlType:'sp',params:obj},function(res){
      console.log(res);
      $('#thList').empty();
      $('#tbList').empty();
      for(var key in res[0])
      {
        // var r = key.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        // if(r==null)
        // {
        //   return false; 
        // }else{
        //   key =
        // }
        $('#thList').append('<td>'+key+'</td>');
      }
      $.each(res,function(idx,obj)
      {
        for(var key in obj)
        {
          td+='<td>'+obj[key]+'</td>';
        }
        tr='<tr>'+td+'</tr>';
        $('#tbList').append(tr);
        var td="";
        var tr="";
      });
    });
  });
}

function loadCustomer()
{
  getOptions('selCus',{sqlName:'getCustomer'});
}

function loadFamily()
{
  getOptions('selfam',{sqlName:'getFamily'});
}

function loadArea()
{
  getOptions('selArea',{sqlName:'getArea'});
}
