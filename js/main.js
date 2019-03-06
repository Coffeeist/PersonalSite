$(window).scroll(function () {
	
	var st = $(this).scrollTop();
	
	var $nav = $("#topNav");
	var $navBack = $("#topNavBack");
	$navBack.toggleClass('shrink', st > $nav.height());
	$nav.toggleClass('shrink', st > $nav.height());
	
	$('.scrollPt').each(function (i) {
		if ($(this).position().top <= st) {
			$('nav#topNav ul li a.active').removeClass('active');
			$('nav#topNav ul li a').eq(i).addClass('active');
		}
	});
});

$("nav#topNav ul li a").on("click", function (e) {
	e.preventDefault();
	
	var target = this.hash;
	var st = $(window).scrollTop();
	
	if (st <= $("#topNav").height()) {
		$('html, body').animate({scrollTop: ($(target).offset().top - 10)}, 500)
	} else {
		$('html, body').animate({scrollTop: ($(target).offset().top + 3)}, 500)
	}
});

$(document).ready(function () {
	var checkIE = (/Trident|MSIE/).test(navigator.userAgent);
	
	if(checkIE){
		if (confirm("It appears you are using Internet Explorer.\r\nThis site likely won't display properly. I recommend trying a modern browser such as Firefox, Chrome, Vivaldi, or Brave.\r\n\nPress 'OK' to close this page, or 'Cancel' to proceed anyway...")) {
			window.close();
		}
	}
});