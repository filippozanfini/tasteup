window.onload = function () {
  document.getElementById("passw-btn").onclick = cambiaPassword;
  document.getElementById("logout-btn").onclick = logout;

  getOrderJSON();
};

function cambiaPassword() {
  var p = document.getElementsByName("password_chngpsw")[0].value;
  Swal.fire({
    title: "Attenzione!",
    text: "Sei sicuro di voler cambiare la password?",
    icon: "error",
    showCancelButton: true,
    confirmButtonColor: "#000000",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        url: "cambiaPassword",
        method: "POST",
        data: { password: p },
        success: function (response) {
          if (response == true) {
            Swal.fire({
              title: "Ben fatto!",
              text: "La tua password è stata modificata con successo",
              icon: "success",
              confirmButtonColor: "#000000",
            });
          } else {
            Swal.fire({
              title: "Errore!",
              text: "Non è stato possibile modificare la password.",
              icon: "error",
              confirmButtonColor: "#000000",
            });
          }
        },
        fail: function (error) {
          console.log(error);
        },
      });
    }
  });
}

function logout() {
  signOut();
  $.ajax({
    url: "logout",
    method: "POST",
    data: {},
    success: function () {
      location.replace("/");
    },
  });
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.disconnect();
  gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
}

function onLoad() {
  gapi.load("auth2", function () {
    gapi.auth2.init();
  });
}
function getOrderJSON() {
  $.ajax({
    url: "getCurrentOrder",
    method: "POST",
    data: {},
    success: function (responseData) {
      if (responseData != "notlogged") {
        order = JSON.parse(responseData);
        updateCartBadge(order.quantitaProdotti.toString());
      }
    },
    fail: function () {
      console.log("ERROR JSON");
    },
  });
}

function updateCartBadge(value) {
  var cartBadge = document.getElementById("cart-badge");
  cartBadge.innerHTML = value;
}

function closeNav() {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}
