$(document).ready(function(){

    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated',
    });

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
          el: '.swiper-pagination.pagi_type1',
          type: 'progressbar',
        },
      
        navigation: {
          nextEl: '.sbn1',
          prevEl: '.sbp1',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        // on: {
        //     slideChange: function(){
        //         var idx = this.realIndex;
        //         $('.main_img_slide ul li').eq(idx).addClass('active').siblings().removeClass('active');
        //     }
        // }
      });

      swiper1.controller.control = swiper2;
      swiper2.controller.control = swiper1;

      const sections = document.querySelectorAll('section');

      let observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('view');
            }, 200);
          }
        });

      },
      );

      sections.forEach((view, index) => {
          observer1.observe(view);
      });

      const swiper3 = new Swiper('.pd_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        speed: 600,
        touchRatio: 0,

        navigation: {
          nextEl: '.pd_slide_button.next',
          prevEl: '.pd_slide_button.prev',
        },

        on: {
            slideChange: function(){
                var idx = this.realIndex;
                $('.pd_top ul li').eq(idx).addClass('active').siblings().removeClass('active');
                $('.pd_bot > ul > li').eq(idx).addClass('active').siblings().removeClass('active');
            }
        }

      });

      $('.pd_slide .swiper-slide').on('click', function(){
        swiper3.slideTo($(this).index(), 600);
    });

    const swiper4 = new Swiper('.main_info_slide_cont', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      speed: 300,
      spaceBetween: 25,

      navigation: {
        nextEl: '.sbn2',
        prevEl: '.sbp2',
      },

    });
});