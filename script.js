document.addEventListener('DOMContentLoaded', function () {
    const testimonialsContainer = document.querySelector('.testimonials');
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonialBlocks = document.querySelectorAll('.testimonial-block');
    const testimonialsPerPage = 1; // Display one testimonial at a time

    let currentIndex = 0;
    let intervalId;

    function updateTestimonials() {
        testimonialBlocks.forEach((block, index) => {
            const position = (index - currentIndex + testimonialBlocks.length) % testimonialBlocks.length;
            block.style.display = position < testimonialsPerPage ? 'block' : 'none';
        });
    }

    function moveTestimonials(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % testimonialBlocks.length;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + testimonialBlocks.length) % testimonialBlocks.length;
        }

        updateTestimonials();
    }

    function autoMoveTestimonials() {
        moveTestimonials('next');
    }

    // Set interval for automatic movement
    intervalId = setInterval(autoMoveTestimonials, 6000);

    // Button event listeners
    document.querySelector('.next-button').addEventListener('click', function () {
        moveTestimonials('next');
    });

    document.querySelector('.prev-button').addEventListener('click', function () {
        moveTestimonials('prev');
    });

    // Clear interval on mouseover and restart on mouseout
    testimonialsContainer.addEventListener('mouseover', function () {
        clearInterval(intervalId);
    });

    testimonialsContainer.addEventListener('mouseout', function () {
        intervalId = setInterval(autoMoveTestimonials, 6000);
    });

    updateTestimonials(); // Initial update
});

document.addEventListener('DOMContentLoaded', function () {
    const logoCarousel = document.querySelector('.logo-carousel');
    const logoWidth = document.querySelector('.logo-container').offsetWidth;
    const logosCount = document.querySelectorAll('.logo-container').length;

    let currentIndex = 0;

    function updateCarousel() {
        logoCarousel.style.transition = 'transform 1s ease-in-out';
        logoCarousel.style.transform = `translateX(${-currentIndex * logoWidth}px)`;
    }

    function moveCarousel() {
        currentIndex++;

        // Check if it's time to loop back to the start
        if (currentIndex >= logosCount) {
            // Move instantly to the right side without animation
            logoCarousel.style.transition = 'none';
            currentIndex = 0;
            updateCarousel();

            // Reset the transition for the next movements
            setTimeout(() => {
                logoCarousel.style.transition = 'transform 1s ease-in-out';
            }, 0);
        } else {
            updateCarousel();
        }
    }

    setInterval(moveCarousel, 5000); // Move every 5 seconds

    // Ensure the updateCarousel function is called initially
    updateCarousel();
});



