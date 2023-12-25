// script.js

let currentTestimonial = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-block');
    testimonials[currentTestimonial].classList.remove('testimonial-active');
    currentTestimonial = (index + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add('testimonial-active');
}

function nextTestimonial() {
    showTestimonial(currentTestimonial + 1);
}

function prevTestimonial() {
    showTestimonial(currentTestimonial - 1);
}

// Auto-advance testimonials every 5 seconds
setInterval(nextTestimonial, 5000);
