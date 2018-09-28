$(function () {

    APP.anchorScroll();
    APP.hashScroll();
    window.onscroll = function (events) {
        APP.navbarScrolled(events);
    }

    $('.qq-link').on('click', function(e) {
        e.preventDefault();
        if($(window).width <= 575) {
            $('.qr-block').toggleClass('qr-block--active');
        }
    })
    $(document).mouseup(function (e) {
        var div = $('.qq-link');
        if (!div.is(e.target)
                && div.has(e.target).length === 0) {
            div.removeClass('qr-block--active');
        }
    });

});

$(function () {
    // $('#submit').on('click', e => {
    //  e.preventDefault();
    //  $('.hidden__text').slideDown(300);
    //  $('#submit').addClass('btn-disabled');
    // })
    $('#submit').on('click', sumbitNewsSubscriber);
});

$(function () {
    $('#submit_news_footer').on('click', sumbitNewsSubscriber);
});

function sumbitNewsSubscriber(e) {
    e.preventDefault();

    try{
        var form = $(e.target).closest('.form');
        var email_elem = form.find('.email_news_subscriber');

        var errorMessageElement = form.find('.news-subscribe-error-message');
        errorMessageElement.hide();

        var msg = 'Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.';
        form.find('.submit_news').addClass('btn-disabled');
        var sendInfo = { email: email_elem.val() };
        $.ajax({
            type: "POST",
            url: "/news_subscribers",
            data: sendInfo,
            dataType: 'json',
            success: function(){
                email_elem.val('');
                errorMessageElement.html(msg);
                errorMessageElement.slideDown(300);
            },
            error: function (jqXHR, exception) {
                console.log('----------------error-------------------------');
                msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else if (jqXHR.status == 400) {
                    msg = jqXHR.responseJSON.errors;
                    if (jqXHR.responseJSON && jqXHR.responseJSON.error) {
                        msg = jqXHR.responseJSON.error;
                    } else {
                        msg = 'Unknown Error!';
                    }
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                console.log(msg);
                form.find('.submit_news').removeClass('btn-disabled');
                errorMessageElement.html(msg);
                errorMessageElement.slideDown(300);
            }
        });
    } catch (e) {
        console.log(e);
    }
};