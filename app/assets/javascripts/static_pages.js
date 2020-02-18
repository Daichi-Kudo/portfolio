$(function(){
	$('.mirai').hover(function(){
		$(this).animate({'top':'200px','left':'200px'},2000);
	});
});
$(function(){
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    arrows: true,
 　　prevArrow:'<div class="prev">⬅︎</div>',
 　　nextArrow:'<div class="next">➡︎</div>'
});
});