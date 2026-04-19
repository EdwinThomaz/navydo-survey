# Navydo Brand Survey

Full multi-step interactive survey for picking Navydo's brand identity.

## What's inside

- **7 colour palettes** — Forest, Plum, Midnight, Clay, Meadow, Linen, Paper
- **8 logo concepts** — A through H, shown in your chosen palette
- **4 lockup layouts** — Primary, Reverse, Stacked, Monogram  
- **4 app icon styles** — Dark ink, Accent, Light, Gradient
- All real PNG assets from the brand kit included

## Files

```
index.html                   ← The survey (host this)
dashboard.html               ← Results dashboard (open locally)
survey-assets/
  logos/     logo-{A-H}-{palette}.png   (56 images)
  lockups/   lockup-{type}-{palette}.png (28 images)
  icons/     icon-{v1-v4}-{palette}.png  (28 images)
```

## Setup (15 min)

### 1. Set up Formspree (receives email per submission)
1. Go to [formspree.io](https://formspree.io) → sign up with `edwin.thomas@navydo.com`
2. Create New Form → copy your Form ID
3. In `index.html`, replace `YOUR_FORM_ID` with your ID

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Navydo brand survey"
git remote add origin https://github.com/YOUR_USERNAME/navydo-survey.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
- Repo → Settings → Pages → Deploy from branch → main → Save
- Live at: `https://YOUR_USERNAME.github.io/navydo-survey`

## Claude Code prompt to push

Paste this into Claude Code after opening the navydo-survey folder:

```
Push this project to GitHub and host it on GitHub Pages.
1. Run git init, add all files, initial commit
2. Create GitHub repo named "navydo-survey"  
3. Push to main branch
4. Enable GitHub Pages from main branch root
5. Tell me the live URL when done
```

---
Built for Navydo · April 2026 · navydo.com
