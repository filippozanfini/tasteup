window.onload = function () {
  console.log("ci sono");
  setId();
  document.getElementById("logout-btn").onclick = logout;

  getOrderJSON();
};
function setId() {
  var id = undefined;
  console.log("ciao");
  $.ajax({
    url: "getId",
    method: "POST",
    data: {},
    success: function (responseData) {
      console.log(responseData);
      console.log("ciao ci sono");
      id = responseData;
      console.log(id);
      $(".id_ordine").append("<h1> Id ordine: # " + id + "</h1>");
    },
    fail: function (error) {
      console.log("erroreeeeeeee");
      console.log("error");
    },
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
        console.log(order);
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
