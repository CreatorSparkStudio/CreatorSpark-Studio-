const reviews = [
    {
        name: "Ahmed Hassan",
        role: "YouTuber | 500K Subscribers",
        text: "CreatorSpark Studio transformed my channel's visual identity. The thumbnails are professional, eye-catching, and definitely improved my CTR. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
        name: "Fatima Khan",
        role: "E-Commerce Store Owner",
        text: "They built us an amazing landing page that converted. The design is stunning and the team was super responsive to our feedback. Worth every penny!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
        name: "Ali Raza",
        role: "Tech Startup Founder",
        text: "Professional, creative, and delivered on time. The website they built perfectly captures our brand essence. They made the whole process smooth and enjoyable.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    },
    {
        name: "Zainab Malik",
        role: "Content Creator | Podcaster",
        text: "The intro videos are absolutely fire! Exactly what I envisioned but even better. The attention to detail is incredible. Best investment for my channel.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    },
    {
        name: "Hassan Ali",
        role: "Digital Marketing Agency",
        text: "We partner with CreatorSpark for all our design needs. Their team is talented, reliable, and always brings fresh ideas. Can't recommend them enough!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
        name: "Maria Santos",
        role: "Online Course Creator",
        text: "The landing page they designed helped me triple my course enrollment. The copy placement, visuals, and overall user experience is top-notch!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    }
];

// Render reviews
function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    
    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="flex items-start gap-4 mb-4">
                <img 
                    src="${review.image}" 
                    alt="${review.name}"
                    class="w-12 h-12 rounded-full object-cover"
                >
                <div>
                    <h4 class="font-bold">${review.name}</h4>
                    <p class="text-sm text-gray-400">${review.role}</p>
                </div>
            </div>
            <div class="stars mb-3">
                ${'★'.repeat(review.rating)}
            </div>
            <p class="text-gray-300 leading-relaxed">"${review.text}"</p>
        </div>
    `).join('');
}

// Render when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderReviews);
} else {
    renderReviews();
}
