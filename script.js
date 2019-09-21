// Add your javascript here
$(function(){
  $("#datepicker").datepicker({
    altField:"#input2",
    altFormat: "yy-mm-dd",
    appendText: "yyyy-mm-dd",
    changeMonth: true,
    changeYear: true
  });
});