// Common JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    console.log('Recycler application loaded!');

    // Add active class to current nav item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.parentElement.classList.add('active');
        }
    });
});