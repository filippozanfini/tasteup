var ordine = [];

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

      var ind = document.getElementById("divOrdini");
      var c = document.getElementById("divbottone");
      c.innerHTML = "";
      ind.innerHTML = "";
      if (ordini.ordini.length == 0) {
        ind.innerHTML += '<p id="noOrders">Non hai effettuato ordini</p>';
      } else {
        $("#divOrdini").append('<h2 id="description" > I miei Ordini</h2>');
        $.each(ordini.ordini, function (key, value) {
          var pos1 = getPosition(value.indirizzo, ",", 0, 1);
          var nominativo = value.indirizzo.substring(0, pos1);
          var pos2 = getPosition(value.indirizzo, ",", pos1, 2);
          var numero = value.indirizzo.substring(pos1 + 1, pos2);
          var pos3 = getPosition(value.indirizzo, ",", pos2, 3);
          var indir = value.indirizzo.substring(pos2 + 1, pos3);
          var pos4 = getPosition(value.indirizzo, ",", pos3, 4);
          var citta = value.indirizzo.substring(pos3 + 1, pos4 - 1);
          var pos5 = getPosition(value.indirizzo, ",", pos4, 5);
          var cap = value.indirizzo.substring(pos4 + 1, pos5);

          if (value.fase == "false") {
            $("#divOrdini").append(
              ' <div class="card text-center">\
                 <div class="card-header"> Numero ordine: #' +
                value.id +
                ' <p id="data">' +
                value.data +
                "</p>" +
                '<div class="circleRed"></div>' +
                '</div>\
                 <div class="card-body">\
                   <td><h5 class="card-text" id="radiobtn" value=' +
                value.id +
                '></h5> </td> \
                     <div id="dati">\
                       <td>\
                       <div id ="blocco">\
                         <h5 id="nominativi">Nominativo: </h5>\
                         <h5 id="nominativi_indirizzi">' +
                nominativo +
                "</h5></td>\
                       </div>" +
                '<div id ="blocco">\
                         <h5 id="nominativi">Indirizzo di consegna: </h5>\
                         <h5 id="nominativi_indirizzi">' +
                indir +
                "</h5></td>\
                       </div>" +
                '<div id ="blocco">\
                         <h5 id="nominativi">Citt&agrave: </h5>\
                         <h5 id="nominativi_indirizzi">' +
                citta +
                "," +
                cap +
                "</h5></td>\
                       </div>" +
                '<div id ="blocco">\
                         <h5 id="nominativi">Contatto telefonico: </h5>\
                         <h5 id="nominativi_indirizzi">' +
                numero +
                "</h5></td>\
                       </div>" +
                '<div id ="blocco">\
                         <h5 id="nominativi">Totale: </h5>\
                         <h5 id="nominativi_indirizzi">' +
                value.totale +
                "&euro;</h5></td>\
                       </div>\
                    </div>" +
                '<div id="buttons">' +
                '<button id="aggiungi" data-toggle="modal" onclick="getOrdine(' +
                value.id +
                ')" data-target="#addressModal' +
                value.id +
                '"><span>Dettaglio</span></button>\
                   <button  id="chiudi" onclick="rimuovi_consegna(\'' +
                value.id +
                "')\" ><span>Annulla</span></button>\
                   </div>\
                 </div>\
                 </div>"
            );
          }
        });

        $.each(ordini.ordini, function (key, value) {
          var pos1 = getPosition(value.indirizzo, ",", 0, 1);
          var nominativo = value.indirizzo.substring(0, pos1);
          var pos2 = getPosition(value.indirizzo, ",", pos1, 2);
          var numero = value.indirizzo.substring(pos1 + 1, pos2);
          var pos3 = getPosition(value.indirizzo, ",", pos2, 3);
          var indir = value.indirizzo.substring(pos2 + 1, pos3);
          var pos4 = getPosition(value.indirizzo, ",", pos3, 4);
          var citta = value.indirizzo.substring(pos3 + 1, pos4 - 1);
          var pos5 = getPosition(value.indirizzo, ",", pos4, 5);
          var cap = value.indirizzo.substring(pos4 + 1, pos5);

          if (value.fase == "true") {
            $("#divOrdini").append(
              ' <div class="card text-center">\
                   <div class="card-header"> Numero ordine: #' +
                value.id +
                ' <p id="data">' +
                value.data +
                "</p>" +
                '<div class="circleGreen"></div>' +
                '</div>\
                   <div class="card-body">\
                     <td><h5 class="card-text" id="radiobtn" value=' +
                value.id +
                '></h5> </td> \
                       <div id="dati">\
                         <td>\
                         <div id ="blocco">\
                           <h5 id="nominativi">Nominativo: </h5>\
                           <h5 id="nominativi_indirizzi">' +
                nominativo +
                "</h5></td>\
                         </div>" +
                '<div id ="blocco">\
                           <h5 id="nominativi">Indirizzo di consegna: </h5>\
                           <h5 id="nominativi_indirizzi">' +
                indir +
                "</h5></td>\
                         </div>" +
                '<div id ="blocco">\
                           <h5 id="nominativi">Citt&agrave: </h5>\
                           <h5 id="nominativi_indirizzi">' +
                citta +
                "," +
                cap +
                "</h5></td>\
                         </div>" +
                '<div id ="blocco">\
                           <h5 id="nominativi">Contatto telefonico: </h5>\
                           <h5 id="nominativi_indirizzi">' +
                numero +
                "</h5></td>\
                         </div>" +
                '<div id ="blocco">\
                           <h5 id="nominativi">Totale: </h5>\
                           <h5 id="nominativi_indirizzi">' +
                value.totale +
                "&euro;</h5></td>\
                         </div>\
                      </div>" +
                '<div id="buttons">' +
                '<button id="aggiungi" data-toggle="modal" onclick="getOrdine(' +
                value.id +
                ')" data-target="#addressModal' +
                value.id +
                '"><span>Dettaglio</span></button>\
                     </div>\
                   </div>\
                   </div>'
            );
          }
        });

        $.each(ordini.ordini, function (key, value) {
          $("#mod").append(
            '<div id="addressModal' +
              value.id +
              '" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\
             <div class="modal-dialog">\
               <div class="modal-content">\
                 <div class="modal-header">\
                   <h5 class="modal-title" id="exampleModalLabel"> Ordine: #' +
              value.id +
              "</h5>" +
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                     <span aria-hidden="true">&times;</span>\
                   </button>\
                 </div>\
                 <div id="addressbody' +
              value.id +
              '"class="modal-body">\
                 </div>\
                 <div id="tot' +
              value.id +
              '"class="tot">\
                 </div>\
                 <div class="modal-footer">\
                   <button type="button" id="close" data-dismiss="modal">Chiudi</button>\
                 </div>\
               </div>\
             </div>\
           </div>'
          );
        });
      }
    },
    fail: function (error) {
      console.log(error);
    },
  });
}
function getPosition(string, subString, prec, succ) {
  return string.split(subString, succ).join(subString).length;
}

function getOrdine(id) {
  $.ajax({
    url: "getOrdine",
    method: "POST",
    data: { id: id },
    success: function (responseData) {
      ordine = JSON.parse(responseData);

      var m = "#addressbody" + id;
      document.getElementById("addressbody" + id).innerHTML = "";

      $.each(ordine.ordine, function (key, value) {
        document.getElementById("tot" + id).innerHTML =
          "<h5 id='tot'> Totale:" + value.totale + "&euro; </h5>";
        $.each(value.panini, function (key, val) {
          if (value.id == id)
            $(m).append(
              '<div id="div_popup">\
                      <div id="div_img">\
                      <img id="img_popup" src="../../assets/panini/' +
                val.immagine +
                '.png" class="product-image">\
                        </div>' +
                '<div id="div_prodotto">\
                     <h5 id="nominativi">' +
                val.nome_panino +
                "</h5>" +
                '<h5 id="nom">Quantit&agrave: ' +
                val.quantita +
                "</h5>" +
                '<h5 id="nom">Prezzo: ' +
                val.prezzo +
                "&euro;</h5>" +
                "</div>" +
                "</div>"
            );
        });
      });

      $.each(ordine.ordine, function (key, value) {
        $.each(value.menu, function (key, val) {
          if (value.id == id) {
            $(m).append(
              '<div id="div_popup">' +
                '<div id="div_img">\
        <img id="img_popup" src="../../assets/menu/' +
                val.immagine +
                '.png" class="product-image">\
          </div>' +
                '<div id="div_prodotto">\
          <h5 id="nominativi">' +
                val.nome_menu +
                "</h5>" +
                '<h5 id="nom">Quantit&agrave: ' +
                val.quantita +
                "</h5>" +
                '<h5 id="nom">Prezzo: ' +
                val.prezzo +
                "&euro;</h5>" +
                "</div></div>"
            );
          }
        });
      });

      $.each(ordine.ordine, function (key, value) {
        $.each(value.bevande, function (key, val) {
          if (value.id == id) {
            $(m).append(
              '<div id="div_popup">' +
                '<div id="div_img">\
      <img id="img_popup" src="../../assets/bevande/' +
                val.immagine +
                '.png" class="product-image">\
         </div>' +
                '<div id="div_prodotto">\
         <h5 id="nominativi">' +
                val.nome_bevanda +
                "</h5>" +
                '<h5 id="nom">Quantit&agrave: ' +
                val.quantita +
                "</h5>" +
                '<h5 id="nom">Prezzo: ' +
                val.prezzo +
                "&euro;</h5>" +
                "</div></div>"
            );
          }
        });
      });
    },
  });
}

function rimuovi_consegna(id) {
  Swal.fire({
    title: "Attenzione!",
    text: "Vuoi annullare questo ordine?",
    icon: "error",
    showCancelButton: true,
    confirmButtonColor: "#000000",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Ben fatto!", "Hai annullato questo ordine", "success");
      $.ajax({
        url: "annullaOrdine",
        method: "POST",
        data: { productId: id },
        success: function (response) {
          getAllOrder();
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
