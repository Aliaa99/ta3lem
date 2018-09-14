$('.one').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl:true,
    dots:true,
    navText:["<",">"],
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        }
    }
})


$('.second').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    rtl:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

    //fancy box
    $('.various').fancybox({
        padding : 10,
        openEffect  : 'fade'
    });


//menu

$(document).ready(function(){
    $('.main .op').click(function(){
        $('.menu2').css({"width":"60%",})
        $('.main').css({"left":"40%",})
        $(this).toggle();
        $('.main span').toggle();

    });
    $('.menu2 .clo').click(function(){
        $(this).parent().css({"width":"0",})
        $('.main').css({"left":"0",})
        $('.main .op').toggle();
        $('.main span').toggle();
    });
        $('.opop').click(function(){
        $('.men').slideToggle();
    });

});
//scroll background color of navbar
      $(window).scroll(function() {
       		var scrollVal = $(this).scrollTop();
        	if ( scrollVal > 150) {
            	
            	$('.main').css({'top':'0','opacity':'1'});
            	$('.menu2').css({'top':'0'});
        	}
              else{
                  
            	$('.main').css({'top':'40px','opacity':'.7'});
            	$('.menu2').css({'top':'40px'});
              }
        	
    	});
            // scroll down 

$('.bott a').click (function(){
      $('html,body').animate({         scrollTop:$("#toppage").offset().top},1000);
   });

