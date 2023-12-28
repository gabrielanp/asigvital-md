// common.js

document.addEventListener('DOMContentLoaded', function () {
    // Determine the active page and add the 'active' class to the corresponding link
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().split('.')[0];
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
