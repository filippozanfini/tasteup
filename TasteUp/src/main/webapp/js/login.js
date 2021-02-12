function login() {
  var username =  document.getElementsByName("username_login")[0].value;
  var password =  document.getElementsByName("password_login")[0].value;

  $.ajax({
    url: "loginAccount",
    method: "POST",
    data: { username: username, password: password },
    success: function (responseData) {
      if (responseData) {
        if (username == "gestore@gestore") {
          window.location.replace("gestoreConsegne");
        } else if (username == "admin@admin") {
          window.location.replace("indexadmin");
        } else {
          window.location.replace("/");
        }
      } else {
      
        Swal.fire({
          title: 'Errore!',
          text: 'Credenziali Errate.',
          className: "prova",
          icon: 'error',
          confirmButtonColor: '#000000',
      
       });
      
      }
    },

    fail: function (error) {
     
      console.log(error);
    },
  });
}

function signup() {
  document.location.replace("signup");
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var username = profile.getEmail();
  var password = profile.getId();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());

  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  
  $.ajax({
    url: "registrazioneAccount",
    method: "POST",
    data: { username: username, password: password },
    success: function (responseData) {
      if (responseData) {
        if (username == "gestore@gestore") {
          window.location.replace("gestoreConsegne");
        } else if (username == "admin@admin") {
          window.location.replace("indexadmin");
        } else {
          window.location.replace("/");
        }
      } else {
        sweetAlert("Oops...", "Credenziali Errate!", "error");
      }
    },

    fail: function (error) {
      swal("Errore. Riprova");
      console.log(error);
    },
  });
}
window.onload = function () {
  document.getElementById("login-btn").onclick = login;
  document.getElementById("signup-btn").onclick = signup;
};
