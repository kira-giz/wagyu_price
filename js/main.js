$(function () {
  var $pageTop = $("#page-top");

  $pageTop.hide();
  $pageTop.on("click", function () {
    returnTop();
  });
  $(window).on("scroll", function () {
    btnFade();
  });

  function returnTop() {
    $("body,html").animate({ scrollTop: 0 }, 200);
    return false;
  };

  function btnFade() {
    // 40はヘッダーの高さ
    if ($(window).scrollTop() > 40) {
      if (window.matchMedia("(max-width: 575px)").matches) {
        $pageTop.stop().fadeIn();
      };
    } else {
      if (window.matchMedia("(max-width: 575px)").matches) {
        $pageTop.stop().fadeOut();
      };
    }
  };
});
