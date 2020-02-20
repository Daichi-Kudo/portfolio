$(function(){
	$('.mirai').hover(function(){
		$(this).fadeOut('fast');
	});
});
$(function(){
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    arrows: true,
 　 prevArrow:'<div class="prev">&#8810;</div>',
 　 nextArrow:'<div class="next">&#8811;</div>'
});
});