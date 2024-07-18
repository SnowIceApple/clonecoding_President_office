$(document).ready(function(){

    $('#nav').on('mouseenter focusin', function(){
        $(this).addClass('active');
        $('.megamenu_bg').stop().slideDown(300);
        $('#nav ul.floor2').stop().slideDown(300);
    });

    $('#nav').on('mouseleave focusout', function(){
        $(this).removeClass('active');
        $('.megamenu_bg').stop().slideUp(300);
        $('#nav ul.floor2').stop().slideUp(300);
    });

    $('.hb_allMenu > button').on('click', function(){
        $('.main_allMenu').addClass('active');
        $('body').addClass('fixed');
    });

    $('.allMenu_close').on('click', function(){
        $('.main_allMenu').removeClass('active');
        $('body').removeClass('fixed');
    });

    const swiper1 = new Swiper('.main_txt_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
          },
        duration: 500,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        // on: {
        //     slideChange: function(){
        //         var idx = this.realIndex;
        //     }
        // }
      });

      const swiper2 = new Swiper('.main_img_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
          },
        duration: 500,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        on: {
            slideChange: function(){
                var idx = this.realIndex;
                $('.main_img_slide ul li').eq(idx).addClass('active').siblings().removeClass('active');
            }
        }
      });

      swiper1.controller.control = swiper2;
      swiper2.controller.control = swiper1;

});