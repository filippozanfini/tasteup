var order = {};
var products = [];
var logged = false;

window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("product");

  if (product != null) {
    if (product == "menu") {
      document.getElementById("allProducts-selector").className =
        "product-category";
      document.getElementById("menu-selector").className =
        "product-category category-active";
      document.getElementById("panini-selector").className = "product-category";
      document.getElementById("bevande-selector").className =
        "product-category";
      getAllProductsFromDB("menu");
    } else if (product == "panini") {
      console.log("panini");
      document.getElementById("allProducts-selector").className =
        "product-category";
      document.getElementById("menu-selector").className = "product-category";
      document.getElementById("panini-selector").className =
        "product-category category-active";
      document.getElementById("bevande-selector").className =
        "product-category";
      getAllProductsFromDB("panini");
    } else if (product == "bevande") {
      console.log("bevande");
      document.getElementById("allProducts-selector").className =
        "product-category";
      document.getElementById("menu-selector").className = "product-category";
      document.getElementById("panini-selector").className = "product-category";
      document.getElementById("bevande-selector").className =
        "product-category category-active";
      getAllProductsFromDB("bevande");
    } else {
      getProductFromDB(product);
    }
  } else {
    getAllProductsFromDB();
  }

  getOrderJSON();
  document.getElementById("logout-btn").onclick = logout;
};

function addParameterToURL(param) {
  if (param == "all") {
    window.location.href = window.location.href.split("?")[0];
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("product", param);

    window.location.search = urlParams;
  }
}

function selectAllProducts() {
  addParameterToURL("all");
  document.getElementById("allProducts-selector").className =
    "product-category category-active";
  document.getElementById("menu-selector").className = "product-category";
  document.getElementById("panini-selector").className = "product-category";
  document.getElementById("bevande-selector").className = "product-category";
}

function selectMenu() {
  addParameterToURL("menu");
  document.getElementById("allProducts-selector").className =
    "product-category";
  document.getElementById("menu-selector").className =
    "product-category category-active";
  document.getElementById("panini-selector").className = "product-category";
  document.getElementById("bevande-selector").className = "product-category";
}

function selectPanini() {
  addParameterToURL("panini");
  document.getElementById("allProducts-selector").className =
    "product-category";
  document.getElementById("menu-selector").className = "product-category";
  document.getElementById("panini-selector").className =
    "product-category category-active";
  document.getElementById("bevande-selector").className = "product-category";
}

function selectBevande() {
  window.location.href = window.location.href.split("?")[0];
  addParameterToURL("bevande");
  document.getElementById("allProducts-selector").className =
    "product-category";
  document.getElementById("menu-selector").className = "product-category";
  document.getElementById("panini-selector").className = "product-category";
  document.getElementById("bevande-selector").className =
    "product-category category-active";
}

function getAllProductsFromDB(type) {
  $.ajax({
    url: "getAllProducts",
    method: "POST",
    data: {},
    success: function (responseData) {
      products = [];
      tmpProducts = JSON.parse(responseData);

      if (type == "all" || type == undefined) {
        tmpProducts.menu.map((menu) => {
          products.push(menu);
        });

        tmpProducts.panini.map((panino) => {
          products.push(panino);
        });

        tmpProducts.bevande.map((bevanda) => {
          products.push(bevanda);
        });

        shuffleArray(products);
      } else if (type == "menu") {
        tmpProducts.menu.map((menu) => {
          products.push(menu);
        });
      } else if (type == "panini") {
        tmpProducts.panini.map((panino) => {
          products.push(panino);
        });
      } else if (type == "bevande") {
        tmpProducts.bevande.map((bevanda) => {
          products.push(bevanda);
        });
      }

      console.log(products);

      var productsContainer = document.getElementById("productsContainer");
      var root = "";

      products.map((product) => {
        root +=
          '<div class="product-container">\
          <div class="action-container" data-toggle="modal" data-target="#productModal' +
          product.nome.replace(/\s/g, "") +
          '">\
          <img class="product-image" src="../../assets/' +
          product.tipo +
          "/" +
          product.immagine +
          '.png">\
           <h4 class="product-title">' +
          product.nome +
          '</h4>\
          <p class="product-description">' +
          product.descrizione +
          '</p>\
            </div>\
        <div class="product-options">\
          <h3 class="product-price">&euro;' +
          product.prezzo +
          '</h3>\
          <button class="btn addToCartBtn" onclick="addToCart(\'' +
          product.nome +
          "','" +
          product.formato +
          "','" +
          product.tipo +
          '\',\'false\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"\
              height="30" viewBox="0 0 172 172" style=" fill:#000000;">\
              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                style="mix-blend-mode: normal">\
                <path d="M0,172v-172h172v172z" fill="none"></path>\
                <g fill="#f7d002">\
                  <path\
                    d="M11.46667,11.46667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h10.7724c1.29517,0 2.37592,0.81106 2.74349,2.06042l24.43385,83.06614c2.14446,7.29116 8.88821,12.34011 16.49453,12.34011h62.93229c7.73092,0 14.55694,-5.22483 16.59532,-12.67604l14.89323,-54.61224c0.47113,-1.72445 0.11102,-3.56997 -0.97382,-4.99081c-1.08485,-1.42084 -2.7703,-2.25442 -4.55795,-2.25424h-111.72161l-7.08828,-24.10911c-0.00373,0 -0.00747,0 -0.0112,0c-1.78818,-6.07784 -7.40968,-10.29089 -13.73984,-10.29089zM68.8,131.86667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM126.13333,131.86667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667z">\
                  </path>\
                </g>\
              </g>\
            </svg></button>\
        </div>\
      </div>';

        root +=
          '<!-- PRODUCT MODAL -->\
      <div class="modal fade" id="productModal' +
          product.nome.replace(/\s/g, "") +
          '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"\
        aria-hidden="true">\
        <div class="modal-dialog" role="document">\
          <div class="modal-content">\
            <div class="modal-header">\
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                <span aria-hidden="true">&times;</span>\
              </button>\
            </div>\
            <div class="modal-body">\
              <img class="modal-img" src="../../assets/' +
          product.tipo +
          "/" +
          product.immagine +
          '.png">\
              <h1 class="modal-title">' +
          product.nome +
          '</h1>\
              <p class="modal-description">' +
          product.descrizione +
          "</p>";
        if (product.tipo == "menu") {
          root +=
            '<hr>\
            <h3>Cosa contiene?</h3>\
            <div id="carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" class="carousel slide" data-ride="carousel">\
  <ol class="carousel-indicators">\
    <li data-target="#carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" data-slide-to="0" class="active"></li>\
    <li data-target="#carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" data-slide-to="1"></li>\
    <li data-target="#carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" data-slide-to="2"></li>\
  </ol>\
  <div class="carousel-inner">\
    <div class="carousel-item active">\
      <img src="../../assets/panini/' +
            product.immagine_panino +
            '.png" class="d-block w-100" alt="...">\
    </div>\
    <div class="carousel-item">\
    <img src="../../assets/menu/patatine.png" class="d-block w-100" alt="...">\
    </div>\
    <div class="carousel-item">\
    <img src="../../assets/bevande/' +
            product.immagine_bevanda +
            '.png" class="d-block w-100" alt="...">\
    </div>\
  </div>\
  <a class="carousel-control-prev" href="#carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" role="button" data-slide="prev">\
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
    <span class="sr-only">Previous</span>\
  </a>\
  <a class="carousel-control-next" href="#carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" role="button" data-slide="next">\
    <span class="carousel-control-next-icon" aria-hidden="true"></span>\
    <span class="sr-only">Next</span>\
  </a>\
</div>';
        } else if (product.tipo == "panini") {
          root +=
            '<hr>\
            <h3>Cosa contiene?</h3>\
            <div id="carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" class="carousel slide" data-ride="carousel">\
            <ol class="carousel-indicators">';

          product.ingredienti.map((ingrediente) => {
            root +=
              '<li data-target="#carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" data-slide-to="0" class="active"></li>';
          });
          root +=
            '</ol>\
  <div class="carousel-inner">\
    <div class="carousel-item active">\
      <img src="../../assets/ingredienti/' +
            product.ingredienti[0] +
            '.png" class="d-block w-100" alt="...">\
    </div>';

          var count = 0;
          product.ingredienti.map((ingrediente) => {
            if (count != 0) {
              root +=
                '<div class="carousel-item">\
            <img src="../../assets/ingredienti/' +
                ingrediente +
                '.png" class="d-block w-100" alt="...">\
            </div>';
            }
            count++;
          });

          root +=
            '</div>\
            <a class="carousel-control-prev" href="#carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" role="button" data-slide="prev">\
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
    <span class="sr-only">Previous</span>\
  </a>\
  <a class="carousel-control-next" href="#carouselExampleCaptions' +
            product.nome.replace(/\s/g, "") +
            '" role="button" data-slide="next">\
    <span class="carousel-control-next-icon" aria-hidden="true"></span>\
    <span class="sr-only">Next</span>\
  </a>\
  </div>';
        }

        root +=
          '<hr>\
              <div class="product-options">\
                <h3 class="product-price product-price-modal">&euro;' +
          product.prezzo +
          '</h3>\
          <div class="add-to-cart">\
          <input class="input-item" type="number" min="1" id="quantita-count-' +
          product.nome.replace(/\s/g, "") +
          product.formato +
          '" value="1">\
                <button class="btn addToCartBtn" onclick="addToCart(\'' +
          product.nome +
          "','" +
          product.formato +
          "','" +
          product.tipo +
          '\',\'true\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\
                    width="40" height="40" viewBox="0 0 172 172" style=" fill:#000000;">\
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                      stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                      font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                      style="mix-blend-mode: normal">\
                      <path d="M0,172v-172h172v172z" fill="none"></path>\
                      <g fill="#f7d002">\
                        <path\
                          d="M11.46667,11.46667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h10.7724c1.29517,0 2.37592,0.81106 2.74349,2.06042l24.43385,83.06614c2.14446,7.29116 8.88821,12.34011 16.49453,12.34011h62.93229c7.73092,0 14.55694,-5.22483 16.59532,-12.67604l14.89323,-54.61224c0.47113,-1.72445 0.11102,-3.56997 -0.97382,-4.99081c-1.08485,-1.42084 -2.7703,-2.25442 -4.55795,-2.25424h-111.72161l-7.08828,-24.10911c-0.00373,0 -0.00747,0 -0.0112,0c-1.78818,-6.07784 -7.40968,-10.29089 -13.73984,-10.29089zM68.8,131.86667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM126.13333,131.86667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667z">\
                        </path>\
                      </g>\
                    </g>\
                  </svg></button>\
                  </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>';
      });

      productsContainer.innerHTML = root;
    },
  });
}

function getProductFromDB(name) {
  $.ajax({
    url: "getProduct",
    method: "POST",
    data: { productName: name },
    success: function (responseData) {
      products = [];
      tmpProducts = JSON.parse(responseData);

      console.log(tmpProducts);

      tmpProducts.menu.map((menu) => {
        products.push(menu);
      });

      tmpProducts.panini.map((panino) => {
        products.push(panino);
      });

      tmpProducts.bevande.map((bevanda) => {
        products.push(bevanda);
      });

      shuffleArray(products);

      var productsContainer = document.getElementById("productsContainer");
      var root = "";

      if (products.length > 0) {
        products.map((product) => {
          root +=
            '<div class="product-container">\
            <div class="action-container" data-toggle="modal" data-target="#productModal' +
            product.nome.replace(/\s/g, "") +
            '">\
            <img class="product-image" src="../../assets/' +
            product.tipo +
            "/" +
            product.immagine +
            '.png">\
             <h4 class="product-title">' +
            product.nome +
            '</h4>\
            <p class="product-description">' +
            product.descrizione +
            '</p>\
              </div>\
          <div class="product-options">\
            <h3 class="product-price">&euro;' +
            product.prezzo +
            '</h3>\
            <button class="btn addToCartBtn" onclick="addToCart(\'' +
            product.nome +
            "','" +
            product.formato +
            "','" +
            product.tipo +
            '\',\'false\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"\
                height="30" viewBox="0 0 172 172" style=" fill:#000000;">\
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                  style="mix-blend-mode: normal">\
                  <path d="M0,172v-172h172v172z" fill="none"></path>\
                  <g fill="#f7d002">\
                    <path\
                      d="M11.46667,11.46667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h10.7724c1.29517,0 2.37592,0.81106 2.74349,2.06042l24.43385,83.06614c2.14446,7.29116 8.88821,12.34011 16.49453,12.34011h62.93229c7.73092,0 14.55694,-5.22483 16.59532,-12.67604l14.89323,-54.61224c0.47113,-1.72445 0.11102,-3.56997 -0.97382,-4.99081c-1.08485,-1.42084 -2.7703,-2.25442 -4.55795,-2.25424h-111.72161l-7.08828,-24.10911c-0.00373,0 -0.00747,0 -0.0112,0c-1.78818,-6.07784 -7.40968,-10.29089 -13.73984,-10.29089zM68.8,131.86667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM126.13333,131.86667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667z">\
                    </path>\
                  </g>\
                </g>\
              </svg></button>\
          </div>\
        </div>';

          root +=
            '<!-- PRODUCT MODAL -->\
        <div class="productModal modal fade" id="productModal' +
            product.nome.replace(/\s/g, "") +
            '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"\
          aria-hidden="true">\
          <div class="modal-dialog" role="document">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                  <span aria-hidden="true">&times;</span>\
                </button>\
              </div>\
              <div class="modal-body">\
                <img class="modal-img" src="../../assets/' +
            product.tipo +
            "/" +
            product.immagine +
            '.png">\
                <h1 class="modal-title">' +
            product.nome +
            '</h1>\
                <p class="modal-description">' +
            product.descrizione +
            "</p>";
          if (product.tipo == "menu") {
            root +=
              '<hr>\
              <h3>Cosa contiene?</h3>\
              <div id="carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" class="carousel slide" data-ride="carousel">\
    <ol class="carousel-indicators">\
      <li data-target="#carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" data-slide-to="0" class="active"></li>\
      <li data-target="#carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" data-slide-to="1"></li>\
      <li data-target="#carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" data-slide-to="2"></li>\
    </ol>\
    <div class="carousel-inner">\
      <div class="carousel-item active">\
        <img src="../../assets/panini/' +
              product.immagine_panino +
              '.png" class="d-block w-100" alt="...">\
      </div>\
      <div class="carousel-item">\
      <img src="../../assets/menu/patatine.png" class="d-block w-100" alt="...">\
      </div>\
      <div class="carousel-item">\
      <img src="../../assets/bevande/' +
              product.immagine_bevanda +
              '.png" class="d-block w-100" alt="...">\
      </div>\
    </div>\
    <a class="carousel-control-prev" href="#carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" role="button" data-slide="prev">\
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
      <span class="sr-only">Previous</span>\
    </a>\
    <a class="carousel-control-next" href="#carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" role="button" data-slide="next">\
      <span class="carousel-control-next-icon" aria-hidden="true"></span>\
      <span class="sr-only">Next</span>\
    </a>\
  </div>';
          } else if (product.tipo == "panini") {
            root +=
              '<hr>\
              <h3>Cosa contiene?</h3>\
              <div id="carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" class="carousel slide" data-ride="carousel">\
              <ol class="carousel-indicators">';

            product.ingredienti.map((ingrediente) => {
              root +=
                '<li data-target="#carouselExampleCaptions' +
                product.nome.replace(/\s/g, "") +
                '" data-slide-to="0" class="active"></li>';
            });
            root +=
              '</ol>\
    <div class="carousel-inner">\
      <div class="carousel-item active">\
        <img src="../../assets/ingredienti/' +
              product.ingredienti[0] +
              '.png" class="d-block w-100" alt="...">\
      </div>';

            var count = 0;
            product.ingredienti.map((ingrediente) => {
              if (count != 0) {
                root +=
                  '<div class="carousel-item">\
              <img src="../../assets/ingredienti/' +
                  ingrediente +
                  '.png" class="d-block w-100" alt="...">\
              </div>';
              }
              count++;
            });

            root +=
              '</div>\
              <a class="carousel-control-prev" href="#carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" role="button" data-slide="prev">\
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
      <span class="sr-only">Previous</span>\
    </a>\
    <a class="carousel-control-next" href="#carouselExampleCaptions' +
              product.nome.replace(/\s/g, "") +
              '" role="button" data-slide="next">\
      <span class="carousel-control-next-icon" aria-hidden="true"></span>\
      <span class="sr-only">Next</span>\
    </a>\
    </div>';
          }

          root +=
            '<hr>\
                <div class="product-options">\
                  <h3 class="product-price product-price-modal">&euro;' +
            product.prezzo +
            '</h3>\
            <div class="add-to-cart">\
            <input class="input-item" type="number" min="1" id="quantita-count-' +
            product.nome.replace(/\s/g, "") +
            product.formato +
            '" value="1">\
                  <button class="btn addToCartBtn" onclick="addToCart(\'' +
            product.nome +
            "','" +
            product.formato +
            "','" +
            product.tipo +
            '\',\'true\')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\
                      width="40" height="40" viewBox="0 0 172 172" style=" fill:#000000;">\
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"\
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"\
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"\
                        style="mix-blend-mode: normal">\
                        <path d="M0,172v-172h172v172z" fill="none"></path>\
                        <g fill="#f7d002">\
                          <path\
                            d="M11.46667,11.46667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h10.7724c1.29517,0 2.37592,0.81106 2.74349,2.06042l24.43385,83.06614c2.14446,7.29116 8.88821,12.34011 16.49453,12.34011h62.93229c7.73092,0 14.55694,-5.22483 16.59532,-12.67604l14.89323,-54.61224c0.47113,-1.72445 0.11102,-3.56997 -0.97382,-4.99081c-1.08485,-1.42084 -2.7703,-2.25442 -4.55795,-2.25424h-111.72161l-7.08828,-24.10911c-0.00373,0 -0.00747,0 -0.0112,0c-1.78818,-6.07784 -7.40968,-10.29089 -13.73984,-10.29089zM68.8,131.86667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM126.13333,131.86667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667z">\
                          </path>\
                        </g>\
                      </g>\
                    </svg></button>\
                    </div>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>';
        });
      } else {
        root +=
          '<div class="catalog-row-empty">\
          <img class="catalog-empty-img" src="../../assets/illustrations/catalog.png">\
          <p>La ricerca non ha prodotto risultati.</p>\
        </div>';
      }

      productsContainer.innerHTML = root;
    },
  });
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function getOrderJSON() {
  $.ajax({
    url: "getCurrentOrder",
    method: "POST",
    data: {},
    success: function (responseData) {
      if (responseData != "notlogged") {
        logged = true;
        order = JSON.parse(responseData);
        console.log(order);
        updateCartBadge(order.quantitaProdotti.toString());
      } else {
        logged = false;
      }
    },
    fail: function () {
      console.log("ERROR JSON Order");
    },
  });
}

function addToCart(nome_prodotto, formato_prodotto, tipo_prodotto, modal) {
  if (logged) {
    var quantita = "1";
    console.log(nome_prodotto);

    if (modal == "true") {
      var newName = nome_prodotto.replace(/\s/g, "");
      quantita = $("#quantita-count-" + newName + formato_prodotto).val();
    }

    prodottoTrovato = false;

    if (tipo_prodotto == "panini") {
      order.panini.map((panino) => {
        if (
          panino.nome_panino == nome_prodotto &&
          panino.formato_panino == formato_prodotto
        ) {
          prodottoTrovato = true;
        }
      });

      if (!prodottoTrovato) {
        order.panini.push({
          nome_panino: nome_prodotto,
          formato_panino: formato_prodotto,
          quantita: quantita,
        });
      } else {
        var index = 0;
        for (var i = 0; i < order.panini.length; i++) {
          if (
            order.panini[i].nome_panino == nome_prodotto &&
            order.panini[i].formato_panino == formato_prodotto
          ) {
            break;
          }

          index++;
        }

        order.panini[index] = {
          ...order.panini[index],
          quantita: (
            parseInt(order.panini[index].quantita) + parseInt(quantita)
          ).toString(),
        };
      }
    } else if (tipo_prodotto == "bevande") {
      order.bevande.map((bevanda) => {
        if (
          bevanda.nome_bevanda == nome_prodotto &&
          bevanda.formato_bevanda == formato_prodotto
        ) {
          prodottoTrovato = true;
        }
      });

      if (!prodottoTrovato) {
        order.bevande.push({
          nome_bevanda: nome_prodotto,
          formato_bevanda: formato_prodotto,
          quantita: quantita,
        });
      } else {
        var index = 0;
        for (var i = 0; i < order.bevande.length; i++) {
          if (
            order.bevande[i].nome_bevanda == nome_prodotto &&
            order.bevande[i].formato_bevanda == formato_prodotto
          ) {
            break;
          }

          index++;
        }

        order.bevande[index] = {
          ...order.bevande[index],
          quantita: (
            parseInt(order.bevande[index].quantita) + parseInt(quantita)
          ).toString(),
        };
      }
    } else if (tipo_prodotto == "menu") {
      order.menu.map((m) => {
        if (
          m.nome_menu == nome_prodotto &&
          m.formato_menu == formato_prodotto
        ) {
          prodottoTrovato = true;
        }
      });

      if (!prodottoTrovato) {
        order.menu.push({
          nome_menu: nome_prodotto,
          formato_menu: formato_prodotto,
          quantita: quantita,
        });
      } else {
        var index = 0;
        for (var i = 0; i < order.menu.length; i++) {
          if (
            order.menu[i].nome_menu == nome_prodotto &&
            order.menu[i].formato_menu == formato_prodotto
          ) {
            break;
          }

          index++;
        }

        order.menu[index] = {
          ...order.menu[index],
          quantita: (
            parseInt(order.menu[index].quantita) + parseInt(quantita)
          ).toString(),
        };
      }
    }

    $.ajax({
      url: "updateOrder",
      method: "POST",
      data: { json: JSON.stringify(order) },
      success: function () {
        console.log("SUCCESS");
        getOrderJSON();
      },
      fail: function () {
        console.log("ERROR WITH THE UPDATE");
      },
    });

    console.log(order);
  } else {
    Swal.fire({
      title: "Attenzione!",
      text:
        "Devi eseguire l'accesso per poter aggiungere il prodotto al carrello.",
      icon: "error",
      confirmButtonColor: "#000000",
    });
  }
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

function updateCartBadge(value) {
  var cartBadge = document.getElementById("cart-badge");
  cartBadge.innerHTML = value;
}

function closeNav() {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}
