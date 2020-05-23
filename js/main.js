$(document).ready(function () {
    $('.post-wrapper').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.mail-form').on('submit', function () {
        var email = $('input[name="emailAddress"]').val();
        var message = $.trim($("#messageArea").val())
        var url = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alandsilva2001@gmail.com" + "&body=" + message;
        $(location).attr('href', url);
        // alert(message);
        return false;
    });

    $('.grid').colcade({
        columns: '.grid-col',
        items: '.grid-item'
    });

    $('.carousel').carousel({
        interval: 4000
      });
});