var APP = {

    anchorScroll: () => {
        $('.anchor').click(function (e) {
            e.preventDefault();

            let hash = $(this).attr("data-hash");
            let corrector = -120;

            $("html, body").animate({
                scrollTop: $('#' + hash).offset().top + corrector
            }, 1000);

            return false;

        });
    },

    hashScroll: () => {

        let hash = location.hash;
        let corrector = -120;

        if (hash != '') {


            $("html, body").animate({
                scrollTop: $(hash).offset().top + corrector
            }, 1000);

            return false;
        }

    },

    submitedText: (strings) => {
        var i = 0;

        function recurse(index) {

            var interval = setInterval(function () {

                if (index == 0) {
                    if (i >= 3 && i <= 19) {
                        document.getElementById('submited-text').innerHTML += '<span class="mark">' + strings[index][i] + '</span>';
                    } else {
                        document.getElementById('submited-text').innerHTML += strings[index][i];
                    }
                } else if (index == 1) {
                    if (i >= 14 && i <= 27) {
                        document.getElementById('submited-text').innerHTML += '<span class="mark">' + strings[index][i] + '</span>';
                    } else {
                        document.getElementById('submited-text').innerHTML += strings[index][i];
                    }
                }

                i++;

                if (i >= strings[index].length) {

                    window.clearInterval(interval)
                    i = 0;

                    index = index == 1 ? 0 : 1;

                    setTimeout(function () {
                        document.getElementById('submited-text').innerHTML = '';
                        recurse(index);
                    }, 3000)
                }

            }, 20);
        }

        recurse(0);

    },

    navbarScrolled: (events) => {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop

        if (scrolled > 0) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }

        console.log(scrolled);
    }



}