# Quick Setup Guide

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all the required packages (React, Vite, Tailwind CSS, Framer Motion, etc.)

## Step 2: Start the Development Server

Run this command:

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.5  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 3: Open in Browser

Open the URL shown (usually `http://localhost:5173/`) in your web browser to see the website!

## Optional: Add a Logo Image

If you have a logo image file:
1. Place it in the `public` folder
2. Name it `logo.png`
3. The website will automatically use it

## PDF Menu

The PDF menu is already set up and will open when you click any "View Full Menu (PDF)" or "Menu (PDF)" links.

---

## Troubleshooting

**If you get errors about missing modules:**
- Make sure you ran `npm install` first
- If issues persist, try deleting `node_modules` folder and running `npm install` again

**If the port is already in use:**
- Vite will automatically use the next available port
- Check the terminal output for the correct URL

**If styles aren't loading:**
- Make sure Tailwind CSS is properly configured (should work automatically)
- Try restarting the dev server

Enjoy your local development environment! 🎉
