$(document).ready(function () {

    var header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* --------  Fixed Header     ---------  */
    checkScroll(scrollOffset)

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Burger

    $('.header__burger').on('click', function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    /* --------   Smooth scroll    ---------  */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('.nav-list li').removeClass('active');
        $this.addClass('active');

        if ($('.header__burger,.header__menu').hasClass('active')) {
            $('.header__burger,.header__menu').removeClass('active');
        } if ($('body').hasClass('lock')) {
            $('body').removeClass('lock')
        }

        $('html, body').animate({
            scrollTop: blockOffset
        }, 0)
    })

});