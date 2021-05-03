// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

  /*   Activaciòn de Slick Slider */
  $('.slick-slider').slick({
    autoplay: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 200,
    dots: false,
    arrows: true
    
  });

    // Activación de transición del menú principal y del menú móvil
    $('header article nav a, aside#menu-moviles nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Funciones de Abrir y Cerrar el Menú responsive 
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles').animate({
            right: 0
        },500,'easeOutExpo'); 

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();
        
        event.preventDefault();
    }); 

    $('a#cerrar-menu, aside#menu-moviles nav a').click(function(){
         $('aside#menu-moviles').animate({
            right: -290
        },1000,'easeOutElastic');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    }); 

});