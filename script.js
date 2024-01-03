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

/*document.addEventListener('DOMContentLoaded', function () {
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
});*/

function calculateInsurance() {
    var coverageType = document.getElementById("coverageType").value;
    var vehicleValue = parseFloat(document.getElementById("vehicleValue").value);
    var duration = parseInt(document.getElementById("duration").value);

    if (isNaN(vehicleValue) || isNaN(duration)) {
        alert("Please enter valid numbers for Vehicle Value and Policy Duration.");
        return;
    }

    var basePrice;

    switch (coverageType) {
        case "basic":
            basePrice = 100;
            break;
        case "standard":
            basePrice = 200;
            break;
        case "premium":
            basePrice = 300;
            break;
        default:
            alert("Invalid coverage type selected.");
            return;
    }

    var estimatedPrice = basePrice * (vehicleValue / 1000) * duration;

    document.getElementById("result").innerText = estimatedPrice.toFixed(2);
}


function checkScreenWidth() {
    var menuIcon = document.querySelector('.menu-icon');
    var nav = document.querySelector('nav ul');

    if (window.innerWidth <= 600) {
        menuIcon.style.display = 'block';
        nav.style.display = 'none';
    } else {
        menuIcon.style.display = 'none';
        nav.style.display = 'flex';
    }
}

// Initial check on page load
checkScreenWidth();

// Check and update on window resize
window.addEventListener('resize', checkScreenWidth);

function toggleMenu() {
    var nav = document.getElementById('main-nav');
    nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', toggleMenu);

    // Close the menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
            nav.classList.remove('open');
        }
    });
});


document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling when clicking on the "Afla mai mult" link
    document.getElementById('aflaMaiMultLink').addEventListener('click', function (e) {
        e.preventDefault();

        document.getElementById('insurances').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.toggle-heading').forEach(function (element) {
        element.addEventListener('click', function () {
            // Toggle the 'wrap' class on the next sibling div
            const contentDiv = this.nextElementSibling;
            contentDiv.classList.toggle('wrap');

            // Toggle the 'arrow-up' class on the arrow span
            const arrow = this.querySelector('.toggle-arrow');
            arrow.classList.toggle('arrow-up');
        });
    });
});
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    var arrow = content.previousElementSibling.querySelector('.toggle-arrow');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrow.classList.remove('rotate');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.classList.add('rotate');
    }
}
