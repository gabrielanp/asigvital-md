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
// script.js
document.addEventListener('DOMContentLoaded', function () {
    function setupHamburgerMenu() {
        var nav = document.getElementById('main-nav');
        var menuIcon = document.querySelector('.menu-icon');

        function toggleMenu() {
            nav.classList.toggle('open');
        }

        // Add the 'open' class by default
        nav.classList.add('open');

        menuIcon.addEventListener('click', toggleMenu);

        // Close the menu when clicking outside of it
        document.addEventListener('click', function (e) {
            if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
                nav.classList.remove('open');
            }
        });
    }

    function highlightActiveLink() {
        // Determine the active page and add the 'active' class to the corresponding link
        const currentPage = window.location.pathname.split('/').pop().split('.')[0];
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop().split('.')[0];

            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Call both setup functions
    setupHamburgerMenu();
    highlightActiveLink();

    // You can include other page-specific scripts here
});
