function ajax(query,callback)
{//Use callback() to instead "async:false" can promote efficiency;
  $.ajax({
    url:'/post',
    type:'POST',
    contentType: 'application/json',
    data:JSON.stringify(query),
    success:function(res)
    {
      if(res.originalError!=null)
      {
        alert(res.originalError.info.message);
        return;
      }else{
        return callback(res);
      }
    }
  });
}

function getOptions(select,query)
{
  ajax(query,function(data)
  {
    if (data !=null)
    {
      let $select = $("#"+select);
      $.each(data,function(index,value){
        let opt = $("<option></option>").html(value.Label).val(value.Value);
        $select.append(opt);
      });
    }
  });
};
