// Shop Page JavaScript

// Category Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        // Filter products
        productCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    
    // Here you would typically send this to your backend
    console.log('Newsletter signup:', email);
    
    // Show success message
    const button = newsletterForm.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Subscribed!';
    button.style.background = '#45a29e';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        newsletterForm.reset();
    }, 2000);
});

// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom >= 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Add Coming Soon Tooltip
const comingSoonButtons = document.querySelectorAll('.add-to-cart[disabled]');

comingSoonButtons.forEach(button => {
    button.addEventListener('mouseover', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'Products will be available soon!';
        document.body.appendChild(tooltip);

        const rect = button.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;

        button.addEventListener('mouseout', () => {
            tooltip.remove();
        });
    });
});
