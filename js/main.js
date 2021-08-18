$(function () {
  var timer = false;
  $(window).resize(function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      location.reload();
    }, 200);
  });

  var $pageTop = $("#page-top");
  $pageTop.hide();
  $(window).on('load resize', function () {
    if (window.matchMedia("(max-width: 575px)").matches) {
      $(window).on("scroll", function () {
        btnFade();
      });
      $pageTop.on("click", function () {
        returnTop();
      });
    } else {
      $pageTop.stop().hide();
    };
  });

  function btnFade() {
    // 40はヘッダーの高さ
    if ($(window).scrollTop() > 40) {
      $pageTop.stop().fadeIn();
    } else {
      $pageTop.stop().fadeOut();
    }
  };

  function returnTop() {
    $("body,html").animate({ scrollTop: 0 }, 200);
    console.log($(window).width());
    // aタグのイベント無効
    return false;
  };
});
