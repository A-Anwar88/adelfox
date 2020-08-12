$(function (){
    'use strict';
    
    
    $('.recent li').on('click',function () {
        $('.recent .tabs-content  div').hide();
        $('.'+ $(this).data('class')).show();
   
    });
    $('#team-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },1000:{
                items:4
            }
        }
    })
   

    $('#team-info-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },1000:{
                items:1
            }
        }
    })
    
});
