/*
- Creating a slider
- Creating carousel
- Creating a mobile menu
*/

$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 7000,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },

        1400:{
            items:1
        }
    }
});

$('.home-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 7000,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }

    }
});

$(document).ready(function(){

    $('#menuicon').click(function(){
        $('#mobilemenu').addClass('menu-open');
    });

    $('.menuclose').click(function(){
        $('#mobilemenu').removeClass('menu-open');
    });

    $('.sub-toggle').click(function(){
        $('.sub-menu').slideToggle('menu-open');
        $(this).toggleClass('sub-menu-open');
    });


});