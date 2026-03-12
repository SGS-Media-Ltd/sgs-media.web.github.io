// Mobile Menu Toggle functionality
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('main-header');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
    }
});

// Add shadow to header on scroll for better visibility
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});