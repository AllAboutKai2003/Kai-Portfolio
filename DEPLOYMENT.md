# Deployment Guide

## Vercel Deployment

This portfolio application is optimized for deployment on Vercel with automatic HTTPS, edge functions, and seamless integration with Neon PostgreSQL.

### Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Neon PostgreSQL database (configured in v0.dev)

### Deployment Steps

1. **Publish from v0.dev**
   - Click the "Publish" button in the top right corner
   - Select "Deploy to Vercel"
   - Authorize Vercel to access your GitHub account

2. **Configure Environment Variables**
   Navigate to your Vercel project settings and add the following environment variables:

   \`\`\`
   # Database (Auto-configured from Neon integration)
   DATABASE_URL=postgresql://...
   POSTGRES_URL=postgresql://...
   POSTGRES_PRISMA_URL=postgresql://...
   
   # Authentication (Add when ready to enable Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   \`\`\`

3. **Enable Automatic Deployments**
   - Push to your main branch triggers automatic deployments
   - Preview deployments created for pull requests
   - Production deployment on merge to main

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

### Security Configuration

#### Enable MFA on v0.dev Account
1. Go to Account Settings
2. Navigate to Security section
3. Enable Two-Factor Authentication
4. Save backup codes securely

#### Vercel Security Settings
- HTTPS is automatically enabled
- Environment variables are encrypted at rest
- Secrets are never exposed in build logs

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test newsletter subscription functionality
- [ ] Check database connection
- [ ] Verify environment variables are set
- [ ] Test contact form submission
- [ ] Enable Clerk authentication (when ready)
- [ ] Configure custom domain (optional)
- [ ] Set up monitoring and analytics
- [ ] Review security plan at /security-plan

### Monitoring & Maintenance

**Vercel Analytics**
- Automatically enabled for all deployments
- View real-time traffic and performance metrics
- Access via Vercel dashboard

**Database Monitoring**
- Monitor Neon database usage in Neon console
- Set up alerts for connection limits
- Review query performance regularly

**Security Updates**
- Keep dependencies updated via Dependabot
- Review security advisories regularly
- Monitor Vercel security notifications

### Troubleshooting

**Build Failures**
- Check build logs in Vercel dashboard
- Verify all dependencies are listed in package.json
- Ensure environment variables are set correctly

**Database Connection Issues**
- Verify DATABASE_URL is set in environment variables
- Check Neon database is active and accessible
- Review connection pooling settings

**Authentication Issues**
- Confirm Clerk environment variables are set
- Verify callback URLs in Clerk dashboard
- Check middleware configuration

### Support Resources

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Neon Documentation: https://neon.tech/docs
- Clerk Documentation: https://clerk.com/docs

### Production URL

After deployment, your portfolio will be available at:
\`\`\`
https://your-project-name.vercel.app
\`\`\`

You can also configure a custom domain for a professional appearance.
