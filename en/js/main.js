$(function() {
    
    APP.anchorScroll();
    APP.hashScroll();
    window.onscroll = function(events) {
        APP.navbarScrolled(events);
    }

});