<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="ISO-8859-1">
      <title>Registrazione</title>

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
      <link rel="stylesheet" href="/css/style.css" type="text/css" />
      <link rel="stylesheet" href="/css/log.css" type="text/css" />
    </head>

    <body>

      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top NavBar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="assets/LogoNoBackground.png" width="80" height="80" class="d-inline-block align-top" />
            <p class="NavBar-Title">Food Delivery</p>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <form method="GET" action="catalog">
                  <a class="nav-link" aria-current="page" href="javascript:;"
                    onclick="parentNode.submit();">Catalogo</a>
                </form>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" href="#" id="navbarDropdown"
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categoria
                </a>
                </form>
              </li>

              <c:if test="${usernameLogged == null}">
                <form method="GET" action="login">
                  <button class="btn loginBtn">Accedi</button>
                </form>
              </c:if>

              <c:if test="${usernameLogged != null}">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" href="#" id="navbarDropdown"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false"> ${usernameLogged} </a>

                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/accountInfo">Account</a></li>
                    <li>
                      <form method="POST" action="logout"><a class="dropdown-item" href="javascript:;"
                          onclick="parentNode.submit();">Logout</a></form>
                    </li>
                  </ul>
                </li>
              </c:if>
            </ul>
          </div>
        </div>
      </nav>

      <div class="page-content">
        <img id="image_ill" src="/assets/illustrations/illRegistration.png">
        <div id="div_form" class="page-form">
          <form class="container" method="POST" action="registrazioneAccount">
            <div id="header_form">
              <h3 id="h3_registrati">Registrazione</h3>
              <img id="image" src="/assets/illustrations/registerIcon.png">
              <div class="form-group">
                <input id="form" class="form-control" type="email" id="email" name="username"
                  placeholder="Inserisci il tuo indirizzo email" required>
              </div>
              <div class="form-group">
                <input id="form" class="form-control" type="password" id="password" name="password"
                  placeholder="Inserisci la tua password" required>
              </div>
              <div id="div_button">
                <button class="modifica" value="registraAccount"><span>Registrati</span></button>
              </div>
          </form>
        </div>
      </div>

      </div>
      </nav>

      <div class="page-content">
        <div class="page-form">
          <form class="container" method="post" action="registrazioneAccount">
            <div class="form-group">
              <h3>Registrati su Food Delivery</h3>
              <input class="form-control" type="email" id="email" name="username"
                placeholder="Inserisci il tuo indirizzo email" required>
            </div>
            <div class="form-group">
              <input class="form-control" type="password" id="password" name="password"
                placeholder="Inserisci la tua password" required>
            </div>
            <button class="modifica" value="registraAccount">Crea un account</button>
          </form>
        </div>
      </div>

      <footer>
        <div class="container-fluid footer-container">
          <div class="footer-row">
            <div class="col-sm-3">
              <a href="/" style="text-decoration: none !important">
                <img src="assets/Logo.png" height="50" width="50" />
                <p class="footer-title">Food Delivery</p>
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
                  <a class="footer-link-item" href="#!">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright-section">
          <p class="copyright-paragraph">
            © 2021 Copyright -
            <a class="copyright-link" href="/">fooddelivery.com</a>
          </p>
        </div>
      </footer>


    </body>

    </html>