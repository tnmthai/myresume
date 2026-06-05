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
