// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimeline() {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight * 0.8 && itemBottom >= 0) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkTimeline);
window.addEventListener('load', checkTimeline);

// Mission Stats Counter Animation
const statNumbers = document.querySelectorAll('.stat-number');

function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const count = parseInt(stat.innerText);
        const increment = target / 200; // Adjust speed here

        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.innerText = target;
        }
    });
}

// Trigger stats animation when section is in view
const statsSection = document.querySelector('.mission-stats-section');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsSection && statObserver.observe(statsSection);

// Next Launch Countdown Timer
const launchDate = new Date('December 25, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = launchDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');

    // Update every second
    setTimeout(updateCountdown, 1000);
}

updateCountdown();
