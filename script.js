$(document).ready(function(){
  $('.slider').slider();
});


//,,,,,,,,,,,
var now_img, next_img;
 function fade_change(){
     now_img = $(".image_slider img:eq(0)");
     next_img = $(".image_slider img:eq(1)");
     next_img.addClass("active").css("opacity",0).animate({"opacity":1},1000, function(){
         $(".image_slider").append(now_img);           //콜백
         now_img.removeClass("active");
     });
 }


 // 순환

 /*
     fade_change() 함수를 순환시키는 timer 설정
     mouse hover 로 애니메이션 멈춤/재생

 */
 var timer = setInterval("fade_change()", 4000);

 $("div.image_slider").hover(function(){       // mouse enter 시
     clearInterval(timer);
 }, function(){                                  // mouse leave 시
     timer = setInterval("fade_change()",4000);
 });


//---slider



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

