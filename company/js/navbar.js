window.isRetina = (function () {
    'use strict';
    var root = (typeof exports == 'undefined' ? window : exports);
    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";
    if (root.devicePixelRatio > 1) {
        return true;
    }
    if (root.matchMedia && root.matchMedia(mediaQuery).matches) {
        return true;
    }
    return false;
})();
var hideCollapseMenu = function () {
    'use strict';
    $('body > .navbar-collapse').css({
        'z-index': 1
    });
    $('html').removeClass('nav-visible');
    setTimeout(function () {
        $('body > .navbar-collapse').addClass('collapse');
        $('body > .colapsed-menu').removeClass('show-menu');
    }, 400);
};
window.uiKitHeader = window.uiKitHeader || {};
(function ($) {
    'use strict';
    $(function () {
        $('.no-fouc').removeClass('no-fouc');
        if ($('body').css('color') !== 'rgb(51, 51, 51)') {
            var l = document.createElement('link'); l.rel = 'stylesheet';
            l.href = "css/bootstrap.min.css";
            var h = document.head || document.getElementsByTagName("head")[0];
            h.parentNode.insertBefore(l, h);
        }
        var navCollapse = $('.header-10 .navbar-collapse').first().clone(true);
        navCollapse.attr('id', 'header-10');
        $('body').append(navCollapse);

        $('.header-10 .navbar-toggle').on('click', function () {
            if ($('html').hasClass('nav-visible')) {
                hideCollapseMenu();
            } else {
                $('.navbar-collapse#header-10').removeClass('collapse');
                setTimeout(function () {
                    $('html').addClass('nav-visible');
                }, 1);
                setTimeout(function () {
                    $('body > .navbar-collapse').css({
                        'z-index': 101
                    });
                }, 400);
            }
        });
    });
})(window.jQuery);