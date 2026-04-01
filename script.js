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

// --- Store Carousel Logic ---
const productCarousel = document.getElementById('product-carousel');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

if (productCarousel && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        // Calculate the width of one card + the 20px CSS gap
        const cardWidth = productCarousel.querySelector('.product-card').offsetWidth + 20; 
        productCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const cardWidth = productCarousel.querySelector('.product-card').offsetWidth + 20;
        productCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
}