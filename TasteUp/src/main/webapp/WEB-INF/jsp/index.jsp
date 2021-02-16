<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <!DOCTYPE html>
    <html lang="it">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TasteUp - Food at home!</title>

      <!--Bootstrap-->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"></script>

      <!--CSS-->
      <link rel="stylesheet" href="css/style.css" type="text/css" />

      <!-- JS -->
      <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
      <script src="../../js/index.js"></script>
    </head>

    <body>

      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top NavBar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="assets/LogoNoBackground.png" width="80" height="80" class="d-inline-block align-top" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse" id="main_nav">
            <div class="offcanvas-header mt-3">
              <button onclick="closeNav()" class="btn btn-close float-right"><svg xmlns="http://www.w3.org/2000/svg"
                  x="0px" y="0px" width="50" height="50" viewBox="0 0 172 172" style=" fill:#000000;">
                  <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path
                        d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM112.9868,104.87987c2.24173,2.24173 2.24173,5.8652 0,8.10693c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-18.87987,-18.87987l-18.87987,18.87987c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987c-2.24173,-2.24173 -2.24173,-5.8652 0,-8.10693l18.87987,-18.87987l-18.87987,-18.87987c-2.24173,-2.24173 -2.24173,-5.8652 0,-8.10693c2.24173,-2.24173 5.8652,-2.24173 8.10693,0l18.87987,18.87987l18.87987,-18.87987c2.24173,-2.24173 5.8652,-2.24173 8.10693,0c2.24173,2.24173 2.24173,5.8652 0,8.10693l-18.87987,18.87987z">
                      </path>
                    </g>
                  </g>
                </svg></button>
            </div>
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
            <ul id="searchBarNavbar" class="navbar-nav mx-auto searchBarNavbar hide">
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

      <!-- HEADER -->
      <div id="header" class="headerSection">
        <img class="header-illustration" src="../../assets/illustrations/ill1.png" height="30%">
        <div class="headerDescrizioni">
          <h1 class="firstDescr">È più buono quando te lo portano a casa!</h1>
          <h2 class="secondDescr">Ordina comodamente dal divano mentre stai guardando l'ultima serie tv.<br>Al resto
            pensiamo noi.</h2>
        </div>
        <div class="input-group">
          <form class="input-group" autocomplete="off" action="catalog">
            <input name="product" autocomplete="off" type="text" class="idbar p-3 mb-5"
              placeholder="Cosa desideri mangiare?" />
            <button id="buttonsearch" class="btn btn-secondary" type="submit"><svg xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" width="35" height="35" viewBox="0 0 172 172" style=" fill:#000000;">
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
      </div>

      <!-- CATEGORY SECTION -->
      <div class="row">
        <div class="col-lg-6" onclick="window.location='catalog?product=panini';">
          <div class="cardpanino" style="background-image: url(../../assets/Panino.jpg)">
            <div class="card-body">
              <h5 id="panini-text" class="card-title">Panini</h5>
              <p class="card-description">Scopri la migliore selezione di panini, con verdure fresche e carni di qualità
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" onclick="window.location='catalog?product=menu';">
          <div class="cardpanino" style="background-image: url(../../assets/Menu.jpg)">
            <div class="card-body">
              <h5 id="menu-text" class="card-title">Menu</h5>
              <p class="card-description">Perché accontentarsi di un solo panino? Aggiungi anche una bevanda e un
                gustoso snack
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- DELIVERY PROMO -->
      <div class="delivery-promo container-fluid">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 172 172"
          style=" fill:#000000;">
          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"
            font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#ffffff">
              <path
                d="M103.60313,36.28125c9.40625,0 18.14063,-7.39062 19.75313,-16.79687c0.80625,-4.8375 -0.26875,-9.40625 -3.225,-12.9c-2.82187,-3.35938 -7.12188,-5.24063 -11.825,-5.24063c-9.40625,0 -18.14062,7.39063 -19.75312,16.79688c-0.80625,4.8375 0.26875,9.40625 3.225,12.9c2.82188,3.35937 6.9875,5.24062 11.825,5.24062zM96.48125,19.48438c0.94062,-5.50937 6.45,-10.07812 11.825,-10.07812c2.28438,0 4.3,0.80625 5.64375,2.41875c1.34375,1.6125 1.88125,3.89687 1.47812,6.31562c-0.94063,5.50938 -6.45,10.07813 -11.825,10.07813c-2.28437,0 -4.3,-0.80625 -5.64375,-2.41875c-1.47812,-1.6125 -1.88125,-3.89688 -1.47812,-6.31563zM6.31563,130.34375h13.4375h0.40312v0v0h147.40938c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125h-9.27188c1.74688,-20.15625 -6.18125,-45.28437 -19.8875,-61.54375c-10.48125,-12.49688 -23.38125,-19.08125 -37.22187,-19.08125c-23.91875,0 -45.01563,19.08125 -55.3625,30.50312c-14.10937,15.45313 -25.12812,34.80312 -28.89062,50.12188h-10.61562c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28438 1.88125,4.03125 4.03125,4.03125zM65.70937,76.59375c7.65938,-7.12188 15.45313,-12.09375 22.70938,-14.37813c2.15,-0.67187 4.43437,0.40312 5.10625,2.55313c0.67188,2.15 -0.40312,4.43437 -2.55313,5.10625c-6.04687,2.01563 -12.9,6.45 -19.75312,12.76563c-0.80625,0.67188 -1.74688,1.075 -2.6875,1.075c-1.075,0 -2.15,-0.40313 -2.95625,-1.34375c-1.6125,-1.74687 -1.47812,-4.3 0.13438,-5.77812zM46.89688,98.9c1.34375,-2.01562 2.6875,-4.03125 4.16562,-6.04687c1.34375,-1.74687 3.89688,-2.15 5.64375,-0.80625c1.74687,1.34375 2.15,3.89688 0.80625,5.64375c-1.34375,1.88125 -2.6875,3.7625 -3.89687,5.64375c-0.80625,1.20938 -2.01562,1.88125 -3.35937,1.88125c-0.80625,0 -1.47813,-0.26875 -2.15,-0.67187c-1.88125,-1.20938 -2.41875,-3.7625 -1.20938,-5.64375zM122.81875,170.65625c9.40625,0 18.14062,-7.39062 19.75312,-16.79687c0.80625,-4.8375 -0.26875,-9.40625 -3.225,-12.9c-2.82188,-3.35937 -7.12188,-5.24062 -11.825,-5.24062c-9.40625,0 -18.14062,7.39063 -19.75313,16.79688c-0.80625,4.8375 0.26875,9.40625 3.225,12.9c2.82187,3.35938 7.12188,5.24062 11.825,5.24062zM115.69688,153.85938c0.94063,-5.50938 6.45,-10.07812 11.825,-10.07812c2.28438,0 4.3,0.80625 5.64375,2.41875c1.34375,1.6125 1.88125,3.89688 1.47812,6.31563c-0.94063,5.50938 -6.45,10.07813 -11.825,10.07813c-2.28438,0 -4.3,-0.80625 -5.64375,-2.41875c-1.34375,-1.6125 -1.88125,-3.89688 -1.47812,-6.31563zM36.81875,170.65625c9.40625,0 18.14063,-7.39062 19.75312,-16.79687c0.80625,-4.8375 -0.26875,-9.40625 -3.225,-12.9c-2.82188,-3.35937 -7.12187,-5.24062 -11.825,-5.24062c-9.40625,0 -18.14062,7.39063 -19.75312,16.79688c-0.80625,4.8375 0.26875,9.40625 3.225,12.9c2.82188,3.35938 7.12188,5.24062 11.825,5.24062zM29.69688,153.85938c0.94062,-5.50938 6.45,-10.07812 11.825,-10.07812c2.28437,0 4.3,0.80625 5.64375,2.41875c1.34375,1.6125 1.88125,3.89688 1.47813,6.31563c-0.94063,5.50938 -6.45,10.07813 -11.825,10.07813c-2.28437,0 -4.3,-0.80625 -5.64375,-2.41875c-1.34375,-1.6125 -1.88125,-3.89688 -1.47813,-6.31563zM6.71875,36.28125h40.04375c2.28438,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125h-40.04375c-2.28437,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125zM15.72188,55.09375c-2.28437,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74688,4.03125 4.03125,4.03125h13.4375c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125z">
              </path>
            </g>
          </g>
        </svg>
        <h2 class="delivery-promo-title">
          Piatto freddo? No, grazie.
        </h2>
        <p class="delivery-promo-description">
          TasteUp assicura una consegna ultra-veloce per permetterti di gustare i piatti caldi. Sì, prima che inizi il
          prossimo episodio.
        </p>
      </div>

      <!-- FOOTER -->
      <footer>
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