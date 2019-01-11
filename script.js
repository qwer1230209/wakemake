$(function(){
	$(".header_menu > li").mouseover(function(){
		$(".menu_1").stop().slideDown("fast");
        $(".white").stop().slideDown("fast");
    });
		
	$(".header_menu > li").mouseout(function(){
		$(".menu_1").stop().slideUp("fast");
        $(".white").stop().slideUp(".fast");
    });
      });