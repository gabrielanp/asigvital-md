document.addEventListener('DOMContentLoaded', function () {
    const testimonialsContainer = document.querySelector('.testimonials');
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonialBlocks = document.querySelectorAll('.testimonial-block');
    const testimonialsPerPage = 1; // Display one testimonial at a time

    let currentIndex = 0;

    function updateTestimonials() {
        testimonialBlocks.forEach((block, index) => {
            const position = (index - currentIndex + testimonialBlocks.length) % testimonialBlocks.length;
            block.style.display = position < testimonialsPerPage ? 'inline-block' : 'none';
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
    const intervalId = setInterval(autoMoveTestimonials, 6000);

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
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.href.split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
