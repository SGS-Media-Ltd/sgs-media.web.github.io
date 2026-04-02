// Mobile Menu Toggle functionality
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('main-header');

if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Closes mobile menu automatically when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });
}

// Adds shadow to header on scroll
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

// --- Contact Form to Make.com Webhook ---
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        // Prevent the default form submission (which refreshes the page)
        e.preventDefault(); 

        // 1. Grab the values from the form
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        const submitBtn = document.getElementById('contact-btn');

        // 2. Package the data into a JSON object
        const payload = {
            name: name,
            email: email,
            message: message,
            source: "SGS Media Website",
            timestamp: new Date().toISOString()
        };

        // 3. Provide user feedback (Change button text)
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        try {
            // 4. Send the JSON to your Make.com Webhook
            // REPLACE THE URL BELOW WITH YOUR ACTUAL MAKE.COM WEBHOOK URL
            const response = await fetch('https://hook.eu2.make.com/4866ydilujpu1ovg52agtq8xkw96x4o7', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            // 5. Handle the result
            if (response.ok) {
                formStatus.innerText = "Message sent successfully! We will get back to you soon.";
                formStatus.style.color = "var(--accent-green)";
                formStatus.style.display = "block";
                contactForm.reset(); // Clear the form
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error:', error);
            formStatus.innerText = "Something went wrong. Please try again or email us directly.";
            formStatus.style.color = "red";
            formStatus.style.display = "block";
        } finally {
            // Restore button
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
            
            // Hide the status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = "none";
            }, 5000);
        }
    });
}