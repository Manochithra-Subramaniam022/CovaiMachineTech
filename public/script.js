(function() {
// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const statNumbers = document.querySelectorAll('.stat-number');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Counter Animation for Statistics
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
};

// Intersection Observer for Statistics
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(number => {
                animateCounter(number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

// Observe the about stats section
const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// High-Visibility Eresus CNC Inspired Staggered Scroll Reveal Observer
const revealElements = document.querySelectorAll('.service-card, .machine-card, .industry-card, .portfolio-item, .feature-item, .customer-card, .about-text, .about-visual-box, .section-header');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = parent ? Array.from(parent.children) : [];
            const index = siblings.indexOf(entry.target);
            const delay = (index > -1 ? index : 0) * 120;
            
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, delay);
            
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(element => {
    element.classList.add('reveal-on-scroll');
    revealObserver.observe(element);
});

// Contact Form Handler
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success message
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
        }, 2000);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
});

// Images are smoothly loaded and revealed via CSS cards

// High-Visibility Eresus CNC Inspired Precision Tech Network & Blueprint HUD Animation
function createIndustrialEffect() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.55;
    `;
    
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse coordinates for interactive connection
    const mouse = { x: -1000, y: -1000, radius: 240 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    // Create precision CAD nodes (CMM measuring points)
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1.0,
            vy: (Math.random() - 0.5) * 1.0,
            radius: Math.random() * 3.5 + 2,
            color: i % 3 === 0 ? '#ff5722' : (i % 3 === 1 ? '#0ea5e9' : '#334155'),
            pulse: Math.random() * Math.PI
        });
    }
    
    let offset = 0;
    
    function drawTechNetwork() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 1. Draw Moving Precision CAD Grid & Crosshairs
        const gridSize = 80;
        offset = (offset + 0.3) % gridSize;
        
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.22)';
        
        for (let x = -gridSize + (offset % gridSize); x < canvas.width + gridSize; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        
        for (let y = -gridSize + (offset % gridSize); y < canvas.height + gridSize; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        
        // Draw CAD crosshairs (+) at grid intersections
        ctx.strokeStyle = 'rgba(255, 87, 34, 0.5)';
        ctx.lineWidth = 1.8;
        for (let x = -gridSize + (offset % gridSize); x < canvas.width + gridSize; x += gridSize) {
            for (let y = -gridSize + (offset % gridSize); y < canvas.height + gridSize; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x - 6, y);
                ctx.lineTo(x + 6, y);
                ctx.moveTo(x, y - 6);
                ctx.lineTo(x, y + 6);
                ctx.stroke();
            }
        }
        
        // 2. Animate and Draw Nodes & Constellation Lines
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += 0.05;
            
            if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
            if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
            
            // Connect nodes to other nodes
            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 170) {
                    ctx.beginPath();
                    ctx.strokeStyle = p.color === '#ff5722' ? `rgba(255, 87, 34, ${0.55 * (1 - dist / 170)})` : `rgba(14, 165, 233, ${0.45 * (1 - dist / 170)})`;
                    ctx.lineWidth = 1.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
            
            // Connect nodes to mouse cursor (interactive laser)
            let mdx = p.x - mouse.x;
            let mdy = p.y - mouse.y;
            let mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < mouse.radius) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 87, 34, ${0.8 * (1 - mdist / mouse.radius)})`;
                ctx.lineWidth = 2.2;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
            
            // Draw node circle & pulsing outer target reticle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius + 5 + Math.sin(p.pulse) * 2.5, 0, Math.PI * 2);
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1.2;
            ctx.stroke();
        }
        
        requestAnimationFrame(drawTechNetwork);
    }
    
    drawTechNetwork();
}

// Initialize industrial effect
// createIndustrialEffect();

// Add hover sound effect (optional - requires audio files)
function addHoverSound() {
    const interactiveElements = document.querySelectorAll('.btn, .service-card, .machine-card, .portfolio-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Add a subtle mechanical sound effect here if desired
            // For now, we'll just add a visual feedback
            element.style.transform = element.style.transform || 'scale(1)';
        });
    });
}

// Initialize hover effects
addHoverSound();

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event
const debouncedScroll = debounce(() => {
    // Scroll-based animations here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Guaranteed High-Visibility Hero Entrance Animation
const triggerHeroAnimation = () => {
    document.body.classList.add('loaded');
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-buttons, .hero-features');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px) scale(0.96)';
        element.style.transition = 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
        }, 150 + index * 150);
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', triggerHeroAnimation);
} else {
    triggerHeroAnimation();
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add print styles
window.addEventListener('beforeprint', () => {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-mode');
});

console.log('CovaiMachineTech website initialized successfully!');

})();