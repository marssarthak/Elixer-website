document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel_section_ncs');
    M.carousel_section_ncs.init(elems, {
        padding: 200,
    });
});

function moveNextCarousel() {
    var elems = document.querySelector('#carousel_id_ncs');
    var moveRight = M.carousel_section_ncs.getInstance(elems);
    moveRight.next(1);
}

function movePrevCarousel() {
    var elems = document.querySelector('#carousel_id_ncs');
    var moveLeft = M.carousel_section_ncs.getInstance(elems);
    moveLeft.prev(1);
}