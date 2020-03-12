$(function(){
       var top = $("#top");
      top.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 800);
        return false;
      });
});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 300){
                jQuery(this).addClass('scrollin');
            }
        });
    });
  });
$(window).on('load', function(){
    $('body').removeClass('fo');
});
$(function() {
    $('a:not([href^="#"]):not([target])').on('click', function(e){
        e.preventDefault();
        url = $(this).attr('href');
        if (url !== '') {
            $('body').addClass('fadeout');
            setTimeout(function(){
                window.location = url;
            }, 800);
        }
        return false;
    });
});