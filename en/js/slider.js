if ($(window).width() < 576) {

    var mySwiper = new Swiper('.eco__slider', {
        speed: 400,
        spaceBetween: 100,
        // width: 260,
        // centeredSlides: true,
        navigation: {
            nextEl: '.swiper__button--next',
            prevEl: '.swiper__button--prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }
    });

}

$(function () {
    var mySwiper = new Swiper('.advantages__slider', {
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: '.adv__pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})