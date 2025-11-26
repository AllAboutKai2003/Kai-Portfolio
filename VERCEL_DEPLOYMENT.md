# Vercel Deployment Guide

## 🚀 Quick Deploy Steps

### 1. Push Code to GitHub (Already Done ✅)
Your code is already on GitHub at: `allaboutKai/v0-cybersecportfolio`

### 2. Deploy to Vercel

#### Option A: One-Click Deploy
1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click **"Add New"** → **"Project"**
4. Find and select **`allaboutKai/v0-cybersecportfolio`**
5. Click **"Import"**

#### Option B: Use Vercel CLI (Alternative)
```bash
pnpm install -g vercel
vercel login
vercel
```

### 3. Configure Environment Variables in Vercel

**CRITICAL:** Before deploying, add these environment variables:

Go to: **Project Settings → Environment Variables**

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZmFpdGhmdWwtY293LTUuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_QduDlj9xwvUyF8CzOdefZwEEzYgwLgxAJL5GxbhOFK

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/admin
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/admin

# Email Configuration
EMAIL_USER=ejaay0000@gmail.com
EMAIL_PASSWORD=gfel judn sdwk hjoo
ADMIN_EMAIL=ejaay0000@gmail.com

# Admin Email List (comma-separated)
ADMIN_EMAILS=ejaay0000@gmail.com

# Email Action Security Token
EMAIL_ACTION_TOKEN=change-this-to-a-random-secure-token-in-production

# App URL (Update after first deployment!)
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

**Note:** Set all variables to apply to **Production**, **Preview**, and **Development** environments.

### 4. Deploy
Click **"Deploy"** button and wait 2-3 minutes for the build to complete.

### 5. Update App URL After First Deploy

1. **Copy your Vercel deployment URL** (e.g., `https://v0-cybersecportfolio.vercel.app`)
2. Go to **Settings → Environment Variables**
3. **Update** `NEXT_PUBLIC_APP_URL` with your actual Vercel URL:
   ```
   NEXT_PUBLIC_APP_URL=https://your-actual-vercel-url.vercel.app
   ```
4. Go to **Deployments** tab
5. Click **"..."** on the latest deployment → **"Redeploy"**

### 6. Update Clerk Dashboard

1. Go to https://dashboard.clerk.com
2. Select your application
3. Go to **Domains** section
4. Add your Vercel domain:
   ```
   https://your-vercel-url.vercel.app
   ```
5. Update allowed origins and redirect URLs

### 7. Generate Secure Token (Recommended)

Replace the default `EMAIL_ACTION_TOKEN` with a secure random string:

```bash
# Generate a random token
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Update in Vercel environment variables.

## 🎉 Your Site is Live!

Your portfolio will be available at:
- **Production:** `https://your-vercel-url.vercel.app`
- **Admin Dashboard:** `https://your-vercel-url.vercel.app/admin`

## 🔧 Post-Deployment Testing

1. **Test Homepage:** Visit your Vercel URL
2. **Test Sign Up:** Create a new test account
3. **Check Email:** Verify admin notification arrives
4. **Test Approval:** Click approve button in email (should work on mobile!)
5. **Test Admin Access:** Approved user should access `/admin`

## 🔄 Continuous Deployment

Vercel automatically redeploys when you push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

## 📝 Important Notes

- ✅ Email approval buttons will work from any device (phone/computer)
- ✅ Auto-approval for admin emails configured in `ADMIN_EMAILS`
- ✅ Mobile-responsive design
- ✅ Automatic HTTPS on Vercel
- ✅ Edge functions for fast API routes

## 🆘 Troubleshooting

### Build Fails
- Check Vercel build logs
- Ensure all environment variables are set
- Verify Node.js version (should use Node 18+)

### Email Not Sending
- Verify Gmail App Password is correct
- Check `EMAIL_USER` and `EMAIL_PASSWORD` in Vercel

### Approval Links Not Working
- Ensure `NEXT_PUBLIC_APP_URL` matches your actual Vercel URL
- Verify `EMAIL_ACTION_TOKEN` is set

### Clerk Authentication Issues
- Verify Clerk keys in Vercel match Clerk dashboard
- Add Vercel domain to Clerk allowed domains

## 🔐 Security Recommendations

1. **Change Email Action Token:** Use a strong random token
2. **Enable 2FA:** On both GitHub and Vercel
3. **Review Admin List:** Keep `ADMIN_EMAILS` up to date
4. **Monitor Logs:** Check Vercel logs regularly

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Clerk Docs: https://clerk.com/docs
- Next.js Docs: https://nextjs.org/docs
