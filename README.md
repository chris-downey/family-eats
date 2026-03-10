# family-eats
Family Meal Planner

# 🍽️ FamilyEats — Setup Guide

## What You've Got
A full Progressive Web App (PWA) that works like a native iPhone app — no App Store needed!

---

## 📂 Files
- `index.html` — The entire app (all-in-one)
- `sw.js` — Service worker (enables offline use)
- `manifest.json` — Makes it installable as an app
- `README.md` — This guide

---

## 🚀 How to Deploy (Free — 5 Minutes)

### Option 1: Netlify Drop (Easiest!)
1. Go to **https://netlify.com/drop**
2. Drag the entire `family-meal-planner` folder onto the page
3. Netlify gives you a free URL like `https://familyeats-abc123.netlify.app`
4. Share that URL with the family!

### Option 2: GitHub Pages
1. Create a free GitHub account at github.com
2. Create a new repository called `family-eats`
3. Upload all 3 files
4. Go to Settings → Pages → Deploy from main branch
5. Your URL: `https://yourusername.github.io/family-eats`

### Option 3: Vercel
1. Go to **https://vercel.com**
2. Import your GitHub repo or drag-and-drop
3. Free hosting, instant deployment

---

## 📱 Installing on iPhone (All Family Members)

1. Open **Safari** on iPhone (must be Safari, not Chrome)
2. Go to your deployed URL
3. Tap the **Share button** (box with arrow at bottom)
4. Tap **"Add to Home Screen"**
5. Tap **"Add"** — it now appears as an app icon!

Repeat for each family member's phone.

---

## 🎮 App Features

### 📅 Plan Tab
- See the full week at a glance
- **Monday** = all-family plant based meal 🥦
- **Friday** = all-family meat meal 🍖
- **Tue–Thu, Sat–Sun** = two tracks (plant + meat)
- Weekly recipe suggestion from outside your folder ✨

### 📖 Recipes Tab
- Three folders: Plant Based / Meat / Shared
- Add recipes with photo (take a pic right from the app!)
- Add ingredients and cooking notes

### 🗳️ Vote Tab
- Opens on Friday with a banner reminder
- Vote for up to 7 recipes total across both tracks
- See vote results and apply to next week's plan
- Auto-generates shopping list from winners!

### 🛒 Shopping Tab
- Auto-generated from your week's meal plan
- Tap items to check them off
- Grouped by recipe for easy shopping

### ⭐ Review Tab
- Rate this week's meals 1–5 stars
- Leave a comment
- Ratings feed back into voting (higher-rated meals shown prominently)

---

## 🤫 Secret Feature: Dad Joke of the Day!
When you complete a review, surprise! 🎉 A silly dad joke appears with confetti.

**To add Dad's photo:**
1. Long-press the "🍽️ This Week" title on the Plan tab for 1.5 seconds
2. Secret settings appear!
3. Upload your photo
4. Every review completion will now show Dad's face with a classic joke 😄

---

## 🗳️ Friday Voting Flow

Every Friday the app shows a banner: **"It's Friday — Time to Vote!"**

Family members each:
1. Go to the Vote tab
2. See up to 10 recipes per track
3. Cast up to 7 votes total
4. Submit → see results
5. Hit "Apply to Week Plan" to auto-fill next week!

---

## 💾 Data Storage
All data is stored locally on each device in the browser. This means:
- ✅ Works offline
- ✅ No account needed
- ⚠️ Data is per-device (each person manages their own votes/reviews)
- 💡 For shared recipes: one family member can be the "recipe manager" and add them all

---

## 📧 Questions?
The app is entirely self-contained in `index.html` — feel free to edit the text, colours, or jokes inside it with any text editor!
