# Nitin Balaji — Premium Personal Portfolio

A stunning, award-quality portfolio website built with vanilla HTML5, CSS3, and JavaScript. No frameworks. No dependencies. Ready for GitHub Pages.

## 🚀 Quick Start

### View Locally
```bash
# Simply open the file in your browser
open index.html
```

Works via `file://` protocol — no server needed.

### Deploy to GitHub Pages
1. Create a GitHub repository named `<username>.github.io`
2. Push this folder to `main` branch
3. GitHub Pages automatically serves `index.html`
4. Your site is live at `https://<username>.github.io`

## 📁 Structure

```
/
├── index.html           (924 lines) Complete HTML5 document
├── styles.css           (1566 lines) All styling & responsive design
├── script.js            (380 lines) Interactive features
├── assets/
│   ├── images/          Drop your photos here
│   ├── icons/           Drop logos & favicon here
│   └── resume.pdf       Replace with your actual resume
└── BUILD_INFO.md        Detailed build documentation
```

## 🎨 Features

### Interactive
- Sticky floating navbar with active section underline
- Smooth scroll-reveal animations
- Gallery lightbox with keyboard navigation
- Animated stat counters
- Mobile hamburger menu
- Scroll progress bar
- Back-to-top button

### Responsive
- Desktop (1200px+)
- Tablet (768px–1024px)
- Mobile (< 768px)
- Small phone (< 480px)

### Accessible
- Semantic HTML5
- ARIA labels
- Keyboard navigation
- Alt text on all images
- Focus management
- Reduced-motion support

### Performance
- ~87KB total (HTML + CSS + JS)
- No external frameworks
- Optimized CSS with variables
- Vanilla JS with rAF throttling
- Lazy-loaded images

### Design
- Dark glassmorphism aesthetic
- Apple/Linear/Framer-inspired
- Smooth animations & transitions
- Professional typography (Space Grotesk + Inter)
- Modern color palette

## 📝 Content Sections

1. **Hero** — Name, subtitle, bio, 3 CTAs, portrait
2. **Highlights** — 4 summary cards
3. **About** — Bio + animated stats
4. **Experience** — 7 alternating feature blocks
5. **Leadership** — 4 cards emphasizing impact
6. **Projects** — Bento grid with varied cell sizes
7. **Certifications** — 5 credential cards
8. **Gallery** — 8-image masonry + lightbox
9. **Interests** — 5 visual cards
10. **Contact** — Centered card with links
11. **Footer** — Copyright & tagline

## 🖼️ Adding Images

All images use **standardized filenames** — just drop them in and they work:

### Hero & Portraits
- `hero-photo.jpg` → Hero section (right side)
- `about-photo.jpg` → About section (left)
- `contact-photo.jpg` → Contact card

### Experience (7 images)
- `experience-northrop.jpg`
- `experience-opencoding.jpg`
- `experience-coding4cause.jpg`
- `experience-physics-tutor.jpg`
- `experience-chem-tutoring-club.jpg`
- `experience-chem-tutor.jpg`
- `experience-coding4kidz.jpg`

### Projects (5 images)
- `project-college-assistant-bot.jpg`
- `project-assignment-management.jpg`
- `project-coding4cause.jpg`
- `project-portfolio.jpg`
- `project-future-research.jpg`

### Gallery (8 images)
- `gallery-01.jpg` (UC Berkeley)
- `gallery-02.jpg` (Northrop Grumman)
- `gallery-03.jpg` (Coding4Cause)
- `gallery-04.jpg` (Tutoring)
- `gallery-05.jpg` (Leadership Events)
- `gallery-06.jpg` (Cars)
- `gallery-07.jpg` (Photography)
- `gallery-08.jpg` (Travel)

### Interests (5 images)
- `interest-f1.jpg`
- `interest-cars.jpg`
- `interest-photography.jpg`
- `interest-sports.jpg`
- `interest-travel.jpg`

### Logos & Icons (SVG or PNG)
- `logo-northrop.svg`
- `logo-opencoding.svg`
- `logo-coding4cause.svg`
- `logo-coding4kidz.svg`
- `logo-chem-tutoring-club.svg`
- `cert-stanford.svg`
- `cert-udemy.svg`
- `cert-northrop.svg`
- `cert-rotary.svg`
- `favicon.svg`

**Drop images into `assets/images/` and logos into `assets/icons/`.** That's it. **Zero code changes needed.**

## 📄 Resume

Replace `assets/resume.pdf` with your actual resume. The same file is referenced in:
- Navigation bar (Resume button)
- Hero section (Resume CTA)
- Contact section (Resume link)

All three buttons use the same relative path — change the PDF once, all three update.

## 🔗 Update Links

Edit `index.html` to customize:

### Contact Links
Search for `nitinsandiego@gmail.com`, `github.com/nitinsandiego`, `linkedin.com/in/nitinbalaji` and replace with your info.

### Certification Credentials
The three real credential links are already wired:
- Stanford ML: `coursera.org/share/8c5f6e830a992693ae42a31b59497e6d`
- Udemy Python: `udemy.com/certificate/UC-edb33c4a-5d39-408a-928f-c36e2053dd65`
- Udemy Java: `udemy.com/certificate/UC-c9c24bae-b866-43d3-9f9d-3d926bf07ee0`

For other certifications without credential links, the buttons are already hidden — no changes needed.

## 🎨 Customization

### Colors
Edit `:root` in `styles.css`:
- `--color-accent: #6366f1` (indigo)
- `--color-bg-base: #0a0a0f` (near-black)
- Gradients for hero blobs

### Fonts
Currently **Space Grotesk** (display) + **Inter** (body) from Google Fonts. Both are defined in `<head>`. Swap the links to change.

### Copy
All text content is in `index.html`. Edit sections directly.

### Animations
Timings in `styles.css`:
- `--transition-fast: 150ms`
- `--transition-base: 300ms`
- `--transition-slow: 600ms`

## 🔍 Browser Support

✅ Chrome, Firefox, Safari, Edge (all modern versions)
✅ CSS Grid, Flexbox, CSS Variables, Backdrop-filter
❌ IE11 (intentional — this is a modern design)

## 📱 Testing

### Desktop
Open in your browser, click nav links, test lightbox.

### Mobile
Resize browser to 768px or smaller. Hamburger menu appears automatically.

### Keyboard
- `Tab` through all interactive elements
- `Enter`/`Space` to activate buttons
- `Escape` to close menus/lightbox
- Arrow keys to navigate lightbox images

### Reduced Motion
In macOS Settings > Accessibility > Display > Reduce motion, enable it. Animations should disable gracefully.

## ⚡ Performance

- ~48KB HTML
- ~30KB CSS (all in one file)
- ~10KB JavaScript (all in one file)
- **No external CDN requests** (fonts preload, images lazy-load)
- Optimized for fast first paint

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Create repo: `https://github.com/<username>/<username>.github.io`
2. `git clone` it locally
3. Copy `index.html`, `styles.css`, `script.js`, `assets/` into the repo
4. `git add .` → `git commit` → `git push`
5. Live at `https://<username>.github.io`

### Vercel
- Import the GitHub repo
- Deploy instantly (no configuration needed)

### Netlify
- Drag & drop the folder
- Deploy instantly

### Custom Domain
Point your DNS to GitHub Pages / Vercel / Netlify. Instructions in their docs.

## 💡 Tips

- **Update content without losing design:** All copy is in `index.html`, all styling in `styles.css`. Edit freely.
- **Change logo colors:** Edit experience/leadership/cert `.logo` items to reference different SVG colors.
- **Add new sections:** Copy an existing section's HTML + CSS pattern, add to nav.
- **Adjust spacing:** Edit `--space-*` variables in `:root` for consistent rhythm changes.

## 📚 Code Quality

- ✅ No inline styles or event handlers
- ✅ Semantic HTML5
- ✅ CSS custom properties (no magic numbers)
- ✅ Vanilla JS (no dependencies)
- ✅ Full keyboard navigation
- ✅ ARIA accessibility labels

## 🏗️ How It Works

### JavaScript Modules (10 total)
1. **Page Fade In** — Smooth load transition
2. **Navbar** — Sticky, shrinks on scroll, active link underline
3. **Mobile Menu** — Hamburger button + dropdown
4. **Smooth Scroll** — In-page nav link behavior
5. **Scroll Reveal** — Animations trigger on viewport entry
6. **Counters** — Stat numbers animate when visible
7. **Lightbox** — Gallery modal with keyboard nav
8. **Progress Bar** — Scroll position indicator
9. **Back to Top** — Button appears after scroll
10. **Image Fallback** — Graceful handling of missing images

### CSS Architecture
- **Variables:** Colors, spacing, typography, shadows, radii, transitions
- **Glass Cards:** Single `.glass-card` class used everywhere (nav, highlights, leadership, bento, certs, interests, contact)
- **Layouts:** CSS Grid for hero/about/experience/bento, Flexbox for nav/buttons/tags
- **Responsive:** Three breakpoints (1024px, 768px, 480px)

## ❓ FAQ

**Q: Can I change the theme to light mode?**
A: Yes. Edit `:root` colors in `styles.css` to use light backgrounds. Adjust text colors accordingly.

**Q: Can I add more sections?**
A: Yes. Follow the pattern: add section to nav, create `<section id="...">` in HTML, style in CSS, add to JS nav observer if needed.

**Q: Can I use this template for someone else?**
A: Yes, but update the content (name, photos, links, copy) to avoid confusion.

**Q: Does this work offline?**
A: Yes! Open `index.html` directly in a browser. No internet required (except for Google Fonts, which preload).

**Q: How do I make it faster?**
A: Images are lazy-loaded already. If slower, optimize JPGs before uploading.

## 📖 Documentation

See `BUILD_INFO.md` for detailed feature list, architecture overview, and verification checklist.

---

**Built with:** HTML5 • CSS3 • Vanilla JavaScript
**Design:** Apple, Linear, Framer, Vercel, Stripe, Awwwards-inspired
**License:** Use freely, modify at will
**Last updated:** July 2026

Happy deploying! 🚀
