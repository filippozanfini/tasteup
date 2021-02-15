window.onload = function () {
  getAllOrder();
  getOrderJSON();
  document.getElementById("logout-btn").onclick = logout;
};

function getAllOrder() {
  var ordini = [];

  $.ajax({
    url: "getOrdiniEffettuati",
    method: "POST",
    data: {},
    success: function (responseData) {
      ordini = JSON.parse(responseData);
      console.log(ordini);
      var ind = document.getElementById("divOrdini");
      var c = document.getElementById("divbottone");
      c.innerHTML = "";
      ind.innerHTML = "";
      if (ordini.ordini.length == 0) {
        ind.innerHTML += '<p id="noOrders">Non hai effettuato ordini</p>';
      } else {
        $.each(ordini.ordini, function (key, value) {
          console.log(value.fase);
          if (value.fase == "false") {
            console.log(value.fase);
            $("#divOrdini").append(
              '<div class="cardInfo">\
			       				<td><input id="radiobtn" value=' +
                value.id +
                ' type="radio" name="Contact0_AmericanExpress" class="check"> </td> \
			       				<h5 id="nominativi_indirizzi"> #' +
                value.id +
                " " +
                value.indirizzo +
                ",  " +
                value.totale +
                " " +
                "&euro;" +
                "</h5></div>"
            );
          } else if (value.fase == "true") {
            console.log(value.fase);
            $("#divOrdini").append(
              '<div class="cardInfo">\
			 <h5 id="nominativi_indirizzi"> #' +
                value.id +
                " " +
                value.indirizzo +
                ",  " +
                value.totale +
                " " +
                "&euro;" +
                "</h5></div>"
            );
          }
        });

        if (ordini.ordini.length != 0) {
          c.innerHTML += '<button id="remove_add" > Rimuovi</button>';
          document.getElementById("remove_add").onclick = rimuovi;
        }
      }
    },
    fail: function (error) {
      console.log(error);
    },
  });
}

function rimuovi() {
  var check = $("input[type='radio']").filter(":checked").val();
  $.ajax({
    url: "annullaOrdine",
    method: "POST",
    data: { productId: check },
    success: function (response) {
      console.log(response);
      getAllOrder();
    },
    fail: function (error) {
      console.log(error);
    },
  });
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
