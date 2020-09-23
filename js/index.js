$(document).ready(function () {
  //back to top
  var $backToTop = $(".back-to-top");
  $backToTop.hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });

  $backToTop.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

//end back to top
