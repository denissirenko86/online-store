;(function($) {
    // Init ion range slider
    $("#price-range").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$",
        hide_min_max: true
    });

    // Init jQuery form styler
    $('.select-styler, .input-file-styler').styler();

    // Slick carousel
    // $('.product-slider').slick({
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: false
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   });
})(jQuery);