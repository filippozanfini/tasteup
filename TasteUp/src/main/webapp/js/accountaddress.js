var order = [];

window.onload = function () {
  document.getElementById("logout-btn").onclick = logout;
  document.getElementById("aggiungi").onclick = validateForm;

  getAllAddress();
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
        updateCartBadge(order.quantitaProdotti.toString());
      
      }
    },
    error: function () {
      document.getElementById("total-price").innerHTML = "";
      document.getElementById("productsBox").innerHTML =
        "<p>Nessun prodotto nel carrello :)</p>";
    },
  });
}



function Indirizzo(username, nome_indirizzo, cap) {
  this.username = username;
  this.nome_indirizzo = nome_indirizzo;
  this.cap = cap;
}

function aggiungi_indirizzo() {

  var nome_indirizzo =
             document.getElementsByName("nome")[0].value + " , " + 
             document.getElementsByName("indirizzo")[0].value + " , " + 
             document.getElementsByName("citta")[0].value + " , " + 
             document.getElementsByName("numero_telefonico")[0].value + " ";

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
function rimuovi_indirizzo(indirizzo,cap) {

  var username = document.getElementById("aggiungi").getAttribute("name");
  
  console.log(username);
  console.log(indirizzo);
  console.log(cap);

  $.ajax({
    url: "rimuoviIndirizzo",
    method: "POST",
    data: {username: username , indirizzo: indirizzo, cap: cap},
    success: function (response) {
      if (response == true) {
        document.getElementById("divindirizzi").innerHTML = "";
        getAllAddress();
      } else
      Swal.fire({
        title: 'Errore!',
        icon: 'error',
        confirmButtonColor: '#000000',
      });
    },
    fail: function (error) {
      console.log(error);
    },
  });

  
}

// controlli sul form
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
     
      if(addresses == null)
       document.getElementById("divindirizzi").innerHTML = "<h5 id='no_indirizzo'> Nessun indirizzo presente. </h5>";
      else{
        $.each(addresses.indirizzi, function (key, value) {
          $("#divindirizzi").append(
            '<div class="cardInfo">\
        <td>\           <h5 id="nominativi_indirizzi">' +
              value.indirizzo +
              " " +
              value.cap +'</h5> </td>'+
              '<button onclick="rimuovi_indirizzo(\'' +
              value.indirizzo +
              "' , '" +
              value.cap +
              '\')" class="delete-btn">Rimuovi</button>'+
              "</div>" 
          );
        });

        
     }

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
