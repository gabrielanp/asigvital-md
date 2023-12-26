document.addEventListener('DOMContentLoaded', function () {
    const testimonialsContainer = document.querySelector('.testimonials');
    const testimonialBlocks = document.querySelectorAll('.testimonial-block');
    const totalTestimonials = testimonialBlocks.length;
    const testimonialsPerPage = 3;

    let currentIndex = 0;

    function updateTestimonials() {
        testimonialBlocks.forEach((block, index) => {
            const position = (index - currentIndex + totalTestimonials) % totalTestimonials;
            block.style.display = position < testimonialsPerPage ? 'inline-block' : 'none';
        });
    }

    function moveTestimonials() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateTestimonials();
    
        // Check if we have reached the last testimonial, and reset to the first one
        if (currentIndex === totalTestimonials - testimonialsPerPage) {
            setTimeout(() => {
                currentIndex = 0;
                updateTestimonials();
            }, 500);
        }
    }

    setInterval(moveTestimonials, 5000);
    updateTestimonials(); // Initial update
});
