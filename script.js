$(document).on("ready",function(){
function appendTaskToList(val) {
    $('#list').append("<li>" + val + "  <a href='#' class='done-btn'>Check Item</a> <a href='#' class='cancel-btn'>Remove Item</a></li>");
}


if (localStorage.tasks) {
    var tasks = JSON.parse(localStorage.tasks);
}else {
    var tasks = [];
}

for(var i=0;i<tasks.length;i++) {
    appendTaskToList(tasks[i]);
}

var addTask = function(){
    var val = $('#name').val();
        tasks.push(val);
        localStorage.tasks = JSON.stringify(tasks);
        appendTaskToList(val);
        $('#name').val("").focus();
};

$('#add-btn').click(addTask);
$('#name').keyup(function(e){  //Add Item to list through enter key press 
    if (e.keyCode === 13) {
        addTask();
    }
});
$('.done-btn').live( 'click', function() {
  $(this).parent('li').addClass('done');
   
  localStorage.tasks = JSON.stringify(tasks);
  });   
$('.cancel-btn').live( 'click', function() {
  $(this).parent('li').fadeOut();
  var cb=$(this).parent('li');
  tasks.pop(cb);
  localStorage.tasks = JSON.stringify(tasks);
});
});
   