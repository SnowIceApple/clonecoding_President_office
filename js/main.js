$(document).ready(function(){

    AOS.init({
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

    var navFloorOpen = $('.am_list > .floor1 > li > h3 a');
    
    navFloorOpen.on('click', function(e){
      e.preventDefault();
      var tg = $(this);
      var tgList = tg.closest('li');
      e.preventDefault();
      if($(window).outerWidth() < 1040){
        tgList.toggleClass('active');
        tgList.siblings().removeClass('active');
        if(tgList.hasClass('active')){
          tg.parent().siblings('.floor2').stop().slideDown(200);
          tgList.siblings().children('.floor2').stop().slideUp(200);
        }
        else{
          tgList.children('.floor2').stop().slideUp(200);
        }
      }
    });

    var navFloorOpen2 = $('.footer_list > .floor1 > li > a');
    
    navFloorOpen2.on('click', function(e){
      e.preventDefault();
      var tg = $(this);
      var tgList = tg.closest('li');
      e.preventDefault();
      if($(window).outerWidth() < 1040){
        tgList.toggleClass('active');
        tgList.siblings().removeClass('active');
        if(tgList.hasClass('active')){
          tg.siblings('.floor2').stop().slideDown(200);
          tgList.siblings().children('.floor2').stop().slideUp(200);
        }
        else{
          tgList.children('.floor2').stop().slideUp(200);
        }
      }
    });

    $(window).on('resize', function(){
      if($(window).outerWidth() > 1040){
        $('.am_list > .floor1 > li').removeClass('active');
        $('.am_list .floor2').show();
      }
      else{
        $('.am_list .floor2').hide();
      }
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

    var windowWidth = $(window).outerWidth();
    var swiper4 = undefined;

    function activeMainInfoSlide(){

      if(windowWidth > 768 && swiper4 == undefined){
        swiper4 = new Swiper('.main_info_slide_cont', {
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
      }
      else if(windowWidth <= 768 && swiper4 != undefined){
        swiper4.destroy();
        swiper4 = undefined;
      }
    }
    activeMainInfoSlide();

    $(window).on('resize', function(){
      windowWidth = $(window).outerWidth();
      activeMainInfoSlide();
      console.log(windowWidth);
    });

    
    const swiper5 = new Swiper('.main_introduce_top_slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
          crossFade: true
        },
      duration: 500,

  
      navigation: {
        nextEl: '.sbn3',
        prevEl: '.sbp3',
      },

    });

    const swiper6 = new Swiper('.main_introduce_bot_slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      duration: 500,

    });

    swiper5.controller.control = swiper6;
    swiper6.controller.control = swiper5;
});

$(window).on('scroll', function(){

  if($(window).scrollTop() > 0){
    $('.go_up').addClass('active');
  }
  else{
    $('.go_up').removeClass('active');
  }

  var scrollBottom = $('body').height() - $(window).height() - $(window).scrollTop();
  var ftHeight = $('#footer').outerHeight();
  var ftPos = ftHeight + 30;
  // console.log(scrollBottom, ftHeight);

  function onScrollUp (){
    
    if($(window).outerWidth() < 1040){
      $('.go_up').css('bottom', 30 + 'px');
    }
    if($(window).outerWidth() > 1040 && scrollBottom < ftHeight){
      $('.go_up').addClass('pos_abs');
      $('.go_up').css('bottom', ftPos + 'px');
    }
    else{
      $('.go_up').removeClass('pos_abs');
      $('.go_up').css('bottom', 30 + 'px');
    }
  }

  onScrollUp();

});