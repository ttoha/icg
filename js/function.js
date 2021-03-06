$( document ).ready(function() {

    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<div data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"><span></span></div>',
        nextArrow: '<div data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><span></span></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows:false
                }
            },{
                breakpoint: 768,
                settings: {
                    arrows:false
                }
            },{
                breakpoint: 480,
                settings: {
                    arrows:false
                }
            }
        ]
    });
    $('.reviews').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<div data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"><span></span></div>',
        nextArrow: '<div data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><span></span></div>'
    });

    $('.partners-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"><span></span></div>',
        nextArrow: '<div data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><span></span></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.main-table-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"><span></span></div>',
        nextArrow: '<div data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><span></span></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.mobile-menu').on('click', function(){
       $('#cssmenu').toggleClass('open');
    });
    $('.menu__inner li').on('click', function(){
        $(this).toggleClass('openli');
    });

    var stickyOffset = $('header').offset().top;

    $(window).scroll(function(){
      var sticky = $('header'),
          scroll = $(window).scrollTop();

      if (scroll >= stickyOffset) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

    $('.search-bt__ul').on('click', function(){
        $('.header-line').addClass('serarch_open');
    });
    $('.search__btn-close').on('click', function(){
        $('.header-line').removeClass('serarch_open');
    })
});
