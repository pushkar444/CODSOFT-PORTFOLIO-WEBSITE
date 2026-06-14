# Personal Portfolio — Pushkar Kumar

**CodSoft Web Development Internship · Level 1 · Task 1**

A single-page personal portfolio built with plain **HTML, CSS and a little
JavaScript** — no Bootstrap, no template, no build step. Just open `index.html`.

---

## ✨ Features

- **Sticky navigation bar** with a mobile hamburger menu
- **Hero section** with an animated, floating profile photo
- **About section** — bio, quick facts, and a second photo with a hover effect
- **Skills section** — languages, core CS, tools, and what I'm currently learning
- **Projects section** — real work and case studies, with tags
- **Resume section** — one-click PDF download
- **Contact section** — email, phone and location
- **Footer** with copyright and back-to-top link
- **Scroll-reveal** animations using `IntersectionObserver`
- **Fully responsive** — adapts to mobile, tablet and desktop
- **Accessible** — honours `prefers-reduced-motion`

---

## 🛠 Built with

| Layer | Details |
|-------|---------|
| Markup | HTML5, semantic sections |
| Styling | CSS3 — custom properties, Grid & Flexbox, media queries |
| Behaviour | Vanilla JavaScript — mobile menu, scroll reveals, dynamic year |
| Fonts | Fraunces (serif) + Inter (sans), via Google Fonts |

No frameworks or libraries.

---

## 📁 Structure

```
portfolio/
├── index.html          # all sections live here
├── css/
│   └── style.css       # full stylesheet (palette + layout + responsive)
├── js/
│   └── main.js         # menu toggle, scroll reveals, footer year
├── images/
│   ├── photo.jpg       # profile photo (hero + about)
│   └── placeholder.svg # fallback shown if photo.jpg is missing
├── assets/
│   └── Pushkar-Kumar-Resume.pdf
└── README.md
```

---

## ▶️ Run it

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
# visit http://localhost:8000
```

---

## 🎨 Make it yours

- Replace `images/photo.jpg` with your own picture (a square-ish image looks best).
  If the file is missing, a clean placeholder is shown automatically.
- Swap the resume at `assets/Pushkar-Kumar-Resume.pdf`.
- All colours are CSS variables at the top of `css/style.css`.

---

## 🎨 Design

Minimal, editorial palette — warm ivory paper `#f6f4ef`, ink text `#1b1b19`, and
a single deep-evergreen accent `#2f4a3f`. Serif display type (Fraunces) paired
with a clean sans (Inter). No gradients, no clutter.

---

**Author:** Pushkar Kumar · pushkar.kumar.cs28@iilm.edu

`#codsoft` `#webdevelopment` `#internship`
