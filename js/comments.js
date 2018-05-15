/* global $ */

function addComment(event){
  event.preventDefault();
  var name = $('#name').val();
  var comment = $('#comment').val();
  $('#comments ul').append(
    '<li><div>'+ name + '</div><div>' + '"'+ comment + '"</div></li><br>'
  );
}


$('#submit').click(addComment);

