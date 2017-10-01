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
});
