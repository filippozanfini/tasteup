var json = undefined;

$.fn.isOnScreen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft(),
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();
  return !(
    viewport.right < bounds.left ||
    viewport.left > bounds.right ||
    viewport.bottom < bounds.top ||
    viewport.top > bounds.bottom
  );
};

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
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }
     
window.onload = function () {
  // $("#searchBarNavbar").hide();
  getOrderJSON();
  document.getElementById("logout-btn").onclick = logout;

  // NAVBAR
  $("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr("data-trigger");
    $(trigger_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
  });
};

$(window).scroll(function () {
  if ($("#header").isOnScreen() == true) {
    $("#searchBarNavbar").removeClass("show");
    $("#searchBarNavbar").addClass("hide");
  } else {
    $("#searchBarNavbar").removeClass("hide");
    $("#searchBarNavbar").addClass("show");
  }
});

function closeNav() {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}
