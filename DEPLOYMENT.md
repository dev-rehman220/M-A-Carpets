# GitHub & Vercel Deployment Guide

## 📦 Repository Status
✅ Git initialized
✅ All files committed
✅ Ready to push to GitHub
✅ Vercel configuration added

---

## 🚀 Option 1: Push to Existing GitHub Account (Manual)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `ma-carpets-website` (or your preferred name)
3. Choose: **Public**
4. DO NOT initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Push Your Code
After creating the repository, run these commands in PowerShell:

```powershell
Set-Location 'e:\Web Development\M&A CARPETS'

# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/ma-carpets-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🚀 Option 2: Complete GitHub CLI Authentication

If you prefer using GitHub CLI:

1. Copy this code: **B5EC-1BAE**
2. Open: https://github.com/login/device
3. Paste the code and authorize
4. Then run:

```powershell
Set-Location 'e:\Web Development\M&A CARPETS'
gh repo create ma-carpets-website --public --source=. --remote=origin --push
```

---

## 🌐 Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `ma-carpets-website` repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**That's it!** Your site will be live in ~2 minutes at: `https://ma-carpets-website.vercel.app`

### Method 2: Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
Set-Location 'e:\Web Development\M&A CARPETS'
vercel

# For production deployment
vercel --prod
```

---

## 📋 Vercel Configuration

The `vercel.json` file is already configured with:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ SPA routing (redirects all routes to index.html)
- ✅ Framework detection: Vite

---

## 🔧 Environment Variables (if needed)

If you need to add environment variables later:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables like:
   - `VITE_API_URL`
   - `VITE_GOOGLE_MAPS_KEY`
   - etc.

---

## 📝 Post-Deployment Checklist

After deploying:
- [ ] Test all pages work correctly
- [ ] Verify mobile responsiveness
- [ ] Test contact form
- [ ] Check WhatsApp button link
- [ ] Update phone numbers in code if needed
- [ ] Add custom domain (optional)

---

## 🔗 Useful Links

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **React Router on Vercel**: https://vercel.com/guides/deploying-react-with-vercel

---

## 💡 Tips

1. **Custom Domain**: You can add your own domain in Vercel → Project Settings → Domains
2. **Auto Deploy**: Every push to `main` branch will automatically deploy to Vercel
3. **Preview Deployments**: Pull requests get automatic preview URLs
4. **Analytics**: Enable Vercel Analytics for visitor insights

---

## 🆘 Troubleshooting

**Issue**: Routes show 404 on refresh
**Solution**: Already handled by `vercel.json` rewrites

**Issue**: Build fails
**Solution**: Check build logs in Vercel dashboard

**Issue**: Images not loading
**Solution**: Images use free Unsplash URLs, replace with your own later

---

Good luck with your deployment! 🚀
