$(function(){
  bindEvents();
  $('#assemList a').editable();
});

function bindEvents(){
  $('#assemList tr').hover(
    function(){this.childNodes[9].childNodes[1].style.display="block"},
    function(){this.childNodes[9].childNodes[1].style.display="none"}
  );

  $('.updateAssem').click(function(){
    let m = $(this).prev();
    let PN = m.text();
    let AS = m.prev().text();
    let obj = {pn:PN,as:AS};
    ajax({sqlName:'updateAssemblyPN',params:obj},function(){
      // $(this).attr('src','/images/icons/checked.png');
      //try to get 'id' from database will be more easy.
    });
  });

}
