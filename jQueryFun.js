$(document).ready(() => {

    $('.logo').hover(
        () => {
            $('.logo').css("background-color", "aqua");
            $('nav').css("background-color", "aqua");
        }, () => {
            $('.logo').css("background-color", "#303030");
            $('nav').css("background-color", "#303030");
        }
    );

    $('.login-button').on('click', () => {
        $('.login-form').slideToggle();
        $('.login-button').toggleClass('button-active');
    });

    $('.login-form').on('mouseleave', () => {
        $('.login-form').slideToggle();
        $('.login-button').toggleClass('button-active');
    });

    $('.menu-button').on('click', () => {
        $('.menu-button').toggleClass('button-active');
        $('.nav-menu').slideToggle();
    });

    $('.nav-menu').on('mouseleave', () => {
        $('.menu-button').toggleClass('button-active');
        $('.nav-menu').slideToggle();
    });

    $('.product-details').on('click', event => {
        $(event.currentTarget).next().slideToggle();
    });

    $('.shoe-details li').on('click', event => {
        $(event.currentTarget).addClass('active');
        $(event.currentTarget).siblings().removeClass('active');
        $(event.currentTarget).parent().parent().next().removeClass('disabled');
    });

    $('.product-photo').on('mouseenter', event => {
        $(event.currentTarget).addClass('photo-active');
    }).on('mouseleave', function () {
        $(event.currentTarget).removeClass('photo-active');
    });

    $('.product-photo').on('click', event => {
        $(event.currentTarget).animate({
            opacity: 0.25
        }, 1000, () => {
            $(event.currentTarget).animate({
                opacity: 1
            }, 1000);
        });
    });

    $('.lower-logo').hover(
        () => {
            $('.lower-logo').css("background-color", "aqua");
            $('footer').css("background-color", "aqua");
        }, () => {
            $('.lower-logo').css("background-color", "#303030");
            $('footer').css("background-color", "#303030");
        }
    );

})