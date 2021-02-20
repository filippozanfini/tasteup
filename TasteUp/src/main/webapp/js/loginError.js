window.onload = function () {
  Swal.fire({
    title: "Errore",
    text: "Credenziali Errate",
    icon: "error",
    confirmButtonColor: "#000000",
  }).then(function () {
    window.location.replace("login");
  });
};

function closeNav() {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}
