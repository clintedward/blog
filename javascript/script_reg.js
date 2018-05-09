//animate of the login/sign-up box. Animate function works however it needs to be linked to the submit button.
// $('.message a').click(function(){
//   $('form').animate({
//     height: "toggle",
//     opacity: "toggle"
//   }, "slow");
// });

//test register button
$(document).ready(function(){

  $('.reg-form').submit(function(event){
    // alert('i work');
    event.preventDefault();

    let usernames = $('input[name="username"]').val();
    let password = $('input[name="password"]').val();
    let email = $('input[name="email"]').val();


    $.ajax({

      url: 'http://localhost:3000/users',
      type: 'POST',
      data: {
        username: usernames,
        password: password,
        email: email
      }

    }).done(function(){
      alert('Submitted')
      window.location.replace("index.html");
    });



  });




});
