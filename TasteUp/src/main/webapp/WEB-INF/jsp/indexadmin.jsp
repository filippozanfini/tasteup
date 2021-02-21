<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <!DOCTYPE html>
    <html lang="it">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Admin - TasteUp</title>

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
      <link rel="stylesheet" href="../../css/style.css" type="text/css" />
      <link rel="stylesheet" href="../../css/indexadmin.css" type="text/css" />
      <!-- JS -->
      <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
      <script src="../../js/indexadmin.js"></script>
    </head>

    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top NavBar">
        <div class="container-fluid">
          <a class="navbar-brand" href="">
            <img src="assets/LogoNoBackground.png" width="80" height="80" class="d-inline-block align-top" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-auto">
              <button id="logout-btn" class="btn loginBtn">Esci</button>
            </ul>
          </div>
        </div>
      </nav>

      <!-- HEADER -->
      <div class="admin-header">
        <p style="color: gray; text-align: center;">Per aggiungere un nuovo prodotto nel catalogo, clicca il seguente
          pulsante</p>
        <button class="btn add-btn" data-toggle="modal" data-target=".bd-ADD-modal-lg">Aggiungi</button>
        <p style="color: gray; text-align: center;">Per rimuovere un nuovo prodotto dal catalogo, clicca il seguente
          pulsante</p>
        <button class="btn remove-btn" data-toggle="modal" data-target=".bd-REMOVE-modal-lg">Rimuovi</button>
      </div>


      <!-- Large modal ADD -->
      <div class="modal fade bd-ADD-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">Aggiungi un prodotto</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
              <div class="dropdown">
                <select id="mySelect_add" autofocus>
                  <option id="option" value="Panini">Panini</option>
                  <option value="Bevande">Bevande</option>
                  <option value="Menu">Menu</option>
                </select>
              </div>
              <div class="addform">
              </div>
            </div>

            <div class="modal-footer">
              <button id="btn_add" type="button" class="btn btn-success">Aggiungi</button>
              <button id="btn_clear_add" type="button" class="btn btn-danger">Clear</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Large modal REMOVE-->
      <div class="modal fade bd-REMOVE-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">Rimuovi un prodotto</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
              <div class="dropdown">
                <select id="mySelect_remove" autofocus>
                  <option id="option" value="Panini">Panini</option>
                  <option value="Bevande">Bevande</option>
                  <option value="Menu">Menu</option>
                </select>
                <div class="form_remove">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button id="btn_remove" type="button" class="btn btn-success" data-dismiss="modal">Rimuovi</button>
              <button id="button_clear_remove" type="button" class="btn btn-danger">Clear</button>
            </div>
          </div>
        </div>
      </div>

    </body>

    </html>