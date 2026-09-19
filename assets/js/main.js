jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Auto-expand sections with 'open' class */
    $('.accordion-toggle.open').each(function() {
        var content = this.nextElementSibling;
        $(this).addClass('active');
        $(content).addClass('open').show();
    });

});

/* Conference detail toggle */
function toggleConferenceDetail(btn) {
    var detail = btn.nextElementSibling;
    if (detail.classList.contains('open')) {
        detail.classList.remove('open');
        $(detail).slideUp(200);
    } else {
        detail.classList.add('open');
        $(detail).slideDown(200);
    }
}

/* Accordion toggle */
function toggleAccordion(header) {
    var content = header.nextElementSibling;
    var isOpen = header.classList.contains('active');

    if (isOpen) {
        header.classList.remove('active');
        content.classList.remove('open');
        $(content).slideUp(200);
    } else {
        header.classList.add('active');
        content.classList.add('open');
        $(content).slideDown(200);
    }
}

/* Back to top button */
$(function () {
    var $backToTop = $('#back-to-top');
    if (!$backToTop.length) return;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $backToTop.addClass('visible');
        } else {
            $backToTop.removeClass('visible');
        }
    });

    $backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});
