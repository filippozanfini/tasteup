function sendEmail() {
  document.getElementById("alert").innerHTML =
    '<div class="alert alert-success" role="alert">\
    Email inviata con successo!\
  </div>';

  window.setTimeout(hideAlert, 4000);
}

function hideAlert() {
  document.getElementById("alert").innerHTML = "";
  $(":input").val("");
}

function logout() {
  $.ajax({
    url: "logout",
    method: "POST",
    data: {},
    success: function () {
      location.replace("/");
    },
  });
}

window.onload = function () {
  document.getElementById("send-btn").onclick = sendEmail;
  document.getElementById("logout-btn").onclick = logout;
  getOrderJSON();
};

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
