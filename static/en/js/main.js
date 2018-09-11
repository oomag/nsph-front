$(function () {

    APP.anchorScroll();
    APP.hashScroll();
    window.onscroll = function (events) {
        APP.navbarScrolled(events);
    }

});

$(function () {
    $('#submit').on('click', e => {
        e.preventDefault();
        $('.hidden__text').slideDown(300);
        $(this).addClass('btn-disabled');
    })
})