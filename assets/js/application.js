$(function(){
	// sidebar Toggle
	$(".sidebar-toggle").click(function(){
		$(".sidebar").toggleClass("active");
		$(".content").toggleClass("content-sidebar");
		$("body").toggleClass("body-sidebar");
		$(".header").toggleClass("header-sidebar");
		return false;
	});
	$('.sidebar').bind('clickoutside', function (event) {
		$(".sidebar").removeClass("active");
	});
	// aside Toggle
	$(".aside-toggle").click(function(){
		$(".aside").toggleClass("active");
		$(".content").toggleClass("content-aside");
		$("body").toggleClass("body-aside");
		$(".header").toggleClass("header-aside");
		return false;
	});
	$('.aside').bind('clickoutside', function (event) {
		$(".aside").removeClass("active");
	});
	// appbar Toggle
	$(".appbar-toggle").click(function(){
		$(".appbar").toggleClass("active");
		$(".sidebar").toggleClass("sidebar-appbar");
		$(".content").toggleClass("content-appbar");
		$("body").toggleClass("body-appbar");
		$(".header").toggleClass("header-appbar");
		return false;
	});
	// header Toggle
	$(".header-toggle").click(function(){
		$(".header, .content").toggleClass("active");
		return false;
	});
	// auto toggler
	/*
	function checkWidth(init)
	{
		if ($(window).width() > 992) {
	    	$(".sidebar").addClass("sidebar-appbar");
	        $('.content').addClass('content-appbar');
	        $(".header").addClass("header-appbar");
	        $(".appbar").addClass("active");
	    }
	    else if ($(window).width() > 768 & $(window).width() < 992) {
	    	$(".sidebar").addClass("active");
	    	$(".sidebar").removeClass("sidebar-appbar");
	        $('.content').addClass('content-sidebar');
	        $(".header").addClass("header-sidebar");
	        $(".header").removeClass("header-appbar");
	        $(".content").removeClass("content-appbar");
	        $(".appbar").removeClass("active");
	    }
	    else {
	        if (!init) {
	        	$(".sidebar").removeClass("active");
	            $('.content').removeClass('content-sidebar');
	            $(".header").removeClass("header-sidebar");
	            $(".appbar").removeClass("active");
	        }
	    }
	}
	
	$(document).ready(function() {
	    checkWidth(true);

	    $(window).resize(function() {
	        checkWidth(false);
	    });
	});
	*/

	// Activate tooltip
    $("[data-toggle='tooltip']").tooltip();
    // Animate progress bars
    $(function(){
			$('.progress .progress-bar').each(function() {
				var bar = $(this);
				var perc = bar.attr("aria-valuenow");
				var current_perc = 0;
	            var progress = setInterval(function() {
					if (current_perc>=perc) {
						clearInterval(progress);
					} else {
						current_perc +=1;
						bar.css('width', (current_perc)+'%');
					}
				}, 0);
			});
		});
});