$(document).ready(() => {

    $('.shoe-details').show();

    $('.more-details-button').on('click', event => {

    });

    $('.shoe-details li').on('click', event => {
        $(event.currentTarget).addClass('active');
        $(event.currentTarget).siblings().removeClass('active');
    });



    ///////////////////////////////////////////

    $('.login-button').on('click', () => {
        $('.login-form').slideToggle();
        $('.login-button').toggleClass('button-active');
    });

    $('.login-form').on('mouseleave', () => {
        $('.login-form').slideToggle();
        $('.login-button').toggleClass('button-active');
    });


    $('.product-photo').on('mouseenter', () => {
        $(this).addClass('photo-active');
    }).on('mouseleave', function () {
        $(this).removeClass('photo-active');
    });

    $('.menu-button').on('click', () => {
        $('.menu-button').toggleClass('button-active');
        $('.nav-menu').slideToggle();
    });

    $('.nav-menu').on('mouseleave', () => {
        $('.menu-button').toggleClass('button-active');
        $('.nav-menu').slideToggle();
    });

})