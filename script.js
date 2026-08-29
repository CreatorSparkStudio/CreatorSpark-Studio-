/* ============================================
   CREATORSPARK STUDIO - MAIN JAVASCRIPT
   ============================================ */

// ============================================
// SITE CONFIGURATION
// ============================================

const siteConfig = {
    businessName: 'CreatorSpark Studio',
    email: 'creatorsparkstudio99@gmail.com',
    whatsapp: '923460286244',
    whatsappIntl: '+923460286244',
    instagram: 'https://instagram.com/creatorspark',
    youtube: 'https://youtube.com/@creatorspark',
    facebook: 'https://facebook.com/creatorspark',
    linkedin: 'https://linkedin.com/company/creatorspark'
};

// ============================================
// WHATSAPP INTEGRATION
// ============================================

const whatsappMessages = {
    thumbnail: "Hi CreatorSpark Studio! I am interested in your thumbnail design service. I would like to discuss my project.",
    intro: "Hi CreatorSpark Studio! I am interested in an intro video for my channel/business. I would like to discuss the details.",
    landing: "Hi CreatorSpark Studio! I am interested in getting a professional landing page. I would like to discuss my requirements and budget.",
    website: "Hi CreatorSpark Studio! I am interested in getting a professional website. I would like to discuss my requirements and budget.",
    permanent: "Hi CreatorSpark Studio! I'm interested in becoming a permanent client. Tell me more about the benefits and how to get started.",
    quote: "Hi CreatorSpark Studio! I have custom requirements for my project. Can we discuss pricing and timeline?",
    final: "Hi CreatorSpark Studio! I'd like to discuss a new project with you. Let's talk!",
    review: "Hi CreatorSpark Studio! I'd like to submit a review about my experience."
};

function createWhatsAppLink(messageKey) {
    const message = whatsappMessages[messageKey] || whatsappMessages.final;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;
}

function openWhatsApp(messageKey) {
    const link = createWhatsAppLink(messageKey);
    window.open(link, '_blank');
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
        
        // Close menu when a link is clicked
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            });
        });
    }
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollY = 0;
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    lastScrollY = window.scrollY;
    
    if (lastScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

function updateScrollProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.animation = entry.target.dataset.animation || 'slide-up 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animation], .scroll-fade');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// THREE.JS 3D SCENE
// ============================================

function initThreeJS() {
    const canvas = document.getElementById('canvas-3d');
    if (!canvas) return;
    
    // Check WebGL support
    if (!window.THREE) {
        console.warn('Three.js not loaded');
        return;
    }
    
    try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setClearColor(0x0a0e27, 0);
        renderer.shadowMap.enabled = true;
        
        camera.position.z = 5;
        
        // Create floating boxes (design elements)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0x7c3aed,
            metalness: 0.4,
            roughness: 0.1,
            emissive: 0x5a2aa8
        });
        
        const boxes = [];
        for (let i = 0; i < 5; i++) {
            const box = new THREE.Mesh(geometry, material);
            box.position.set(
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 5
            );
            box.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );
            box.scale.set(
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.5 + 0.3
            );
            box.castShadow = true;
            box.receiveShadow = true;
            scene.add(box);
            boxes.push(box);
        }
        
        // Add center sphere
        const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const sphereMaterial = new THREE.MeshStandardMaterial({
            color: 0x06b6d4,
            metalness: 0.6,
            roughness: 0.2,
            emissive: 0x04a1c5
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.castShadow = true;
        sphere.receiveShadow = true;
        scene.add(sphere);
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0x7c3aed, 1, 100);
        pointLight.position.set(5, 5, 5);
        pointLight.castShadow = true;
        scene.add(pointLight);
        
        const pointLight2 = new THREE.PointLight(0x06b6d4, 0.8, 100);
        pointLight2.position.set(-5, -5, 5);
        pointLight2.castShadow = true;
        scene.add(pointLight2);
        
        // Mouse tracking
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });
        
        // Animation loop
        let frame = 0;
        function animate() {
            requestAnimationFrame(animate);
            frame++;
            
            // Rotate boxes
            boxes.forEach((box, index) => {
                box.rotation.x += 0.005 + index * 0.001;
                box.rotation.y += 0.008 + index * 0.001;
                box.position.y += Math.sin(frame * 0.01 + index) * 0.01;
            });
            
            // Rotate sphere
            sphere.rotation.x += 0.002;
            sphere.rotation.y += 0.003;
            
            // Camera movement based on mouse
            camera.position.x = mouseX * 2;
            camera.position.y = mouseY * 2;
            camera.lookAt(scene.position);
            
            renderer.render(scene, camera);
        }
        
        animate();
    } catch (error) {
        console.warn('Three.js initialization error:', error);
        // Fallback - just show a gradient
        canvas.style.background = 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(6, 182, 212, 0.2))';
    }
}

// Initialize Three.js when DOM is ready
document.addEventListener('DOMContentLoaded', initThreeJS);

// ============================================
// PROJECTS SECTION
// ============================================

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    if (typeof projects === 'undefined') {
        console.warn('Projects data not loaded');
        return;
    }
    
    container.innerHTML = projects.map((project, index) => `
        <div class="project-card group p-6 sm:p-8 rounded-2xl border border-spark-purple/20 bg-spark-charcoal/40 backdrop-blur hover:border-spark-cyan/40 hover:bg-spark-charcoal/60 transition-all duration-300 cursor-pointer overflow-hidden scroll-fade" style="animation-delay: ${index * 0.1}s">
            <div class="absolute inset-0 bg-gradient-to-br from-spark-purple/10 via-transparent to-spark-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10">
                <div class="mb-4 aspect-video bg-spark-charcoal rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div class="w-full h-full bg-gradient-to-br from-spark-purple/30 to-spark-cyan/30 flex items-center justify-center">
                        <i class="fas fa-image text-3xl text-spark-purple/50"></i>
                    </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-3">
                    <span class="text-xs bg-spark-purple/20 text-spark-purple px-3 py-1 rounded-full">${project.category}</span>
                    ${project.status ? `<span class="text-xs bg-spark-cyan/20 text-spark-cyan px-3 py-1 rounded-full">${project.status}</span>` : ''}
                </div>
                <h3 class="text-lg sm:text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.technologies.map(tech => `<span class="text-xs bg-spark-charcoal px-2 py-1 rounded">${tech}</span>`).join('')}
                </div>
                ${project.link ? `<a href="${project.link}" target="_blank" class="inline-block px-4 py-2 bg-spark-purple hover:bg-spark-violet text-white font-bold rounded-lg transition transform hover:scale-105">View Project →</a>` : ''}
            </div>
        </div>
    `).join('');
}

// ============================================
// REVIEWS SECTION
// ============================================

function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    
    if (typeof reviews === 'undefined') {
        console.warn('Reviews data not loaded');
        return;
    }
    
    container.innerHTML = reviews.map((review, index) => `
        <div class="review-card p-6 sm:p-8 rounded-2xl border border-spark-purple/20 bg-spark-charcoal/40 backdrop-blur hover:border-spark-cyan/40 transition-all duration-300 scroll-fade" style="animation-delay: ${index * 0.1}s">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-spark-purple to-spark-cyan flex items-center justify-center text-white font-bold">
                        ${review.name.charAt(0)}
                    </div>
                    <div>
                        <h4 class="font-bold text-base">${review.name}</h4>
                        <p class="text-gray-400 text-xs sm:text-sm">${review.role}</p>
                    </div>
                </div>
            </div>
            <div class="flex gap-1 mb-4">
                ${Array(review.rating).fill('⭐').join('')}
                ${Array(5 - review.rating).fill('☆').join('')}
            </div>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">"${review.text}"</p>
        </div>
    `).join('');
}

// ============================================
// FAQ ACCORDION
// ============================================

function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        if (button) {
            button.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(i => i.classList.remove('active'));
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// REVIEW FORM SUBMISSION
// ============================================

function setupReviewForm() {
    const reviewForm = document.getElementById('review-form');
    if (!reviewForm) return;
    
    reviewForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('review-name').value;
        const role = document.getElementById('review-role').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const text = document.getElementById('review-text').value;
        
        // Create WhatsApp message
        const message = `New Review Submission:\n\nName: ${name}\nRole/Business: ${role}\nRating: ${rating}/5\n\nReview: ${text}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;
        
        // Show confirmation and open WhatsApp
        const confirmed = confirm('Your review will be sent via WhatsApp for verification. Proceed?');
        if (confirmed) {
            window.open(whatsappLink, '_blank');
            reviewForm.reset();
            alert('Thank you for your review! We\'ll verify it and add it to our website soon.');
        }
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('[data-target]');
    
    const observerCounter = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current) + '+';
                    }
                }, 16);
                
                observerCounter.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observerCounter.observe(counter));
}

// ============================================
// INITIALIZE ALL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderReviews();
    setupFAQ();
    setupReviewForm();
    animateCounters();
    
    // Add animation delay to all scroll-fade elements
    const scrollFadeElements = document.querySelectorAll('.scroll-fade');
    scrollFadeElements.forEach((el, index) => {
        if (!el.style.animationDelay) {
            el.style.animationDelay = `${index * 0.1}s`;
        }
    });
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log('Page loaded in ' + loadTime + 'ms');
        }, 0);
    });
}

// ============================================
// SERVICE CARDS INTERACTION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
        });
    });
});

// ============================================
// ACCESSIBILITY - REDUCED MOTION
// ============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c✨ CreatorSpark Studio', 'color: #7c3aed; font-size: 24px; font-weight: bold;');
console.log('%cBuilding digital experiences that make brands stand out.', 'color: #06b6d4; font-size: 14px;');
console.log('%cWhatsApp: +923460286244 | Email: creatorsparkstudio99@gmail.com', 'color: #a855f7; font-size: 12px;');
