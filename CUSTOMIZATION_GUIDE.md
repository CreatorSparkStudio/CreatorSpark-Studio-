# CreatorSpark Studio - Complete Customization Guide

## 📋 Table of Contents
1. [Business Information](#business-information)
2. [Pricing](#pricing)
3. [Projects](#projects)
4. [Reviews](#reviews)
5. [Colors & Styling](#colors--styling)
6. [Text Content](#text-content)
7. [Social Media Links](#social-media-links)
8. [Advanced Customization](#advanced-customization)

---

## Business Information

### Where to Edit: `script.js` (Lines 20-50)

#### Business Name & Branding
```javascript
const siteConfig = {
    businessName: 'CreatorSpark Studio',  // ← Change this
    email: 'creatorsparkstudio99@gmail.com',
    whatsapp: '923460286244',
    // ...
};
```

**Also change in:**
- `index.html` - Logo area (top navigation)
- `index.html` - Footer (bottom of page)

#### Contact Information
```javascript
email: 'your-email@yourcompany.com',      // Email for inquiries
whatsapp: '923XXXXXXXXX',                 // Phone without +
whatsappIntl: '+923XXXXXXXXX',            // Phone with country code
```

#### Social Media Links
```javascript
instagram: 'https://instagram.com/yourusername',
youtube: 'https://youtube.com/@yourchannel',
facebook: 'https://facebook.com/yourpage',
linkedin: 'https://linkedin.com/company/yourcompany'
```

### WhatsApp Messages

Each service button has a custom pre-filled message. Edit in `script.js` (Lines 35-47):

```javascript
const whatsappMessages = {
    thumbnail: "Hi CreatorSpark! I want thumbnails...",  // ← Customize
    intro: "Hi CreatorSpark! I want intro videos...",
    landing: "Hi CreatorSpark! I want a landing page...",
    website: "Hi CreatorSpark! I want a website...",
    permanent: "Hi CreatorSpark! Tell me about permanent clients...",
    quote: "Hi CreatorSpark! I have custom requirements...",
    final: "Hi CreatorSpark! I want to discuss a project...",
    review: "Hi CreatorSpark! I want to submit a review..."
};
```

---

## Pricing

### Where to Edit: `index.html` (Pricing Section)

Search for "PRICING SECTION" in index.html.

#### Thumbnail Pricing
```html
<span class="text-spark-purple font-bold">PKR 300</span>  <!-- Single -->
<span class="text-spark-cyan font-black">PKR 1,000</span> <!-- Bundle -->
```

Change these numbers to your actual prices.

#### Intro Video Pricing
```html
<span class="text-spark-purple font-bold">PKR 500</span>  <!-- Single -->
<span class="text-spark-cyan font-black">PKR 1,500</span> <!-- Bundle -->
```

#### Landing Page Pricing
```html
<div class="text-spark-purple font-bold mt-2">PKR 3,000 – 8,000+</div>
```

Show range for flexible pricing.

#### Website Pricing
```html
<div class="text-spark-purple font-bold mt-2">PKR 5,000 – 20,000+</div>
```

### Adding Custom Pricing Tiers

To add a new pricing tier:
1. Copy an existing pricing card
2. Change the title, prices, and technologies
3. Update the WhatsApp message

Example:
```html
<!-- NEW SERVICE -->
<div class="pricing-card ...">
    <h3 class="text-lg font-bold mb-6">SOCIAL MEDIA GRAPHICS</h3>
    <div class="space-y-4">
        <div class="flex justify-between items-center py-3 ...">
            <span class="text-gray-300">5 Graphics</span>
            <span class="text-spark-purple font-bold">PKR 1,500</span>
        </div>
    </div>
</div>
```

---

## Projects

### Where to Edit: `projects.js`

This is where ALL your projects live. Very easy to edit!

### Add a New Project

```javascript
const projects = [
    // Existing projects...
    
    // YOUR NEW PROJECT
    {
        title: "YouTube Channel Redesign",
        category: "Website",  // "Website", "Thumbnails", "Intro Videos", "Landing Page"
        description: "Complete redesign of a tech channel's branding and website.",
        technologies: ["Web Design", "Branding", "YouTube"],
        image: "assets/projects/youtube-redesign.jpg",  // Create this image file
        link: "https://example.com/youtube-redesign",
        status: ""  // Leave empty once live, or "Concept Project"
    }
];
```

### Field Descriptions

| Field | Example | Description |
|-------|---------|-------------|
| title | "My Project" | Project name (shows as heading) |
| category | "Website" | Type: Website, Thumbnails, Intro Videos, or Landing Page |
| description | "Built a site for..." | 1-2 sentences about the project |
| technologies | ["HTML", "CSS"] | Tools/skills used (array) |
| image | "assets/projects/..." | Path to project image file |
| link | "https://example.com" | URL to view the live project |
| status | "Concept Project" | Leave empty for published, or "Concept Project" |

### Project Image Requirements

1. **Size:** 600x400px (or any 3:2 aspect ratio)
2. **Format:** JPG or PNG
3. **File size:** < 150KB (use TinyPNG to compress)
4. **Location:** `assets/projects/`
5. **Naming:** lowercase with hyphens (my-project.jpg)

### How to Create Project Images

**Option A: Screenshot**
1. Take screenshot of website
2. Resize to 600x400px in image editor
3. Save as JPG
4. Compress with TinyPNG.com

**Option B: Figma Mockup**
1. Design in Figma
2. Export as PNG (600x400px)
3. Convert to JPG
4. Compress

**Option C: Concept Art**
1. Create abstract representation
2. Use design tools
3. Save as JPG
4. Size and compress

### Remove a Project

Simply delete the entire project object:

```javascript
// BEFORE
{
    title: "Old Project",
    category: "Website",
    // ... rest of fields
},  // ← DELETE THIS COMMA AND ENTIRE BLOCK

// AFTER - just remove it
```

### Limit Number of Projects Shown

By default, all projects are shown. To show only 3 projects:

In `script.js`, find `renderProjects()` function and modify:

```javascript
function renderProjects() {
    const container = document.getElementById('projects-container');
    const limitedProjects = projects.slice(0, 3);  // Show only first 3
    
    container.innerHTML = limitedProjects.map((project, index) => {
        // ... rest of code
    }).join('');
}
```

---

## Reviews

### Where to Edit: `reviews.js`

Similar structure to projects!

### Add a Client Review

```javascript
const reviews = [
    // Existing reviews...
    
    // YOUR NEW REVIEW
    {
        name: "Ahmed Hassan",
        role: "YouTuber (50K subscribers)",
        text: "CreatorSpark created amazing thumbnails that boosted my CTR by 40%!",
        rating: 5,
        image: ""  // Optional: path to profile image
    }
];
```

### Fields Explained

| Field | Example | Note |
|-------|---------|------|
| name | "Client Name" | Full name of client |
| role | "YouTuber (50K)" | Their channel/business |
| text | "Great work..." | 1-3 sentence review |
| rating | 5 | Stars: 3, 4, or 5 only |
| image | "" | Optional, leave empty for now |

### Star Rating Display

**5 stars:**
```
⭐⭐⭐⭐⭐
```

**4 stars:**
```
⭐⭐⭐⭐
```

**3 stars:**
```
⭐⭐⭐
```

Only use 5, 4, or 3. Don't use 1 or 2.

### Getting Real Reviews

**Template Message to Send Clients:**

> "Hi [Name]! We loved working with you on [Project]. Could you share a quick review of your experience with CreatorSpark Studio? It really helps us grow. Here's what to include:
> - Your name & business/channel
> - 1-3 sentences about your experience
> - 5, 4, or 3 stars rating
> 
> Send via WhatsApp: +923460286244"

### Anonymous Reviews

If client wants to stay private:
```javascript
{
    name: "Happy Client",
    role: "Digital Business Owner",
    text: "Professional work, great communication, will hire again!",
    rating: 5,
    image: ""
}
```

---

## Colors & Styling

### Primary Color Scheme

Edit `index.html` (in `<head>` section):

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'spark-dark': '#0a0e27',      // Background (very dark blue)
                'spark-charcoal': '#1a1f3a',  // Card backgrounds
                'spark-purple': '#7c3aed',    // Primary color
                'spark-violet': '#a855f7',    // Secondary color
                'spark-cyan': '#06b6d4',      // Accent color
            },
        }
    }
}
```

### Change Primary Color

To make everything purple instead of purple:

1. Replace all `'spark-purple': '#7c3aed'` with your color
2. Use hex color codes from color picker

Example - Make it orange:
```javascript
'spark-purple': '#ff8c00',  // Orange
```

The site will automatically update!

### Change Background Color

```javascript
'spark-dark': '#1a1a2e',  // Lighter dark background
```

### Change Accent Color

```javascript
'spark-cyan': '#00d4ff',  // Brighter cyan
```

### Font Selection

Current font: Inter (from Google Fonts)

To change to different font:

1. Visit fonts.google.com
2. Select font (e.g., "Poppins")
3. Copy the import code
4. Paste in index.html `<head>` section

---

## Text Content

### Main Sections (Edit in index.html)

#### Hero Section Headline
Search for "MAKE YOUR DIGITAL PRESENCE IMPOSSIBLE TO IGNORE":

```html
<h1>MAKE YOUR DIGITAL PRESENCE<span>IMPOSSIBLE TO IGNORE</span></h1>
```

Change to:
```html
<h1>YOUR CUSTOM HEADLINE<span>WITH YOUR MESSAGE</span></h1>
```

#### Hero Section Description
```html
<p>CreatorSpark Studio helps creators, businesses and personal brands...</p>
```

#### About Section (Why Choose)
Search for "WHY CHOOSE CREATORSPARK" and edit the benefit cards.

#### Services Section
Edit the service descriptions in the service cards.

#### Process Section
Edit the 4-step process titles and descriptions.

#### FAQ Section
Edit questions and answers in the accordion items.

---

## Social Media Links

### Where to Edit: `script.js`

```javascript
instagram: 'https://instagram.com/creatorspark',  // ← Add your handle
youtube: 'https://youtube.com/@creatorspark',     // ← Add your channel
facebook: 'https://facebook.com/creatorspark',    // ← Add your page
linkedin: 'https://linkedin.com/company/...',     // ← Add your company
```

### Also in Footer

Edit `index.html` (Footer section):

```html
<a href="https://instagram.com/creatorspark" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

Change the URL to your actual social media profile.

### How to Get Social URLs

**Instagram:**
- Your profile URL: `https://instagram.com/yourusername`

**YouTube:**
- Channel URL: `https://youtube.com/@yourchannel`

**Facebook:**
- Page URL: `https://facebook.com/yourpage`

**LinkedIn:**
- Company URL: `https://linkedin.com/company/yourcompany`

---

## Advanced Customization

### 1. Add More Service Cards

Copy this in index.html services section:

```html
<div class="service-card ...">
    <div class="w-12 h-12 bg-spark-purple/20 ...">
        <i class="fas fa-icon-name ..."></i>
    </div>
    <h3 class="text-xl font-bold mb-3">SERVICE NAME</h3>
    <p class="text-gray-400 ...">Service description...</p>
    <button onclick="openWhatsApp('custom')">Order Now →</button>
</div>
```

Then add to whatsappMessages in script.js:
```javascript
custom: "Hi CreatorSpark! I'm interested in..."
```

### 2. Add New Sections

Add before `</body>`:

```html
<section id="newsection" class="py-16 sm:py-24 relative border-t border-spark-purple/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-5xl font-black mb-4">NEW SECTION</h2>
        <!-- Your content here -->
    </div>
</section>
```

### 3. Modify Navigation Links

Edit navbar links in index.html:

```html
<a href="#newsection" class="nav-link ...">New Link</a>
```

Section ID must match (e.g., `id="newsection"`).

### 4. Add Animations

Add to elements:

```html
<div class="scroll-fade" data-animation="slide-up ...">Content</div>
```

Available animations: slide-up, fade-in, scale-in, rotate-in

### 5. Custom Fonts

1. Go to fonts.google.com
2. Select font
3. Copy import: `<link href="..." rel="stylesheet">`
4. Paste in index.html `<head>`
5. Update fontFamily in tailwind config:
   ```javascript
   fontFamily: {
       'sans': ['YourFont', 'system-ui'],
   }
   ```

### 6. Custom Favicon

1. Create favicon.ico (16x16 or 32x32px)
2. Save to root folder
3. Add to index.html `<head>`:
   ```html
   <link rel="icon" href="favicon.ico">
   ```

### 7. Custom Logo

1. Replace "CreatorSpark Studio" text in navbar
2. Add logo image:
   ```html
   <img src="assets/logo.png" alt="Logo" class="h-8">
   ```
3. Style with CSS

### 8. Add Google Analytics

Add to index.html before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

Replace `GA_TRACKING_ID` with your Google Analytics ID.

---

## Common Customization Recipes

### Recipe 1: Change from Dark to Light Theme

1. Edit colors in tailwind config:
   - `spark-dark`: `#ffffff` (white)
   - `spark-charcoal`: `#f5f5f5` (light gray)
   - `spark-purple`: `#6366f1` (indigo)

2. Change text colors:
   - Search `text-white` → change to `text-gray-900`

### Recipe 2: Add Newsletter Signup

Add to index.html before footer:

```html
<section class="py-16 bg-spark-charcoal/40">
    <div class="max-w-2xl mx-auto px-4 text-center">
        <h2>Subscribe for Updates</h2>
        <form onsubmit="handleNewsletter(event)">
            <input type="email" placeholder="Your email..." required>
            <button type="submit">Subscribe</button>
        </form>
    </div>
</section>
```

### Recipe 3: Add Blog Link

1. Create `blog.html` (separate file)
2. Add nav link in index.html:
   ```html
   <a href="blog.html" class="nav-link ...">Blog</a>
   ```

### Recipe 4: Change Grid Layout

Service cards are 2 columns. To change to 3:

Find in index.html:
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
```

Change to:
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
```

---

## Testing After Customization

### Checklist

- [ ] All text updates are correct
- [ ] Pricing matches your rates
- [ ] WhatsApp links work
- [ ] Email links work
- [ ] Social links go to correct profiles
- [ ] Project images load
- [ ] No broken images
- [ ] Mobile layout is responsive
- [ ] Navigation links work
- [ ] No console errors (F12)

---

## Need More Help?

1. **Specific issue?** Check README.md
2. **File structure?** Check FOLDER_STRUCTURE.md
3. **Quick setup?** Check QUICK_START.md
4. **Still stuck?** Search for the error message in browser console

---

Happy customizing! 🎨✨
