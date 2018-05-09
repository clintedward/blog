$(document).ready(function(){

  $('#register').on('click', function(){

    $.getJSON('http://localhost:3000/posts', function(posts){



    for (user of users) {
      $('.content').append('<h2>' +user.title+ '</h2>');
      $('.content').append(user.content);
      $('.content').append('<img src=" ' + user.image_url + ' ">');
    };
  })
  });
});
