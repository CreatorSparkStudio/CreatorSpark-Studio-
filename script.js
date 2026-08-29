// Configuration
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

// WhatsApp Messages
const whatsappMessages = {
    thumbnail: "Hi! I'm interested in professional thumbnail design for my YouTube channel. Can you share your portfolio and pricing?",
    intro: "Hi! I'd like to get a professional intro video created for my channel. What's your process and turnaround time?",
    landing: "Hi! I need a high-converting landing page for my business. Can we discuss your design and development services?",
    website: "Hi! I'm looking to build a professional website for my business. Can you tell me more about your website development services?",
    general: "Hi CreatorSpark Studio! I'd like to learn more about your services and how you can help grow my digital presence."
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeThreeJS();
    setupEventListeners();
    renderFAQ();
    setupCounterAnimation();
    setupScrollAnimations();
});

// ==================== THREE.JS SETUP ====================
function initializeThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create objects
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x06b6d4,
        emissive: 0x06b6d4,
        shininess: 100,
        wireframe: false
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(-1, 0, 0);
    scene.add(sphere);

    const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0xa855f7,
        emissive: 0xa855f7,
        shininess: 100
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(2, 1.5, 0);
    scene.add(cube);

    const smallCubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const smallCube = new THREE.Mesh(smallCubeGeometry, cubeMaterial);
    smallCube.position.set(-2.5, -2, 0);
    scene.add(smallCube);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xff00ff, 0.5);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.002;

        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        cube.rotation.z += 0.001;

        smallCube.rotation.x += 0.002;
        smallCube.rotation.y += 0.002;

        renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // CTA Buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            openWhatsApp('general');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== WhatsApp Integration ====================
function openWhatsApp(messageType = 'general') {
    const message = whatsappMessages[messageType] || whatsappMessages.general;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${siteConfig.whatsappIntl}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// ==================== FAQ SECTION ====================
function renderFAQ() {
    const faqData = [
        {
            question: "What's your typical project timeline?",
            answer: "It depends on the project scope. Thumbnails usually take 1-2 days, intro videos 3-5 days, landing pages 1-2 weeks, and full websites 2-4 weeks. We'll give you a specific timeline when we discuss your project."
        },
        {
            question: "Do you offer unlimited revisions?",
            answer: "We include 2-3 rounds of revisions with most packages. Additional revisions are available at a small extra cost. We work closely with you to ensure you're completely satisfied with the final product."
        },
        {
            question: "What's your payment process?",
            answer: "We typically require 50% upfront to start the project and 50% on completion. For larger projects, we can discuss a payment plan. All payments are securely processed."
        },
        {
            question: "Can you work with my existing brand guidelines?",
            answer: "Absolutely! We love working with established brand guidelines. Just share your style guide, color palette, and any existing assets, and we'll make sure everything aligns perfectly."
        },
        {
            question: "Do you offer retainer packages?",
            answer: "Yes! We offer monthly retainer packages for ongoing design and development work. This is great if you need regular content, updates, or ongoing support."
        },
        {
            question: "What if I'm not happy with the final product?",
            answer: "Your satisfaction is our priority. We offer revisions until you're happy. If there's a fundamental mismatch, we'll work with you to make it right or discuss other options."
        }
    ];

    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = faqData.map((item, index) => `
        <div>
            <button class="accordion-button" data-index="${index}">
                <div class="flex justify-between items-center">
                    <span>${item.question}</span>
                    <span class="text-spark-purple ml-4">+</span>
                </div>
            </button>
            <div class="accordion-content" data-index="${index}">
                ${item.answer}
            </div>
        </div>
    `).join('');

    // Add accordion event listeners
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.dataset.index;
            const content = document.querySelector(`.accordion-content[data-index="${index}"]`);
            const isActive = content.classList.contains('active');

            // Close all
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.accordion-button').forEach(b => b.classList.remove('active'));

            // Open clicked
            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
            }
        });
    });
}

// ==================== COUNTER ANIMATION ====================
function setupCounterAnimation() {
    const counters = document.querySelectorAll('[data-target]');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '');
        }
    }, 30);
}

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.card, .review-card, .project-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
}

// ==================== MOBILE MENU (Optional) ====================
function setupMobileMenu() {
    // Add mobile menu functionality if needed
}

// ==================== PAGE LOAD EFFECTS ====================
window.addEventListener('load', function() {
    // Fade in page
    document.body.style.opacity = '1';
});

// ==================== SOCIAL LINKS ====================
function setupSocialLinks() {
    const socialLinks = {
        instagram: siteConfig.instagram,
        youtube: siteConfig.youtube,
        facebook: siteConfig.facebook,
        linkedin: siteConfig.linkedin
    };

    // Add event listeners to social buttons if they exist
    Object.keys(socialLinks).forEach(key => {
        const link = document.querySelector(`[data-social="${key}"]`);
        if (link) {
            link.href = socialLinks[key];
        }
    });
}

// ==================== ERROR HANDLING ====================
window.addEventListener('error', function(event) {
    console.error('Error:', event.error);
});

// ==================== PERFORMANCE MONITORING ====================
if (window.performance) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page loaded in ' + pageLoadTime + 'ms');
    });
}

// Initialize
setupSocialLinks();
