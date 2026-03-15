# FamilyEats 🥘

A family meal planning PWA. Plan the week, vote on favourites, build shopping lists, and leave reviews.

## Deploy

Drag the `family-meal-planner/` folder to **netlify.com/drop**.
Install on iPhone: Safari → Share → Add to Home Screen.

---

## GitHub Repo Structure

```
your-repo/
├── plant_based_recipes/
│   └── recipe_name.json
├── meat_recipes/
│   └── recipe_name.json
└── recipe_images/
    └── IMG_recipe_name.png   (or .jpg)
```

## Recipe JSON Format

```json
{
  "id":          "recipe_name_slug",
  "name":        "Full Recipe Title",
  "track":       "plant | meat | shared",
  "serves":      "4 to 6",
  "difficulty":  "Easy | Medium | Hard",
  "description": "Short intro paragraph.",
  "ingredients": [
    "200g cauliflower florets",
    "375g cannellini beans"
  ],
  "method": [
    "Step 1 full text including temperatures and times.",
    "Step 2 full text."
  ],
  "photo":       null,
  "source_url":  "https://... (optional, shown as link in app)",
  "addedAt":     "2026-03-15"
}
```

- `photo` — always set to `null` in the JSON. The app automatically looks for `recipe_images/IMG_<id>.png` (falls back to `.jpg`).
- `id` — must match the filename stem: `rotini_with_broccoli.json` → `"id": "rotini_with_broccoli"`
- `track` — `plant` shows in plant tab, `meat` in meat tab, `shared` in both

---

## One-time Setup

### GitHub (recipes)
1. Create a public GitHub repo
2. Create folders: `plant_based_recipes/`, `meat_recipes/`, `recipe_images/`
3. In app ⚙️ → Connect GitHub Repo → enter username + repo name

### JSONBin (votes + reviews)
1. Go to jsonbin.io → create free account
2. Create a Bin with:
   ```json
   {"votes":{},"votesSubmitted":[],"reviews":[],"weekPlan":{}}
   ```
3. Copy Bin ID + Master Key
4. In app ⚙️ → Set Up Votes & Reviews Sync → paste both

---

## Converter Tools

All tools live in `converter/` and share `config.ini`.

### config.ini
```ini
api_key             = sk-ant-api03-...
source_plant        = /path/to/recipe_photos/plant
source_meat         = /path/to/recipe_photos/meat
plant_based_recipes = /path/to/github-repo/plant_based_recipes
meat_recipes        = /path/to/github-repo/meat_recipes
recipe_images       = /path/to/github-repo/recipe_images
```

### convert_recipes.py — Scan cookbook photos
```bash
python3 convert_recipes.py            # convert new images in source folders
python3 convert_recipes.py --dry-run  # preview without saving
python3 convert_recipes.py --all      # reconvert everything
```
Drop `.jpg`/`.png` photos of cookbook pages into `source_plant/` or `source_meat/`.
The script sends each image to Claude and saves the extracted JSON.

### lookup_recipes.py — Find recipes from the web
```bash
python3 lookup_recipes.py                  # uses recipes_to_lookup.txt
python3 lookup_recipes.py my_list.txt      # use a different file
python3 lookup_recipes.py --yes            # auto-approve all
```

**recipes_to_lookup.txt format:**
```
# Comments and blank lines ignored
plant: mushroom and spinach curry
meat:  slow cooker beef stew
plant: https://www.bbcgoodfood.com/recipes/lentil-soup
meat:  https://www.jamieoliver.com/recipes/beef-stew
```

- Name entries → Claude searches the web for the best match
- URL entries → page is fetched and extracted directly (no web search)

Phase 1 fetches all recipes, Phase 2 lets you review and approve each one before saving.

---

## Week Structure

| Day | Meal |
|-----|------|
| Monday | All-family plant based 🥦 |
| Tue – Thu | Split: plant 🥦 + meat 🍖 |
| Friday | All-family meat 🍖 |
| Sat – Sun | Split: plant 🥦 + meat 🍖 |

---

## App Tabs

| Tab | What it does |
|-----|-------------|
| 📅 Plan | View the week, tap a meal to see the recipe |
| 📖 Recipes | Browse all recipes by track, tap to see full details |
| 🗳️ Vote | Vote for next week's meals (7 votes per person) |
| 🛒 Shop | Auto-generated shopping list from week plan |
| ⭐ Review | Rate and review meals from this week |
