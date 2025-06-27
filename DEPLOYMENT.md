# Deployment Checklist for Vercel

## ✅ Local Build Status
- [x] `npm run build` - SUCCESS
- [x] `npm run lint` - SUCCESS
- [x] No TypeScript errors
- [x] All API routes working with mock data

## 🚀 Vercel Deployment Steps

### 1. Environment Variables in Vercel Dashboard
Add these in your Vercel project settings:

```
NEXT_PUBLIC_APP_URL=https://your-project-name.vercel.app
NEXT_PUBLIC_SITE_NAME=AutoShop Pro
DEFAULT_PAGE_SIZE=12
```

**IMPORTANT**: Replace `your-project-name` with your actual Vercel project name.

### 2. Build Settings (Vercel Dashboard)
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 3. Common Deployment Issues & Solutions

#### Issue: "Environment variable not found"
- Solution: Make sure all environment variables are added in Vercel dashboard
- Don't include `.env.local` in your Git repository

#### Issue: "Build failed during compilation"
- Solution: Your build works locally, so this is likely an environment issue
- Check that all dependencies are in `package.json`

#### Issue: "Function timeout"
- Solution: Your API routes are simple mock data, shouldn't timeout

#### Issue: "Domain configuration"
- Solution: Update `NEXT_PUBLIC_APP_URL` to match your actual Vercel URL

### 4. Quick Deploy Commands
```bash
# If you have Vercel CLI installed
vercel --prod

# Or push to your connected Git repository
git add .
git commit -m "Fix deployment issues"
git push origin main
```

## 🔧 If Still Failing
1. Check Vercel build logs for specific error messages
2. Ensure your Git repository doesn't include `.env.local`
3. Make sure all imports are correct (case-sensitive)
4. Verify all image paths exist or use placeholder images
