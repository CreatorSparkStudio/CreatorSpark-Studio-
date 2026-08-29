/* ============================================
   CREATORSPARK STUDIO - PROJECTS DATA
   ============================================
   
   INSTRUCTIONS:
   1. Replace project data below with your actual projects
   2. Add thumbnail images to assets/projects/ folder
   3. Each project should have all required fields
   4. Status is optional (leave empty for no label)
   
   EDITABLE FIELDS:
   - title: Project name
   - category: Service type
   - description: Short project description
   - technologies: Array of tools/skills used
   - image: Path to project image (assets/projects/image.jpg)
   - link: URL to view project (optional)
   - status: "Concept Project" or leave empty
   
   ============================================ */

const projects = [
    {
        title: "Creator Portfolio Website",
        category: "Website",
        description: "A modern portfolio website for a popular Pakistani YouTuber with 50K+ subscribers. Features smooth animations, project showcase, and direct contact integration.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        image: "assets/projects/creator-portfolio.jpg",
        link: "https://example.com/project1",
        status: "Concept Project"
    },
    {
        title: "YouTube Thumbnail Campaign",
        category: "Thumbnails",
        description: "High-converting thumbnail design series for a tech channel. Each design tested for visual hierarchy, color psychology, and CTR optimization.",
        technologies: ["Design", "Figma", "YouTube Analytics"],
        image: "assets/projects/thumbnail-campaign.jpg",
        link: "https://example.com/project2",
        status: "Concept Project"
    },
    {
        title: "Startup Landing Page",
        category: "Landing Page",
        description: "Conversion-focused landing page for a Pakistani startup. Designed to capture leads with compelling copy, social proof, and strategic CTAs.",
        technologies: ["Web Design", "Conversion Optimization", "UX/UI"],
        image: "assets/projects/startup-landing.jpg",
        link: "https://example.com/project3",
        status: "Concept Project"
    },
    {
        title: "Restaurant Website",
        category: "Website",
        description: "Full-featured restaurant website with menu, reservation system, and location integration. Mobile-first design for local customers.",
        technologies: ["Web Development", "Responsive", "Backend Integration"],
        image: "assets/projects/restaurant-website.jpg",
        link: "https://example.com/project4",
        status: "Concept Project"
    },
    {
        title: "Personal Brand Website",
        category: "Website",
        description: "Elegant personal brand site for a professional coach. Showcases services, testimonials, and booking integration.",
        technologies: ["Web Design", "Portfolio", "CMS"],
        image: "assets/projects/personal-brand.jpg",
        link: "https://example.com/project5",
        status: "Concept Project"
    },
    {
        title: "YouTube Intro Animation",
        category: "Intro Videos",
        description: "Professional 5-second intro animation with logo reveal and motion graphics. Ready for YouTube channel branding.",
        technologies: ["Motion Graphics", "Animation", "After Effects"],
        image: "assets/projects/youtube-intro.jpg",
        link: "https://example.com/project6",
        status: "Concept Project"
    }
];

/* ============================================
   HOW TO ADD YOUR OWN PROJECTS
   ============================================
   
   1. Create an object with all fields:
   
   {
       title: "Project Name",
       category: "Website" | "Thumbnails" | "Intro Videos" | "Landing Page",
       description: "Brief description (1-2 sentences)",
       technologies: ["Tech1", "Tech2", "Tech3"],
       image: "assets/projects/image.jpg",
       link: "https://yourproject.com",
       status: "Concept Project" or ""
   }
   
   2. Add your image to the assets/projects/ folder
   3. Update the link to point to your actual project
   4. Remove "Concept Project" status when project is live
   5. Test that all links work correctly
   
   ============================================ */
