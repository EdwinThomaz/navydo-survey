#!/bin/bash
# Navydo Survey — GitHub Setup Script
# Run this inside the navydo-survey folder

echo "🚀 Setting up Navydo Survey for GitHub Pages..."

# 1. Initialize git
git init
git add .
git commit -m "feat: Navydo brand survey — 7 palettes, 8 logos, 4 lockups, 4 icons"

echo ""
echo "✅ Git repo initialized!"
echo ""
echo "Next steps:"
echo "1. Create a GitHub repo named: navydo-survey"
echo "   → Go to github.com/new"
echo ""
echo "2. Connect and push:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/navydo-survey.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   → Repo Settings → Pages → Deploy from branch → main → Save"
echo ""
echo "4. Set up Formspree:"
echo "   → Go to formspree.io, sign up with edwin.thomas@navydo.com"
echo "   → Create form, copy ID (e.g. xnqkoyno)"
echo "   → Open index.html, replace YOUR_FORM_ID with your ID"
echo "   → git add . && git commit -m 'chore: add formspree ID' && git push"
echo ""
echo "🌐 Your live link: https://YOUR_USERNAME.github.io/navydo-survey"
