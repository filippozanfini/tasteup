var order = [];

window.onload = function () {
  document.getElementById("logout-btn").onclick = logout;
  document.getElementById("aggiungi").onclick = validateForm;

  getAllAddress();
  getOrderJSON();
  calculateTotal();
};
function getOrderJSON() {
  $.ajax({
    url: "getCurrentOrder",
    method: "POST",
    data: {},
    success: function (responseData) {
      if (responseData != "notlogged") {
        order = JSON.parse(responseData);
        updateCartBadge(order.quantitaProdotti.toString());
        calculateTotal();
      }
    },
    error: function () {
      document.getElementById("div_form_in").innerHTML = "";
      document.getElementById("productsBox").innerHTML =
        "<p>Nessun prodotto nel carrello :)</p>";
    },
  });
}
function calculateTotal() {
  var root = '<h5 id="totale">Totale ordine</h5>\
	  <div class="ordered-products">';

  var totalPrice = order.totale;

  order.menu.map((menu) => {
    root +=
      "<p id='quantita'>" +
      menu.quantita +
      "x " +
      menu.nome_menu +
      " - &euro;" +
      menu.prezzo +
      "</p>";
  });

  order.panini.map((panino) => {
    root +=
      "<p id='quantita'>" +
      panino.quantita +
      "x " +
      panino.nome_panino +
      " - &euro;" +
      panino.prezzo +
      "</p>";
  });

  order.bevande.map((bevanda) => {
    root +=
      "<p id='quantita'>" +
      bevanda.quantita +
      "x " +
      bevanda.nome_bevanda +
      " - &euro;" +
      bevanda.prezzo +
      "</p>";
  });
 
  root +=
    "<p id='consegna'>Consegna - &euro;2.50</p>\
  </div>"+
  '<hr class="dashed"> \
		  <h6 id="totale">Totale: &euro;' +
    totalPrice.toFixed(2) +
    '</h6>\
    <form class="confirm" method="POST" action="success">\
				  <div class="confirm">\
                    <button class="confirm_button" id="aggiungi" name="prova"><span>Conferma Ordine</span></button>\
				  </div>\
        </form>' ;

  document.getElementById("div_form_in").innerHTML = root;
  document.querySelector(".confirm_button").addEventListener('click',addOrder);


}

function Indirizzo(username, nome_indirizzo, cap) {
  this.username = username;
  this.nome_indirizzo = nome_indirizzo;
  this.cap = cap;
}
function aggiungi_indirizzo() {

  var nome_indirizzo =
             document.getElementsByName("nome")[0].value + " , " + 
             document.getElementsByName("numero_telefonico")[0].value + " ," +
             document.getElementsByName("indirizzo")[0].value + " , " + 
             document.getElementsByName("citta")[0].value + " , " ;
             

  var cap = document.getElementsByName("cap")[0].value;
  var username = document.getElementById("aggiungi").getAttribute("name");

  console.log(nome_indirizzo);
  
  var indirizzo = new Indirizzo(username, nome_indirizzo, cap);

  $.ajax({
    url: "aggiungiIndirizzo",
    method: "POST",
    data: JSON.stringify(indirizzo),
    contentType: "application/json",
    success: function (response) {
      if (response == true) {
       
        document.getElementById("divindirizzi").innerHTML = "";
        getAllAddress();
       
      

      } else
      Swal.fire({
        title: 'Errore!',
        text: 'Indirizzo esistente.',
        icon: 'error',
        confirmButtonColor: '#000000',
      });
    },
    fail: function (error) {
      console.log(error);
    },
  });

  
}

function validateForm() {
  var nome = document.getElementsByName("nome")[0].value;
  var indirizzo = document.getElementsByName("indirizzo")[0].value;
  var citta = document.getElementsByName("citta")[0].value;
  var cap = document.getElementsByName("cap")[0].value;

  if (
    nome == "" || nome == null ||
    indirizzo == "" || indirizzo == null ||
    citta == "" || citta == null ||
    cap == "" || cap == null) {
      Swal.fire({
        title: 'Errore!',
        text: 'Riempi tutti i campi.',
        icon: 'error',
        confirmButtonColor: '#000000',
    });
    
  } 
  else if (cap != 87036 && cap != 87100) {
    Swal.fire({
      title: 'Errore!',
      text: 'Mi dispiace, il servizio copre solo le zone di Rende e Cosenza.',
      icon: 'error',
      confirmButtonColor: '#000000',
    });
  }
   else {
    aggiungi_indirizzo();
  }
}

function getAllAddress() {
  var addresses = [];

  $.ajax({
    url: "getIndirizziJSON",
    method: "POST",
    data: {},
    success: function (responseData) {
      addresses = JSON.parse(responseData);

      $.each(addresses.indirizzi, function (key, value) {
        var ind = JSON.stringify(value.indirizzo + " " + value.cap);
        $("#divindirizzi").append(
          '<div class="cardInfo">\
			<td><input id="radiobtn" type="radio" name="Contact0_AmericanExpress" class="check" checked="checked" indirizzo=' +
            ind +
            '> </td> \
			<h5 id="nominativi_indirizzi">' +
            value.indirizzo +
            " " +
            value.cap +
            "</h5></div>"
        );
      });
    },
    fail: function (error) {
      console.log(error);
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
  gapi.load('auth2', function() {
  gapi.auth2.init();
  });
}
     

function updateCartBadge(value) {
var cartBadge = document.getElementById("cart-badge");
cartBadge.innerHTML = value;
}


  function addOrder() {
    var address = {};
    address.indirizzo = $("input[type='radio']")
      .filter(":checked")
      .attr("indirizzo");
    address.price = order.totale;
  
    $.ajax({
      url: "saveOrder",
      method: "POST",
      data: JSON.stringify(address),
      contentType: "application/json",
      success: function (responseData) {
        
    },
    error: function () {
      Swal.fire({
        title: 'Attenzione!',
        text: "Impossibile effettuare l'ordine. Contatta l'assistenza.",
        icon: 'error',
        confirmButtonColor: '#000000',
      });
    },
  });
}


