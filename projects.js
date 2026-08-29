const projects = [
    {
        title: "Tech Startup Landing Page",
        category: "Website",
        description: "High-converting landing page for a SaaS startup",
        technologies: ["React", "Tailwind", "Animation"],
        image: "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&q=80",
        link: "#",
        status: ""
    },
    {
        title: "YouTube Channel Branding",
        category: "Thumbnails",
        description: "Complete thumbnail design package with consistent branding",
        technologies: ["Design", "Branding"],
        image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&q=80",
        link: "#",
        status: ""
    },
    {
        title: "E-Commerce Website",
        category: "Website",
        description: "Full-featured e-commerce platform with payment integration",
        technologies: ["Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
        link: "#",
        status: ""
    },
    {
        title: "Cinematic Intro Video",
        category: "Video",
        description: "Professional intro video with 3D animation and effects",
        technologies: ["After Effects", "3D", "Animation"],
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
        link: "#",
        status: ""
    },
    {
        title: "Corporate Website Redesign",
        category: "Website",
        description: "Modern corporate website with updated branding and UI",
        technologies: ["Vue.js", "GSAP", "WebGL"],
        image: "https://images.unsplash.com/photo-1499941354192-b716a3b13e8d?w=600&q=80",
        link: "#",
        status: ""
    },
    {
        title: "Podcast Cover Design",
        category: "Design",
        description: "Custom podcast artwork and thumbnail designs",
        technologies: ["Design", "Branding"],
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
        link: "#",
        status: ""
    }
];

// Render projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map(project => `
        <div class="card glass rounded-2xl overflow-hidden cursor-pointer group">
            <div class="relative overflow-hidden h-64">
                <img 
                    src="${project.image}" 
                    alt="${project.title}"
                    class="project-image w-full h-full"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-spark-dark to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
                        <p class="text-gray-300 text-sm mb-4">${project.description}</p>
                        <div class="flex gap-2 flex-wrap">
                            ${project.technologies.map(tech => 
                                `<span class="text-xs bg-spark-purple/30 text-spark-purple px-2 py-1 rounded">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="text-lg font-bold">${project.title}</h3>
                        <p class="text-spark-cyan text-sm mt-1">${project.category}</p>
                    </div>
                    ${project.status ? `<span class="text-xs bg-spark-purple/20 text-spark-purple px-3 py-1 rounded-full">${project.status}</span>` : ''}
                </div>
                <p class="text-gray-400 text-sm mb-4">${project.description}</p>
                <div class="flex gap-2 flex-wrap">
                    ${project.technologies.map(tech => 
                        `<span class="text-xs bg-spark-purple/20 text-spark-purple px-2 py-1 rounded">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}
