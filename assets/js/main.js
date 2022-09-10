jQuery(document).ready(function() {


      // key & click
    /*window.oncontextmenu = function(){return false;}
    document.onkeydown = function(e) {
        if (e.ctrlKey &&
            (e.keyCode === 67 || 
             e.keyCode === 73 ||
             e.keyCode === 74 ||
             e.keyCode === 85 || 
             e.keyCode === 86 ||
             e.keyCode === 88 || 
             e.keyCode === 117))
        {return false;}
        else {return true;}
    };*/


    jQuery(window).on('scroll', function() {
		var scroll = jQuery(window).scrollTop();
		if (scroll >= 50) {
			jQuery('.header-wrapper').addClass('fixed');
		} else {
			jQuery('.header-wrapper').removeClass('fixed');
		}
	});


    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scroll-top').fadeIn();
        } else {
            jQuery('.scroll-top').fadeOut();
        }
    });
    jQuery('.scroll-top').click(function(){
        jQuery('html, body').animate({scrollTop : 0},800);
        return false;
    });


    var xz=0;
    jQuery(".open-menu, .close-menu").click(function(){
        if(xz==0){
            jQuery(".navigation").animate({"left":0},300);
            xz++;
        }else{
            jQuery(".navigation").animate({"left":"-100%"},300);
            xz--;
        }
        return false;
    });
    jQuery(document).on('click', function (event) {
        if (!jQuery(event.target).closest('.navigation').length) {
            jQuery(".navigation").animate({"left":"-100%"},300);
            xz = 0;
        }
    });


    jQuery('.banner .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        dots:false,
        nav:true,
        navText: [
			'<i class="fa-solid fa-chevron-left"></i>',
			'<i class="fa-solid fa-chevron-right"></i>'
		],
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });


    jQuery('.client-wrap .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            479:{
                items:2
            },
            767:{
                items:3
            },
            991:{
                items:4
            },
            1199:{
                items:5
            }
        }
    });


    AOS.init();

    jQuery('[data-fancybox="gallery"]').fancybox({
        'titlePosition':'inside',
	    'titleFormat':formatTitle
    });


});