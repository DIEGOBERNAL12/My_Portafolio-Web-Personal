// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    easing: 'ease-in-out'
});

// Slick Slider para Skills
$(document).ready(function() {
    $('.slider-skills').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Slick Slider para Proyectos
$('.slider-proyectos').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 600,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
            }
        }
    ]
});