$(document).ready(function(){

    $('#nav').on('mouseenter focusin', function(){
        $(this).addClass('active');
        $('.megamenu_bg').stop().slideDown(300);
        $('ul.floor2').stop().slideDown(300);
    });

    $('#nav').on('mouseleave focusout', function(){
        $(this).removeClass('active');
        $('.megamenu_bg').stop().slideUp(300);
        $('ul.floor2').stop().slideUp(300);
    });

});