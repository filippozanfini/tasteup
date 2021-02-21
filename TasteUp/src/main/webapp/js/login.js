function signup() {
  document.location.replace("signup");
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var username = profile.getEmail();
  var password = profile.getId();

  $.ajax({
    url: "registrazioneAccount",
    method: "POST",
    data: { username: username, password: password },
    success: function (responseData) {
      if (responseData) 
          window.location.replace("/");
        
      else {
        Swal.fire({
          title: "Error",
          text: "",
          icon: "error",
          confirmButtonColor: "#000000",
        });
      }
    },

    fail: function (error) {
      swal("Errore. Riprova");
      console.log(error);
    },
  });
}
window.onload = function () {
  document.getElementById("signup-btn").onclick = signup;
};

function closeNav() {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}
