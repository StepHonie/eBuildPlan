$(function(){
  bindEvents();
  loadCustomer();
  loadFamily();
});

function bindEvents(){

  $('#addEmail').click(function()
  {
    var email = $('#emailList').val();
    var err = new Array();
    err = email.split(";");
    $.each(err,function(idx,val){
      let obj = {
        EmailAddress:val,
        Customer:$('#ecus').val(),
        Family:$('#efam').val(),
        EmailGroup:$('#emailGroup').val()
      };
      ajax({sqlName:'addEmailList',params:obj},function(res){
        $('#emList').append('<tr><td>'+obj.EmailAddress+'</td><td>'+obj.Customer+'</td><td>'+obj.Family+'</td><td>'+obj.EmailGroup+'</td><td><img class="delEmailList" src="/images/icons/close.png" style="margin:0 auto;display:none"></td></tr>');
      });
    });

  });

  $('#emList tr').hover(
    function(){this.childNodes[9].childNodes[1].style.display="block";},
    function(){this.childNodes[9].childNodes[1].style.display="none";}
  );

  $('.delEmailList').click(function(e)
  {
    alert("The columns design in DB is invalid");
    var id = $(e.target).parent().parent().attr("id");
    if(id==="")return;
    ajax({sqlName:'delEmailList',params:{ID:id}},function(res){
      $("tr[id='"+id+"']").remove();
    });
  });

}

function loadCustomer()
{
  getOptions('ecus',{sqlName:'getCustomer'});
}

function loadFamily()
{
  getOptions('efam',{sqlName:'getFamily'});
}
