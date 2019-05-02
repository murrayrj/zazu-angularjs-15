$(function () {
    'use strict';
    $('#slide-submenu').on('click', function () {
        $(this).closest('.list-group').fadeOut('slide', function () {
            $('.mini-submenu').fadeIn();
        });
        if (document.getElementsByClassName('produce').length > 3) {
            $(".produce:nth-child(4)").addClass("col-md-offset-3");
        }
    });
    $('.mini-submenu').on('click', function () {
        $(this).next('.list-group').toggle('slide');
        if (document.getElementsByClassName('produce').length > 3) {
            $(".produce:nth-child(4)").removeClass("col-md-offset-3");
        }
        $('.mini-submenu').hide();
    });
});