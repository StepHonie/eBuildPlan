$(function()
{
  bindEvents();
  loadCustomer();
  loadFamily();
  loadArea();
  loadInputStation();
  loadOutputStation();
});

function bindEvents(){
  $('#asList tr').hover(
    function(){this.childNodes[15].childNodes[1].style.display="block";},
    function(){this.childNodes[15].childNodes[1].style.display="none";}
  );

  $('#btnAdd').click(function()
  {
    var obj = {customer_id:$('#customer').val(),
               family_id:$('#family').val(),
               area:$('#area').val(),
               input_station:$('#input_station').val(),
               output_station:$('#output_station').val(),
               input_panelcount:$('#ipcount').val(),
               output_panelcount:$('#opcount').val()};

    ajax({sqlName:'addAreaStationList',params:obj},function(res){
      $('#asList').append('<tr><td>'+obj.customer_id+'</td><td>'+obj.family_id+'</td><td>'+obj.area+'</td><td>'+obj.input_station+'</td><td>'+obj.output_station+'</td><td>'+obj.input_panelcount+'</td><td>'+obj.output_panelcount+'</td><td><img class="delAreaList" src="/images/icons/close.png" style="margin:0 auto;display:block"></td></tr>');
    });
  });

  $('.delAreaList').click(function(e)
  {
    var id = $(e.target).parent().parent().attr("id");
    if(id==="")return;
    ajax({sqlName:'delAreaStationList',params:{ID:id}},function(res){
      $("tr[id='"+id+"']").remove();
    });
  });
}

function loadCustomer()
{
  getOptions('customer',{sqlName:'getCustomer'});
}

function loadFamily()
{
  getOptions('family',{sqlName:'getFamily'});
}

function loadArea()
{
  getOptions('area',{sqlName:'getArea'});
}

function loadInputStation()
{
  getOptions('input_station',{sqlName:'getInputStation'});
}

function loadOutputStation()
{
  getOptions('output_station',{sqlName:'getOutputStation'});
}
