$(function() {
	var h = window.innnerHeight ? window.innnerHeight : $(window).height();
	var y = 
        document.documentElement.scrollTop || // IE、Firefox、Opera
        document.body.scrollTop;              // Chrome、Safari
	var offset = h - 600 + y;
	$('#tatie').css('background-image','url(./img/tatie'+(Math.floor(Math.random()*3)+1)+'.png)');
	$('#tatie').css('top',offset+'px');
});
window.onscroll = function(){
	var h = window.innnerHeight ? window.innnerHeight : $(window).height();
	var y = 
        document.documentElement.scrollTop || // IE、Firefox、Opera
        document.body.scrollTop;              // Chrome、Safari
	var offset = h - 600 + y;
	$('#tatie').animate({top:offset+'px'}, 300, 'swing');
}
$(window).resize(function() {
	var h = window.innnerHeight ? window.innnerHeight : $(window).height();
	var y = 
        document.documentElement.scrollTop || // IE、Firefox、Opera
        document.body.scrollTop;              // Chrome、Safari
	var offset = h - 600 + y;
	$('#tatie').animate({top:offset+'px'}, 300, 'swing');
});
