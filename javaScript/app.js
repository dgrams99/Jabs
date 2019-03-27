$(function() {
    //caches a jQuery object containing the header element
    var header = $(".pic-size");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('pic-size').addClass("pic-size-small");
        } else {
            header.removeClass("pic-size-small").addClass('pic-size');
        }
    });
  
        var $window = $(window),
            pic = $('.pic-size');
    
        function resize() {
            var scroll = $(window).scrollTop();
            if ($window.width() < 960 ) {
                return pic.addClass('mobile-pic').removeClass('pic-size')
            }
            if( $window.width() < 960 && scroll >= 200){
                return pic.addClass('mobile-pic-with-scroll');
            }else{
                pic.removeClass('mobile-pic');
            }   
        }
    
        $window
            .resize(resize)
            .trigger('resize');
  
});
$( document ).ready(function() {
    const show = $('.show-less')

    $('.show-down').click(function(){
        $('.show-less').removeClass('show-less').addClass('temp')
        $('.show-down').addClass('display-no')
        $('.show-up').removeClass('display-no')
        console.log('click')
    });
    $('.show-up').click(function(){
        $('.temp').addClass('show-less').removeClass('temp')
        $('.show-down').removeClass('display-no')
        $('.show-up').addClass('display-no')
        console.log('click')
    });

    
});