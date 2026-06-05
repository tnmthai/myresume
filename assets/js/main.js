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

});

/* Accordion toggle */
function toggleAccordion(header) {
    var content = header.nextElementSibling;
    var isOpen = header.classList.contains('active');

    if (isOpen) {
        header.classList.remove('active');
        content.classList.remove('open');
        content.style.display = 'none';
    } else {
        header.classList.add('active');
        content.classList.add('open');
        content.style.display = 'block';
    }
}
