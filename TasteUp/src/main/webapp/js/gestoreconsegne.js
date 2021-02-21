window.onload = function () {
  carica();
  document.getElementById("logout-btn").onclick = logout;
};

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
function conferma(id) {
  var check = id;

  $.ajax({
    url: "confermaConsegna",
    method: "POST",
    data: { productId: check },
    success: function (response) {
      if (response != null) {
        carica();
      }
    },
    fail: function (error) {
      console.log(error);
    },
  });
}
function carica() {
  var ordini = [];

  $.ajax({
    url: "getOrdiniDaConsegnareJSON",
    method: "POST",
    data: {},
    success: function (responseData) {
      ordini = JSON.parse(responseData);
      var ind = document.getElementById("divOrdini");
      if (ordini.ordini.length == 0) {
        ind.innerHTML +=
          '<p id="noOrders">Non ci sono ordini da consegnare!</p>';
      } else {
        ind.innerHTML = "";

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
              '<button  id="chiudi" onclick="conferma(\'' +
              value.id +
              "')\" ><span>Consegnato</span></button>\
               </div>\
             </div>\
             </div>"
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
  $.ajax({
    url: "logout",
    method: "POST",
    data: {},
    success: function () {
      location.replace("/");
    },
  });
}

function getPosition(string, subString, prec, succ) {
  return string.split(subString, succ).join(subString).length;
}

function closeNav() {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}
