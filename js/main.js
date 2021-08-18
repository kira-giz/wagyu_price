$(function () {
  $pageTop = $("#page-top");
  // 初期描画で隠す
  $pageTop.hide();
  $(window).scroll(function () {
    // 40はヘッダーの高さ
    if ($(window).scrollTop() > 40) {
      $pageTop.fadeIn(300);
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 200);
    // aタグのイベント無効
    return false;
  });
});
