<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <!DOCTYPE html>
    <html lang="it">

    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Food Delivery</title>

      <!--Bootstrap-->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>

      <!--CSS-->
      <link rel="stylesheet" href="css/style.css" type="text/css" />
      <link rel="stylesheet" href="css/catalog.css" type="text/css" />

      <!-- JS -->
      <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
      <script src="../../js/catalog.js"></script>
    </head>

    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top NavBar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="assets/LogoNoBackground.png" width="80" height="80" class="d-inline-block align-top" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" href="#" id="navbarDropdown"
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sfoglia
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <form method="GET" action="catalog">
                      <a class="dropdown-item" href="javascript:;" onclick="parentNode.submit();">Tutti i prodotti</a>
                    </form>
                  </li>
                  <li>
                    <a class="dropdown-item" href="catalog?product=menu">Menu</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="catalog?product=panini">Panini</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="catalog?product=bevande">Bevande</a>
                  </li>
                </ul>
            </ul>
            <ul id="searchBarNavbar" class="navbar-nav mx-auto">
              <div class="input-group-nav">
                <form autocomplete="off" action="catalog">
                  <input name="product" autocomplete="off" type="text" class="idbar-nav"
                    placeholder="Cosa desideri mangiare?" />
                  <button id="buttonsearch-nav" class="btn btn-secondary" type="submit"><svg
                      xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 172 172"
                      style=" fill:#000000;">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#ffffff">
                          <path
                            d="M74.53333,17.2c-31.59642,0 -57.33333,25.73692 -57.33333,57.33333c0,31.59642 25.73692,57.33333 57.33333,57.33333c13.73998,0 26.35834,-4.87915 36.24766,-12.97839l34.23203,34.23203c1.43802,1.49778 3.5734,2.10113 5.5826,1.57735c2.0092,-0.52378 3.57826,-2.09284 4.10204,-4.10204c0.52378,-2.0092 -0.07957,-4.14458 -1.57735,-5.5826l-34.23203,-34.23203c8.09924,-9.88932 12.97839,-22.50768 12.97839,-36.24766c0,-31.59642 -25.73692,-57.33333 -57.33333,-57.33333zM74.53333,28.66667c25.39937,0 45.86667,20.4673 45.86667,45.86667c0,25.39937 -20.46729,45.86667 -45.86667,45.86667c-25.39937,0 -45.86667,-20.46729 -45.86667,-45.86667c0,-25.39937 20.4673,-45.86667 45.86667,-45.86667z">
                          </path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </form>
              </div>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <form method="POST" action="cart">
                  <a class="nav-link cart-link" aria-current="page" href="javascript:;" onclick="parentNode.submit();">
                    <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33"
                      viewBox="0 0 172 172" style=" fill:#000000;">
                      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#000000">
                          <path
                            d="M12.54167,21.5c-1.93842,-0.02741 -3.74144,0.99102 -4.71865,2.66532c-0.97721,1.6743 -0.97721,3.74507 0,5.41937c0.97721,1.6743 2.78023,2.69273 4.71865,2.66532h9.87516c2.60843,0 4.78277,1.80215 5.27702,4.36719l1.0708,5.59896l11.55485,60.68571c2.0895,10.94896 11.73607,18.93148 22.88574,18.93148h67.08952c11.14967,0 20.8003,-7.97945 22.88574,-18.93148l11.55485,-60.68571c0.3001,-1.57315 -0.11688,-3.19819 -1.13735,-4.4325c-1.02047,-1.23431 -2.53815,-1.94933 -4.13967,-1.95031h-120.97249l-0.23096,-1.22477c-1.44453,-7.5704 -8.1299,-13.10856 -15.83805,-13.10856zM40.53646,46.58333h112.42708l-10.34408,54.3099c-1.13239,5.94697 -6.26721,10.1901 -12.32471,10.1901h-67.08952c-6.05535,0 -11.18678,-4.24338 -12.32471,-10.1901v-0.007zM71.66667,129c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75zM121.83333,129c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75z">
                          </path>
                        </g>
                      </g>
                    </svg>
                    <span id="cart-badge" class="badge rounded-pill bg-light text-dark">0</span>
                  </a>
                </form>
              </li>

              <c:if test="${usernameLogged == null}">
                <form method="POST" action="login">
                  <button class="btn loginBtn">Accedi</button>
                </form>
              </c:if>

              <c:if test="${usernameLogged != null}">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle account-link" data-toggle="dropdown" href="#" href="#"
                    id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i><svg
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33" viewBox="0 0 172 172"
                        style=" fill:#000000;">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                          stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                          font-family="none" font-weight="none" font-size="none" text-anchor="none"
                          style="mix-blend-mode: normal">
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#000000">
                            <path
                              d="M86,14.33333c-19.72655,0 -35.83333,16.1068 -35.83333,35.83333c0,19.72653 16.10679,35.83333 35.83333,35.83333c19.72655,0 35.83333,-16.1068 35.83333,-35.83333c0,-19.72653 -16.10679,-35.83333 -35.83333,-35.83333zM86,25.08333c13.91682,0 25.08333,11.16652 25.08333,25.08333c0,13.91681 -11.16651,25.08333 -25.08333,25.08333c-13.91682,0 -25.08333,-11.16652 -25.08333,-25.08333c0,-13.91681 11.16651,-25.08333 25.08333,-25.08333zM44.79167,100.33333c-8.84188,0 -16.125,7.28312 -16.125,16.125v4.2972c0,10.53809 6.68189,19.99054 16.87386,26.49007c10.19197,6.49953 24.13682,10.42106 40.45947,10.42106c16.32265,0 30.2675,-3.92153 40.45947,-10.42106c10.19197,-6.49953 16.87386,-15.95198 16.87386,-26.49007v-4.2972c0,-8.84188 -7.28312,-16.125 -16.125,-16.125zM44.79167,111.08333h82.41667c3.03329,0 5.375,2.34171 5.375,5.375v4.2972c0,5.96674 -3.84326,12.28583 -11.90479,17.42676c-8.06153,5.14093 -20.09853,8.73438 -34.67855,8.73438c-14.58001,0 -26.61702,-3.59345 -34.67855,-8.73437c-8.06153,-5.14093 -11.90479,-11.46002 -11.90479,-17.42676v-4.2972c0,-3.03329 2.34171,-5.375 5.375,-5.375z">
                            </path>
                          </g>
                        </g>
                      </svg></i> Il tuo account</a>

                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/accountInfo">Area personale</a></li>
                    <li>
                      <a id="logout-btn" href="" class="dropdown-item">Esci</a>
                    </li>
                  </ul>
                </li>
              </c:if>
            </ul>
          </div>
        </div>
      </nav>
      <div id="success-alert"></div>
      <div class="container-fluid catalog-header">
        <h1 class="catalog-title">I nostri prodotti</h1>
        <div class="filter-container">
          <div class="product-categories">
            <div id="allProducts-selector" class="product-category category-active" onclick="selectAllProducts()">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#666666">
                    <path
                      d="M91.375,80.625h59.125v-39.41667c0,-10.86467 -8.84367,-19.70833 -19.70833,-19.70833h-39.41667zM80.625,80.625v-59.125h-39.41667c-10.86467,0 -19.70833,8.84367 -19.70833,19.70833v39.41667zM91.375,91.375v59.125h39.41667c10.86467,0 19.70833,-8.84367 19.70833,-19.70833v-39.41667zM80.625,91.375h-59.125v39.41667c0,10.86467 8.84367,19.70833 19.70833,19.70833h39.41667z">
                    </path>
                  </g>
                </g>
              </svg>
              <p class="category-title">Tutti i prodotti</p>
            </div>
            <div id="menu-selector" class="product-category" onclick="selectMenu()">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#666666">
                    <path
                      d="M118.68,6.88c-4.73,0 -8.6,3.58781 -8.6,8.31781v2.00219c0,2.05712 1.66834,3.44 3.7289,3.44h23.50891c2.05712,0 3.72219,-1.38288 3.72219,-3.44v-2.00219c0,-4.73 -3.87,-8.31781 -8.6,-8.31781zM58.34563,27.52c-29.27096,0 -44.58563,19.54253 -44.58563,38.84781c0,17.73664 8.71255,80.59237 9.07031,83.13109c0.70864,6.99352 6.24516,12.83072 13.55172,14.21016c1.7716,0.2924 6.63828,0.63527 11.7914,0.90703c-8.93368,-11.02864 -13.77344,-30.83794 -13.77344,-44.2161c0,-23.12024 7.86992,-38.66791 13.7936,-47.77703c-2.91368,-1.16272 -6.05069,-2.14151 -9.18453,-3.07719c-4.7988,-1.43448 -8.78598,-2.73314 -11.74438,-4.2261c2.29792,-4.37568 8.104,-12.2278 20.66688,-13.53156c0.2924,1.94016 0.43451,4.08785 0.24187,6.40297c-0.16168,1.892 1.24566,3.55723 3.13766,3.71547c1.94704,0.17544 3.56067,-1.24894 3.71547,-3.14438c0.48848,-5.78264 -0.61791,-10.79999 -1.77375,-14.25719c5.3664,0.35088 13.64718,2.84337 15.59422,14.53937c0.28208,1.68216 1.73505,2.87563 3.38625,2.87563c0.1892,0 0.37846,-0.01263 0.57109,-0.04703c1.8748,-0.31304 3.14164,-2.08255 2.8286,-3.95734c-0.3784,-2.26352 -0.98792,-4.20105 -1.69312,-5.98641c10.0792,1.3588 13.60692,6.66586 14.835,10.2125c-0.3096,0.06192 -0.62151,0.09396 -0.90703,0.24188c-3.71864,1.91608 -8.64779,3.78798 -13.63235,4.42094c-15.75864,1.99864 -19.86718,8.93266 -19.87406,8.92922c-5.65192,8.49336 -13.0814,22.72249 -13.0814,44.66625c0,16.8044 7.93323,40.07369 17.89203,44.67297c1.18336,0.03096 2.22568,0.04703 3.01,0.04703c6.9316,0 15.15013,-0.87081 19.04765,-1.69985c2.0296,-0.40248 3.97358,-1.22948 5.71766,-2.37844c-0.59856,-1.77848 -0.94735,-3.75153 -0.94735,-5.93937c0,-5.08776 1.92161,-9.60964 3.78265,-13.975c1.58928,-3.74272 3.09735,-7.27007 3.09735,-10.40735c0,-2.7348 -1.02695,-6.58083 -2.21719,-11.03219c-2.07776,-7.78816 -4.66281,-17.47843 -4.66281,-30.39563c0,-21.89216 12.93096,-40.06761 13.76,-42.05937c-3.93536,-7.09672 -15.96525,-19.71281 -41.41437,-19.71281zM113.25797,27.52c0,14.33104 -6.59067,20.72342 -11.48234,29.3475c-5.32856,9.40152 -8.89563,18.53397 -8.89563,32.42469c0,12.01592 2.45981,21.22244 4.43437,28.62188c1.31064,4.9192 2.44563,9.16642 2.44563,12.80594c0,4.5408 -1.8526,8.89428 -3.64828,13.10828c-1.66152,3.90096 -3.23172,7.58982 -3.23172,11.27406c0,7.35128 5.71502,10.01765 9.55406,10.01765h46.25187c3.84248,0 9.55406,-2.66637 9.55406,-10.01765c0,-3.68424 -1.5702,-7.3731 -3.23172,-11.27406c-1.79568,-4.214 -3.64828,-8.56748 -3.64828,-13.10828c0,-3.63952 1.13499,-7.8833 2.44563,-12.80594c1.97456,-7.39944 4.43437,-16.60596 4.43437,-28.62188c0,-13.89072 -3.40883,-23.10917 -8.89563,-32.42469c-5.35952,-9.09192 -11.48906,-13.89502 -11.48906,-29.3475zM119.23094,48.16c0.4464,-0.00903 0.89843,0.06729 1.33703,0.24187c1.76472,0.70864 2.62676,2.70997 1.92156,4.47469l-4.99875,12.48344h-7.41078l6.01328,-15.03656c0.5289,-1.32354 1.79847,-2.13635 3.13765,-2.16344zM131.88906,48.16c1.33821,0.02758 2.60875,0.8399 3.13765,2.16344l6.01328,15.03656h-7.41078l-4.99203,-12.48344c-0.7052,-1.76816 0.15013,-3.76605 1.91485,-4.47469c0.43688,-0.17372 0.89096,-0.25106 1.33703,-0.24187zM148.67922,72.15937c1.61336,5.15656 2.68078,10.74817 2.68078,17.13281c0,5.18064 -0.49386,9.74541 -1.20937,13.90781h-49.18125c-0.71552,-4.1624 -1.20937,-8.72717 -1.20937,-13.90781c0,-6.35024 1.06102,-11.91627 2.66063,-17.05219zM63.64,103.2c2.84832,0 5.16,2.31168 5.16,5.16c0,2.84832 -2.31168,5.16 -5.16,5.16c-2.84832,0 -5.16,-2.31168 -5.16,-5.16c0,-2.84832 2.31168,-5.16 5.16,-5.16zM109.4686,110.08h7.00094c0.48504,2.53872 1.08753,5.24181 1.69984,7.91469c1.19368,5.22192 2.23063,9.73251 2.23063,12.72531c0,5.95464 -2.23138,11.11045 -4.20594,15.65469c-1.37256,3.16824 -2.67406,6.15835 -2.67406,8.42531c0,1.08704 0.3217,2.322 0.7861,3.44h-7.05469c-0.35776,-1.02856 -0.6114,-2.13968 -0.6114,-3.44c0,-3.698 1.57348,-7.32064 3.23844,-11.16656c1.7888,-4.12112 3.64156,-8.3864 3.64156,-12.91344c0,-2.21536 -1.04458,-6.77664 -2.05594,-11.18672c-0.72928,-3.182 -1.46227,-6.4192 -1.99547,-9.45328zM134.65047,110.08h7.00094c-0.53664,3.03408 -1.26963,6.27128 -1.99547,9.45328c-1.01136,4.41008 -2.05594,8.97136 -2.05594,11.18672c0,4.52704 1.85276,8.79232 3.64156,12.91344c1.66496,3.84592 3.23844,7.46856 3.23844,11.16656c0,1.30032 -0.25708,2.41144 -0.6114,3.44h-7.05469c0.46096,-1.12144 0.7861,-2.3564 0.7861,-3.44c0,-2.26696 -1.3015,-5.25707 -2.67406,-8.42531c-1.97456,-4.54424 -4.20594,-9.70005 -4.20594,-15.65469c0,-2.9928 1.03694,-7.50339 2.23063,-12.72531c0.61232,-2.67288 1.2148,-5.37597 1.69984,-7.91469zM72.24,116.96c1.89888,0 3.44,1.54112 3.44,3.44c0,1.89888 -1.54112,3.44 -3.44,3.44c-1.89888,0 -3.44,-1.54112 -3.44,-3.44c0,-1.89888 1.54112,-3.44 3.44,-3.44z">
                    </path>
                  </g>
                </g>
              </svg>
              <p class="category-title">Menu</p>
            </div>
            <div id="panini-selector" class="product-category" onclick="selectPanini()">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#666666">
                    <path
                      d="M86,17.2c-47.3,0 -63.06667,23.48373 -63.06667,28.66667v5.73333c0,3.1648 2.56853,5.73333 5.73333,5.73333h114.66667c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-5.73333c0,-5.18293 -15.76667,-28.66667 -63.06667,-28.66667zM22.93333,68.8c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h126.13333c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM26.05755,91.73333c-4.89053,0 -8.85755,3.96702 -8.85755,8.85755c0,4.89627 3.96702,8.85755 8.85755,8.85755h119.8737c4.89627,0 8.85755,-3.96702 8.85755,-8.85755c0.00573,-4.89053 -3.95582,-8.85755 -8.84636,-8.85755h-15.78906c-4.27707,0 -21.22005,11.46667 -21.22005,11.46667c0,0 -34.39767,-11.46667 -44.76927,-11.46667zM28.66667,120.4c-3.1648,0 -5.73333,2.56853 -5.73333,5.73333v5.73333c0,6.33533 5.13133,11.46667 11.46667,11.46667h103.2c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-5.73333c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z">
                    </path>
                  </g>
                </g>
              </svg>
              <p class="category-title">Panini</p>
            </div>
            <div id="bevande-selector" class="product-category" onclick="selectBevande()">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#666666">
                    <path
                      d="M99.76,20.64h-27.52c-2.05712,0 -3.72552,-1.6684 -3.72552,-3.72552v-5.16c0,-4.75064 3.84936,-8.31448 8.6,-8.31448h17.77792c4.75064,0 8.6,3.56384 8.6,8.31448v5.16c-0.00344,2.05712 -1.67184,3.72552 -3.7324,3.72552zM113.52,134.45928c0,-3.86656 1.14208,-8.63096 2.46992,-14.14872c1.96424,-8.18376 4.41008,-18.37304 4.41008,-30.87056c0,-9.288 -2.20504,-16.70808 -5.16,-23.36792v-0.71208h-0.33368c-1.62368,-3.56384 -3.43656,-6.93504 -5.246,-10.24776c-4.62336,-8.46928 -8.96808,-16.5464 -9.73864,-27.59224h-27.83992c-0.77056,11.04584 -5.11872,19.12296 -9.73864,27.59224c-1.80944,3.31616 -3.62232,6.68392 -5.246,10.24776h-0.33712v0.71208c-2.95496,6.65984 -5.16,14.07992 -5.16,23.36792c0,12.49752 2.44584,22.6868 4.41008,30.87056c1.32784,5.51776 2.46992,10.28216 2.46992,14.14872c0,4.73688 -1.83696,8.79264 -3.61544,12.71768c-1.67872,3.70144 -3.26456,7.20336 -3.26456,11.06304c0,7.57144 6.17136,10.32 10.32,10.32h48.16c4.14864,0 10.32,-2.74856 10.32,-10.32c0,-3.85968 -1.58584,-7.3616 -3.26456,-11.06304c-1.77848,-3.92504 -3.61544,-7.9808 -3.61544,-12.71768zM91.66912,51.81672c1.78192,-0.65704 3.76336,0.23392 4.43072,2.0124l4.32408,11.53088h-7.34784l-3.41592,-9.11256c-0.66736,-1.77848 0.23392,-3.75992 2.00896,-4.43072zM75.89672,53.83256c0.66392,-1.78192 2.6488,-2.67288 4.43072,-2.0124c1.77848,0.66736 2.67632,2.65224 2.0124,4.43072l-3.41592,9.10912h-7.34784zM77.07664,149.21344c-0.74992,3.3712 -1.39664,6.28832 -1.39664,9.02656c0,1.05608 0.27176,2.30136 0.69488,3.44h-7.0176c-0.32336,-1.02856 -0.55728,-2.13624 -0.55728,-3.44c0,-3.49504 0.76024,-6.90752 1.56176,-10.51952c0.92536,-4.15896 1.87824,-8.45896 1.87824,-13.56048c0,-4.5408 -0.69144,-13.14768 -1.43104,-20.64h6.90752c0.73272,7.51296 1.40352,15.99944 1.40352,20.64c0,5.85832 -1.0836,10.74312 -2.04336,15.05344zM102.64272,161.68h-7.0176c0.42312,-1.13864 0.69488,-2.38392 0.69488,-3.44c0,-2.73824 -0.64672,-5.65536 -1.39664,-9.02656c-0.95976,-4.31032 -2.04336,-9.19512 -2.04336,-15.05344c0,-4.64056 0.6708,-13.12704 1.40008,-20.64h6.90752c-0.73616,7.49232 -1.4276,16.0992 -1.4276,20.64c0,5.10152 0.95288,9.40152 1.87824,13.56048c0.80152,3.612 1.56176,7.02448 1.56176,10.51952c0,1.30376 -0.23392,2.41144 -0.55728,3.44zM60.08304,106.64c-0.9288,-5.1772 -1.60304,-10.83256 -1.60304,-17.2c0,-6.59792 1.26936,-12.11912 3.18544,-17.2h48.67256c1.91264,5.08088 3.182,10.60208 3.182,17.2c0,6.36744 -0.67424,12.0228 -1.60304,17.2z">
                    </path>
                  </g>
                </g>
              </svg>
              <p class="category-title">Bevande</p>
            </div>
          </div>
        </div>
      </div>
      <div id="productsContainer" class="products-container">
      </div>

      </div>
      <!-- FOOTER -->
      <footer>
        <hr class="footer-separator" />
        <div class="container-fluid footer-container">
          <div class="footer-row">
            <div class="col-sm-3">
              <a href="/" style="text-decoration: none !important">
                <img src="assets/Logo.png" height="50" width="50" />
                <p class="footer-title">TasteUp</p>
              </a>
            </div>
            <div class="col-sm-3">
              <h5 class="footer-link-title">Aiuto</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a class="footer-link-item" href="/contact-us">Contattaci</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-3">
              <h5 class="footer-link-title">Note Legali</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a class="footer-link-item" href="#!">Termini e Condizioni</a>
                </li>
                <li>
                  <a class="footer-link-item" href="#!">Politica sulla Privacy</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-3">
              <h5 class="footer-link-title">Seguici</h5>

              <ul class="list-unstyled">
                <li>
                  <a class="footer-link-item" href="#!">Facebook</a>
                </li>
                <li>
                  <a class="footer-link-item" href="#!">Instagram</a>
                </li>
                <li>
                  <a class="footer-link-item" href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright-section">
          <p class="copyright-paragraph">
            © 2021 Copyright -
            <a class="copyright-link" href="/">tasteup.it</a>
          </p>
        </div>
      </footer>
    </body>

    </html>