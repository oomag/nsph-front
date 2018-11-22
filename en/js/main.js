//function getCookie(name) {
//    var matches = document.cookie.match(new RegExp(
//            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//    ));
//    return matches ? decodeURIComponent(matches[1]) : undefined;
//}
//
//function setCookie(name, value, options) {
//    options = options || {};
//
//    var expires = options.expires;
//
//    if (typeof expires == "number" && expires) {
//        var d = new Date();
//        d.setTime(d.getTime() + expires * 1000);
//        expires = options.expires = d;
//    }
//    if (expires && expires.toUTCString) {
//        options.expires = expires.toUTCString();
//    }
//
//    value = encodeURIComponent(value);
//
//    var updatedCookie = name + "=" + value;
//
//    for (var propName in options) {
//        updatedCookie += "; " + propName;
//        var propValue = options[propName];
//        if (propValue !== true) {
//            updatedCookie += "=" + propValue;
//        }
//    }
//
//    document.cookie = updatedCookie;
//}
//
//function deleteCookie(name) {
//    setCookie(name, "", {
//        expires: -1
//    })
//}

$(function () {

    APP.anchorScroll();
    APP.hashScroll();
    window.onscroll = function (events) {
        APP.navbarScrolled(events);
    }

});

$(function () {
    $('.qq-link').on('click', function (e) {
        e.preventDefault();
        let qrLink = $(e.currentTarget);
        qrLink.toggleClass('qq-link--active');
    })
    $(document).on('click', function (e) {
        var div = $('.qq-link');
        if (!div.is(e.target)
                && div.has(e.target).length === 0) {
            div.removeClass('qq-link--active');
        }
    });
});

$(function() {
    $('.team__link').click(function (e) {
        e.preventDefault();
        let text = $(this).text();
        $($(this).attr('href')).slideToggle(200);
        $(this).text(text == 'more' ? 'hide' : 'more');
        return false;
    });
})

//$(function() {
//
//    let coockie = getCookie('coockie');
//
//    if(coockie == undefined) {
//        setTimeout(() => {
//            $('.coockie').addClass('coockie--active');
//        }, 1000);
//    }
//
//    $('.btn-coockie').on('click', e => {
//        e.preventDefault();
//        let date = new Date(new Date().getTime() + 60 * 1000);
//        setCookie('coockie', '1', {expires:date.toUTCString()});
//        $('.coockie').removeClass('coockie--active');
//    })
//})

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

    try {
        var form = $(e.target).closest('.form');
        var email_elem = form.find('.email_news_subscriber');

        var errorMessageElement = form.find('.news-subscribe-error-message');
        errorMessageElement.hide();

        var msg = 'Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.';
        form.find('.submit_news').addClass('btn-disabled');
        var sendInfo = {email: email_elem.val()};
        $.ajax({
            type: "POST",
            url: "/news_subscribers",
            data: sendInfo,
            dataType: 'json',
            success: function () {
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