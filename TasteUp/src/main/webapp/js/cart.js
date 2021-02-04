var order = [];

function updateCartBadge(value) {
  var cartBadge = document.getElementById("cart-badge");
  cartBadge.innerHTML = value;
}

function removeProduct(productName, productFormat, productType) {
  $.ajax({
    url: "removeProduct",
    method: "POST",
    data: {
      productName: productName,
      productFormat: productFormat,
      productType: productType,
    },
    success: function (response) {
      if (response != null) {
        getOrderJSON();
      }
    },
    fail: function (error) {
      console.log(error);
    },
  });
}

function addQuantity(productName, productFormat, productType) {
  $.ajax({
    url: "addQuantity",
    method: "POST",
    data: {
      productName: productName,
      productFormat: productFormat,
      productType: productType,
    },
    success: function (response) {
      if (response != null) {
        getOrderJSON();
      }
    },
    fail: function (error) {
      console.log(error);
    },
  });
}

function removeQuantity(productName, productFormat, productType) {
  $.ajax({
    url: "removeQuantity",
    method: "POST",
    data: {
      productName: productName,
      productFormat: productFormat,
      productType: productType,
    },
    success: function (response) {
      if (response != null) {
        getOrderJSON();
      }
    },
    fail: function (error) {
      console.log(error);
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

        var productsBox = document.getElementById("productsBox");
        var root = "";

        var productsCount =
          order.menu.length + order.panini.length + order.bevande.length;

        if (productsCount == 0) {
          document.getElementById("cart-row").className = "cart-row-empty";
          document.getElementById("cart-row").innerHTML =
            '<img class="cart-empty-img" src="../../assets/illustrations/cart.png">\
          <p>Il carrello è vuoto. Visualizza il <a class="catalog-link" href="/catalog">catalogo</a> per aggiungere prodotti.</p>';
        } else {
          document.getElementById("cart-row").className = "cart-row";
          order.menu.map((menu) => {
            root +=
              '<div class="product-box">\
             <div class="product-info">\
               <div class="product-image-container"> <img src="../../assets/menu/' +
              menu.immagine_menu +
              '.png" class="product-image">\
               </div>\
               <div class="product-details">\
                 <h3 class="product-title">' +
              menu.nome_menu +
              '</h3>\
                 <p class="product-format">Formato: ' +
              menu.formato_menu +
              '</p>\
                 <div class="product-options">\
                   <div class="quantity-container">\
                     <p style="color: gray; margin: auto 0;">Quantità: ' +
              menu.quantita +
              '</p>\
                     <div class="quantity-btns">\
                       <button class="btn add-quantity" onclick="addQuantity(\'' +
              menu.nome_menu +
              "','" +
              menu.formato_menu +
              '\',\'menu\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\
                           width="15" height="17" viewBox="0 0 172 172" style=" fill:#000000;">\
                           <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                             stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                             font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                             style="mix-blend-mode: normal">\
                             <path d="M0,172v-172h172v172z" fill="none"></path>\
                             <g fill="#000000">\
                               <path\
                                 d="M143.33333,78.83333h-50.16667v-50.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v50.16667h-50.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667h50.16667v50.16667c0,3.956 3.21067,7.16667 7.16667,7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-50.16667h50.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667z">\
                               </path>\
                             </g>\
                           </g>\
                         </svg></button>\
                       <button class="btn remove-quantity" onclick="removeQuantity(\'' +
              menu.nome_menu +
              "','" +
              menu.formato_menu +
              '\',\'menu\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\
                           width="15" height="17" viewBox="0 0 172 172" style=" fill:#000000;">\
                           <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                             stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                             font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                             style="mix-blend-mode: normal">\
                             <path d="M0,172v-172h172v172z" fill="none"></path>\
                             <g fill="#000000">\
                               <path\
                                 d="M21.5,86v0c0,-3.956 3.21067,-7.16667 7.16667,-7.16667h114.66667c3.956,0 7.16667,3.21067 7.16667,7.16667v0c0,3.956 -3.21067,7.16667 -7.16667,7.16667h-114.66667c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667z">\
                               </path>\
                             </g>\
                           </g>\
                         </svg></button>\
                     </div>\
                   </div>\
                   <button onclick="removeProduct(\'' +
              menu.nome_menu +
              "','" +
              menu.formato_menu +
              '\',\'menu\')" class="delete-btn">Rimuovi</button>\
                 </div>\
               </div>\
             </div>\
             <h2 style="margin: auto 0px;">€' +
              menu.prezzo +
              "</h2>\
           </div>";
          });

          order.panini.map((panino) => {
            root +=
              '<div class="product-box">\
             <div class="product-info">\
               <div class="product-image-container"> <img src="../../assets/panini/' +
              panino.immagine_panino +
              '.png" class="product-image">\
               </div>\
               <div class="product-details">\
                 <h3 class="product-title">' +
              panino.nome_panino +
              '</h3>\
                 <p class="product-format">Formato: ' +
              panino.formato_panino +
              '</p>\
                 <div class="product-options">\
                   <div class="quantity-container">\
                     <p style="color: gray; margin: auto 0;">Quantità: ' +
              panino.quantita +
              '</p>\
                     <div class="quantity-btns">\
                       <button class="btn add-quantity" onclick="addQuantity(\'' +
              panino.nome_panino +
              "','" +
              panino.formato_panino +
              '\',\'panino\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\
                           width="15" height="17" viewBox="0 0 172 172" style=" fill:#000000;">\
                           <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                             stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                             font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                             style="mix-blend-mode: normal">\
                             <path d="M0,172v-172h172v172z" fill="none"></path>\
                             <g fill="#000000">\
                               <path\
                                 d="M143.33333,78.83333h-50.16667v-50.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v50.16667h-50.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667h50.16667v50.16667c0,3.956 3.21067,7.16667 7.16667,7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-50.16667h50.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667z">\
                               </path>\
                             </g>\
                           </g>\
                         </svg></button>\
                       <button class="btn remove-quantity" onclick="removeQuantity(\'' +
              panino.nome_panino +
              "','" +
              panino.formato_panino +
              '\',\'panino\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\
                           width="15" height="17" viewBox="0 0 172 172" style=" fill:#000000;">\
                           <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                             stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                             font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                             style="mix-blend-mode: normal">\
                             <path d="M0,172v-172h172v172z" fill="none"></path>\
                             <g fill="#000000">\
                               <path\
                                 d="M21.5,86v0c0,-3.956 3.21067,-7.16667 7.16667,-7.16667h114.66667c3.956,0 7.16667,3.21067 7.16667,7.16667v0c0,3.956 -3.21067,7.16667 -7.16667,7.16667h-114.66667c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667z">\
                               </path>\
                             </g>\
                           </g>\
                         </svg></button>\
                     </div>\
                   </div>\
                   <button href="" onclick="removeProduct(\'' +
              panino.nome_panino +
              "','" +
              panino.formato_panino +
              '\',\'panino\')" class="delete-btn">Rimuovi</button>\
                 </div>\
               </div>\
             </div>\
             <h2 style="margin: auto 0px;">€' +
              panino.prezzo +
              "</h2>\
           </div>";
          });

          order.bevande.map((bevanda) => {
            root +=
              '<div class="product-box">\
             <div class="product-info">\
               <div class="product-image-container"> <img src="../../assets/bevande/' +
              bevanda.immagine_bevanda +
              '.png" class="product-image">\
               </div>\
               <div class="product-details">\
                 <h3 class="product-title">' +
              bevanda.nome_bevanda +
              '</h3>\
                 <p class="product-format">Formato: ' +
              bevanda.formato_bevanda +
              '</p>\
                 <div class="product-options">\
                   <div class="quantity-container">\
                     <p style="color: gray; margin: auto 0;">Quantità: ' +
              bevanda.quantita +
              '</p>\
                     <div class="quantity-btns">\
                       <button class="btn add-quantity" onclick="addQuantity(\'' +
              bevanda.nome_bevanda +
              "','" +
              bevanda.formato_bevanda +
              '\',\'bevanda\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\
                           width="15" height="17" viewBox="0 0 172 172" style=" fill:#000000;">\
                           <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                             stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                             font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                             style="mix-blend-mode: normal">\
                             <path d="M0,172v-172h172v172z" fill="none"></path>\
                             <g fill="#000000">\
                               <path\
                                 d="M143.33333,78.83333h-50.16667v-50.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v50.16667h-50.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667h50.16667v50.16667c0,3.956 3.21067,7.16667 7.16667,7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-50.16667h50.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667z">\
                               </path>\
                             </g>\
                           </g>\
                         </svg></button>\
                       <button class="btn remove-quantity" onclick="removeQuantity(\'' +
              bevanda.nome_bevanda +
              "','" +
              bevanda.formato_bevanda +
              '\',\'bevanda\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\
                           width="15" height="17" viewBox="0 0 172 172" style=" fill:#000000;">\
                           <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                             stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                             font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                             style="mix-blend-mode: normal">\
                             <path d="M0,172v-172h172v172z" fill="none"></path>\
                             <g fill="#000000">\
                               <path\
                                 d="M21.5,86v0c0,-3.956 3.21067,-7.16667 7.16667,-7.16667h114.66667c3.956,0 7.16667,3.21067 7.16667,7.16667v0c0,3.956 -3.21067,7.16667 -7.16667,7.16667h-114.66667c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667z">\
                               </path>\
                             </g>\
                           </g>\
                         </svg></button>\
                     </div>\
                   </div>\
                   <button href="" onclick="removeProduct(\'' +
              bevanda.nome_bevanda +
              "','" +
              bevanda.formato_bevanda +
              '\',\'bevanda\')" class="delete-btn">Rimuovi</button>\
                 </div>\
               </div>\
             </div>\
             <h2 style="margin: auto 0px;">€' +
              bevanda.prezzo +
              "</h2>\
           </div>";
          });

          calculateTotal();
        }

        productsBox.innerHTML = root;
        updateCartBadge(order.quantitaProdotti.toString());
      } else {
        document.getElementById("cart-row").className = "cart-row-empty";
        document.getElementById("cart-row").innerHTML =
          '<img class="cart-empty-img" src="../../assets/illustrations/cart.png">\
        <p>Il carrello è vuoto. Visualizza il <a class="catalog-link" href="/catalog">catalogo</a> per aggiungere prodotti.</p>';
      }
    },
    error: function () {
      document.getElementById("cart-row").className = "cart-row-empty";
      document.getElementById(
        "cart-row"
      ) = '<img class="cart-empty-img" src="../../assets/illustrations/cart.png">\
      <p>Il carrello è vuoto. Visualizza il <a class="catalog-link" href="/catalog">catalogo</a> per aggiungere prodotti.</p>';
    },
  });
}

function calculateTotal() {
  var root = '<h2 class="total-price-title">Totale ordine</h2>';

  var totalPrice = order.totale;
  order.menu.map((menu) => {
    root +=
      '<div class="ordered-products">\
        <p>x ' +
      menu.quantita +
      " - " +
      menu.nome_menu +
      "</p>\
        <p>€" +
      menu.prezzo +
      "</p>\
    </div>";
  });
  order.panini.map((panino) => {
    root +=
      '<div class="ordered-products">\
    <p>x ' +
      panino.quantita +
      " - " +
      panino.nome_panino +
      "</p>\
    <p>€" +
      panino.prezzo +
      "</p>\
</div>";
  });
  order.bevande.map((bevanda) => {
    root +=
      '<div class="ordered-products">\
    <p>x ' +
      bevanda.quantita +
      " - " +
      bevanda.nome_bevanda +
      "</p>\
    <p>€" +
      bevanda.prezzo +
      "</p>\
</div>";
  });
  root +=
    '<div class="ordered-products">\
  <p>Consegna</p>\
  <p>€2.50</p>\
  </div>\
  <hr class="container-separator">\
  <h3 class="lasttotal">Totale: €' +
    totalPrice.toFixed(2) +
    '</h3>\
  <form method="POST" action="confirm_order">\
  <button class="btn continue-order-btn">Vai alla cassa</button>\
</form>';

  document.getElementById("total-price").innerHTML = root;
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
  getOrderJSON();
  document.getElementById("logout-btn").onclick = logout;
};
