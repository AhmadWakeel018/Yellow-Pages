document.addEventListener('DOMContentLoaded', function () {
    const staticHeader = document.getElementById('staticHeader');
    const stickyHeader = document.getElementById('stickyHeader');
    const scrollThreshold = 200; // Adjust this value as needed
    
    var splide1 = new Splide('.slider-one', {
        type: 'loop',
        perPage: 3,
        gap: '20px',
        autoplay: true,
        interval: 3000
    });

    var splide2 = new Splide('.slider-two', {
        type: 'loop',
        perPage: 3,
        gap: '20px',
        autoplay: true,
        interval: 3000
    });
    splide1.mount();
    splide2.mount();
    // splide3.mount();




    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            staticHeader.style.visibility = 'hidden';
            stickyHeader.style.display = 'block';
        } else {
            staticHeader.style.visibility = 'visible';
            stickyHeader.style.display = 'none';
        }
    }

    window.addEventListener('scroll', handleScroll);

});



