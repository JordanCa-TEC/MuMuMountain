///*Rajuste de pantalla - menu hamburguesa
  document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.header__nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
  
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('is-active');
      mobileNav.classList.toggle('mobile-nav--visible');
    });
  });

///*Rotación del destello
document.addEventListener('DOMContentLoaded', () => {
    const destello = document.getElementById('destello');
    let angle = 0;
  
    const rotate = () => {
      angle = (angle + 0.05) % 360;
      destello.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(rotate);
    };
  
    rotate();
  });

///* scroll de cosas saludables
document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector(".healthy");
    const title = section.querySelector(".healthy__title");
    const description = section.querySelector(".healthy__description");
    const link = section.querySelector(".healthy__link");
    const photo = section.querySelector(".healthy__foto");

    const setInitialStyles = () => {
        title.style.opacity = 0;
        title.style.transform = "translateX(-100%)";
        description.style.opacity = 0;
        description.style.transform = "translateX(-100%)";
        link.style.opacity = 0;
        link.style.transform = "translateX(-100%)";
        photo.style.opacity = 0;
        photo.style.transform = "translateX(100%)";
    };

    const animateElements = () => {
        // Animar el título
        title.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
        title.style.transform = "translateX(0)";
        title.style.opacity = 1;

        // Animar la descripción
        setTimeout(() => {
            description.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
            description.style.transform = "translateX(0)";
            description.style.opacity = 1;
        }, 200); // Demora de 200ms

        // Animar el enlace
        setTimeout(() => {
            link.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
            link.style.transform = "translateX(0)";
            link.style.opacity = 1;
        }, 400); // Demora de 400ms

        // Animar la imagen
        setTimeout(() => {
            photo.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
            photo.style.transform = "translateX(0)";
            photo.style.opacity = 1;
        }, 600); // Demora de 600ms
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElements();
            } else {
                setInitialStyles();
            }
        });
    }, {
        threshold: 0.1
    });

    setInitialStyles();
    observer.observe(section);
});


///* scroll de productos (solo Fresa)
document.addEventListener("DOMContentLoaded", function() {
    // Apply animation class to elements
    document.getElementById("product__image").classList.add("animate-left");
    document.getElementById("title-01").classList.add("animate-right");
    document.getElementById("title-02").classList.add("animate-right");
    document.getElementById("description").classList.add("animate-right");
    document.getElementById("fruto").classList.add("animate-right");
});



///* Animación de compromiso
document.addEventListener("DOMContentLoaded", function() {
    // Apply animation class to elements
    document.getElementById("image-nutrition").classList.add("animate-left");
    document.getElementById("logo-mumu").classList.add("animate-right");
    document.getElementById("description-1").classList.add("animate-right");
    document.getElementById("description-2").classList.add("animate-right");
    document.getElementById("image-jugos").classList.add("animate-right");
});

// Add animation classes to style the elements
var style = document.createElement('style');
style.innerHTML = `
    .animate-left {
        position: relative;
        animation: slide-in-left 1s forwards;
    }

    .animate-right {
        position: relative;
        animation: slide-in-right 1s forwards;
    }

    @keyframes slide-in-left {
        from {
            left: -100%;
            opacity: 0;
        }
        to {
            left: 0;
            opacity: 1;
        }
    }

    @keyframes slide-in-right {
        from {
            right: -100%;
            opacity: 0;
        }
        to {
            right: 0;
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);



///*Animación carrucel
const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const carousel = document.querySelector('.carousel');
        const sections = document.querySelectorAll('.intro.product');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -100 * currentIndex;
            carousel.style.transform = `translateX(${offset}%)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < sections.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = sections.length - 1;
            }
            updateCarousel();
        });

        // Initial display
        updateCarousel();
