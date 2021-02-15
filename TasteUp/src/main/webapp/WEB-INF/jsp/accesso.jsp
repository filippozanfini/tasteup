<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="ISO-8859-1">
            <title>Accesso</title>

            <!--Bootstrap-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                crossorigin="anonymous"></script>

            <!--CSS-->
            <link rel="stylesheet" href="/css/style.css" type="text/css" />
            <link rel="stylesheet" href="/css/profile.css" type="text/css" />

            <!-- JS -->
            <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
            <script src="../../js/login.js"></script>
        </head>

        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top NavBar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="assets/LogoNoBackground.png" width="80" height="80"
                            class="d-inline-block align-top" />
                        <p class="NavBar-Title">Food Delivery</p>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
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
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" href="#"
                                    id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sfoglia
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <form method="GET" action="panini">
                                            <a class="dropdown-item" href="javascript:;"
                                                onclick="parentNode.submit();">Panini</a>
                                        </form>
                                    </li>
                                    <li>
                                        <form method="GET" action="menu">
                                            <a class="dropdown-item" href="javascript:;"
                                                onclick="parentNode.submit();">Menu</a>
                                        </form>
                                    </li>
                                    <li>
                                        <form method="GET" action="bevande">
                                            <a class="dropdown-item" href="javascript:;"
                                                onclick="parentNode.submit();">Bevande</a>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <form method="POST" action="cart">
                                    <a class="nav-link cart-link" aria-current="page" href="javascript:;"
                                        onclick="parentNode.submit();"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="23" height="23" fill="currentColor" class="bi bi-cart"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <span id="cart-badge" class="badge rounded-pill bg-light text-dark">0</span>
                                    </a>
                                </form>
                            </li>

                            <c:if test="${usernameLogged == null}">

                                <button id="signup-btn" class="btn loginBtn">Registrati</button>

                            </c:if>

                            <c:if test="${usernameLogged != null}">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle account-link" data-toggle="dropdown" href="#"
                                        href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false"><i><svg xmlns="http://www.w3.org/2000/svg" width="23"
                                                fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z">
                                                </path>
                                            </svg></i> Il tuo account</a>

                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/accountInfo">Area personale</a></li>
                                        <li>
                                            <a id="logout-btn" class="dropdown-item">Esci</a>
                                        </li>
                                    </ul>
                                </li>
                            </c:if>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="page-content">
                <div class="page-form">
                    <div class="form-group">
                        <h3>Accedi</h3>
                        <input class="form-control" type="email" id="email"
                            placeholder="Inserisci il tuo indirizzo email" name="username">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" id="password"
                            placeholder="Inserisci la tua password" name="password">
                    </div>

                    <button id="login-btn" class="modifica" value="confermaLogin">Accedi</button>


                    <div class="registrati-form">
                        <p>Prima volta su Food Delivery?
                        </p>
                        <button onclick="signup()" class="btn">Crea Account</button>

                    </div>
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