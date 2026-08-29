# CreatorSpark Studio Website - Quick Start Guide ⚡

Get your website up and running in 15 minutes!

## ✅ 5-Minute Setup

### Step 1: Download Files
Download all 6 files from this folder:
- ✅ index.html
- ✅ style.css
- ✅ script.js
- ✅ projects.js
- ✅ reviews.js
- ✅ README.md

### Step 2: Create Folder Structure
Create this folder in the same directory as the files:
```
assets/
  └── projects/
```

### Step 3: Open in Browser
Double-click `index.html` to open in your browser.

**Done!** Your website is now running locally. ✨

---

## 🎨 15-Minute Customization

### 1. Update Your Contact Info (2 minutes)

**Edit: `script.js`** (lines 20-28)

Find this:
```javascript
const siteConfig = {
    businessName: 'CreatorSpark Studio',
    email: 'creatorsparkstudio99@gmail.com',
    whatsapp: '923460286244',
```

Change to your info:
```javascript
const siteConfig = {
    businessName: 'YOUR BUSINESS NAME',
    email: 'your.email@example.com',
    whatsapp: '923XXXXXXXXX',  // Remove country code if needed
```

Save file. Refresh browser. Done! ✅

### 2. Update Pricing (3 minutes)

**Edit: `index.html`** (search for "PRICING SECTION")

Find "1 Thumbnail" and "PKR 300" - replace with your prices:
```html
<span class="text-spark-purple font-bold">PKR 300</span>
```

Change to:
```html
<span class="text-spark-purple font-bold">PKR 500</span>
```

Do the same for all services. Save. Refresh. ✅

### 3. Add Your Projects (5 minutes)

**Edit: `projects.js`**

Replace the sample projects with your real work:

```javascript
const projects = [
    {
        title: "YOUR PROJECT NAME",
        category: "Website",  // or "Thumbnails", "Intro Videos", "Landing Page"
        description: "What did you build? Keep it 1-2 sentences.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "assets/projects/my-project.jpg",  // Add image file
        link: "https://your-project-link.com",
        status: ""  // Leave empty once live, or "Concept Project"
    },
    // Add more projects...
];
```

Save. The projects will auto-update on the website! ✅

### 4. Add Social Links (3 minutes)

**Edit: `script.js`** (lines 22-27)

```javascript
instagram: 'https://instagram.com/your-handle',
youtube: 'https://youtube.com/@your-channel',
facebook: 'https://facebook.com/your-page',
linkedin: 'https://linkedin.com/company/your-company'
```

Update each link. Save. ✅

### 5. Update Statistics (2 minutes)

**Edit: `index.html`** (search for "Trust Strip")

```html
<div class="text-3xl sm:text-4xl font-black..." data-target="50">50+</div>
```

Change `50` to your actual number of projects. ✅

---

## 🖼️ How to Add Project Images

1. Take screenshot of your project (or create mockup)
2. Resize to 600x400px
3. Save to: `assets/projects/project-name.jpg`
4. Reference in projects.js:
   ```javascript
   image: "assets/projects/project-name.jpg"
   ```

**Pro tip:** Use TinyPNG.com to compress images before upload.

---

## 🚀 Test Before Going Live

### Checklist (5 minutes)

- [ ] All navigation links work (click menu items)
- [ ] WhatsApp buttons open (click "Order Thumbnail" → WhatsApp)
- [ ] Email link works (click email in footer)
- [ ] Projects display correctly
- [ ] No images have broken links
- [ ] Mobile looks good (resize browser to 375px width)
- [ ] No errors in console (Press F12, check Console tab)

---

## 📱 Test on Mobile

### Option 1: Chrome DevTools (Fastest)
1. Press F12 (or Ctrl+Shift+I)
2. Click device icon (top-left of DevTools)
3. Select different phone sizes
4. Test all features

### Option 2: Real Device
1. Find your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac)
2. On phone, go to: `http://YOUR_IP:8000`
3. Test on your phone

---

## 🌍 Deploy to GitHub Pages (10 minutes)

### Step 1: Create GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2: Create Repository
1. Click "New repository"
2. Name: `creatorspark-studio`
3. Make it Public
4. Click "Create repository"

### Step 3: Upload Files
1. Click "Upload files"
2. Drag all your files (including assets folder)
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to Settings
2. Scroll to Pages
3. Under Source, select "Deploy from a branch"
4. Select: main branch, / (root) folder
5. Click Save

### Your website is LIVE! 🎉

Your site will be at: `https://YOUR_USERNAME.github.io/creatorspark-studio`

---

## 🔥 Common Changes Cheat Sheet

| What to change | Where | How |
|---|---|---|
| Business name | script.js line 21 | siteConfig.businessName |
| Email | script.js line 22 | siteConfig.email |
| WhatsApp | script.js line 23 | siteConfig.whatsapp |
| Pricing | index.html | Search "PRICING SECTION" |
| Projects | projects.js | Edit projects array |
| Reviews | reviews.js | Edit reviews array |
| Colors | style.css | Search color codes |
| Social links | script.js lines 25-28 | Update URLs |
| Statistics | index.html | Search "data-target" |
| FAQ text | index.html | Search "FAQ SECTION" |

---

## ⚠️ Common Mistakes (Avoid These!)

❌ **WRONG:**
```javascript
image: "/assets/projects/image.jpg"  // Absolute path won't work
image: "C://projects/image.jpg"      // Windows path won't work
```

✅ **RIGHT:**
```javascript
image: "assets/projects/image.jpg"   // Relative path works everywhere
```

---

## 💡 Pro Tips

### Tip 1: Use Live Server
Download VS Code + Live Server extension = auto-refresh every time you save.

### Tip 2: Test Locally First
Always test in browser before deploying to GitHub Pages.

### Tip 3: Keep Backups
Store your files in cloud storage (Google Drive, Dropbox) too.

### Tip 4: Track Changes
Use Git to save versions:
```bash
git add .
git commit -m "Update prices and projects"
git push
```

### Tip 5: Optimize Images
Use TinyPNG.com or Compressor.io to reduce image file sizes.

---

## 🐛 Troubleshooting

**Website won't open?**
→ Make sure index.html is in the root directory

**Images not showing?**
→ Check file is in `assets/projects/` folder
→ Check filename in projects.js matches exactly

**WhatsApp not working?**
→ Try on mobile device
→ Check phone number format

**3D animation not showing?**
→ It's OK! It's a nice-to-have, not required
→ Website still works perfectly without it

**Styling looks wrong?**
→ Clear browser cache: Ctrl+Shift+Delete
→ Try different browser

---

## 📞 Need Help?

1. **Check README.md** - Full documentation
2. **Check FOLDER_STRUCTURE.md** - File organization
3. **Check browser console** - F12 → Console tab for errors
4. **Search your file** - Find exact section and look at code
5. **Test incrementally** - Change one thing at a time

---

## 🎯 Next Steps

1. ✅ **Download all 6 files**
2. ✅ **Create assets/projects/ folder**
3. ✅ **Update script.js with your info** (contact, social media)
4. ✅ **Update projects.js with your projects**
5. ✅ **Add project images to assets/projects/**
6. ✅ **Update pricing in index.html**
7. ✅ **Test locally in browser**
8. ✅ **Upload to GitHub Pages**
9. ✅ **Share with clients!**

---

## 🎉 You're Done!

Your professional CreatorSpark website is ready. Welcome to the big leagues! 🚀

**Questions?** Check README.md or FOLDER_STRUCTURE.md for detailed help.

---

**Built with ⚡ for creators. Enjoy!**
