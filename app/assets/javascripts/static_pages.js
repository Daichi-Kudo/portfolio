$(function() {
  //画像にマウスを乗せたら発動
  $('#mirai').hover(function() {
    //画像のsrc属性が別画像のパスに切り替わる
    $(this).animate({
            'marginTop': '50px'
  },1000);
  }, function() {
    $(this).animate({'marginTop': '100px'
  },500);
});
});