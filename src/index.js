document.addEventListener('DOMContentLoaded', function () {
    const staticHeader = document.getElementById('staticHeader');
    const stickyHeader = document.getElementById('stickyHeader');
    const splide1El = document.querySelector('.slider-one');
    const splide2El = document.querySelector('.slider-two');
    const splide3El = document.querySelector('.slider-three');
    const splide4El = document.querySelector('.slider-four');
    const scrollThreshold = 200; // Adjust this value as needed
    
    function initSplide(element, className, perPageProp) {
        if (element) {
            console.log(`Initializing ${className}`);
            try {
                new Splide(element, {
                    type: 'loop',
                    perPage: perPageProp,
                    gap: '20px',
                    autoplay: true,
                    pagination:false,
                    interval: 3000
                }).mount();
                console.log(`${className} initialized successfully`);
            } catch (error) {
                console.error(`Error initializing ${className}:`, error);
            }
        } else {
            console.warn(`Element with class ${className} not found`);
        }
    }

    initSplide(splide1El, '.slider-one',3);
    initSplide(splide2El, '.slider-two',3);
    initSplide(splide3El, '.slider-three',4);
    initSplide(splide4El, '.slider-four',4);

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



