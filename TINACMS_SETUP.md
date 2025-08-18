# TinaCMS Setup Guide for Highvale Events

## Overview
TinaCMS is already integrated into your project! You just need to connect it to TinaCMS Cloud to enable the visual editor on your live site.

## Step 1: Create TinaCMS Cloud Account

1. Go to https://tina.io
2. Click "Get Started" or "Sign Up"
3. Sign up using your GitHub account (use the same account that owns the `incrediblepanda/highvale-events` repository)

## Step 2: Create a New Project in TinaCMS Cloud

1. Once logged in, click "New Project"
2. Select your GitHub repository: `incrediblepanda/highvale-events`
3. For the project settings:
   - **Project Name**: Highvale Events
   - **Branch**: main (or master, depending on your default branch)
   - **Project Directory**: Leave blank (since TinaCMS is in the root)

## Step 3: Get Your Credentials

After creating the project, TinaCMS will provide you with:
- **Client ID** (starts with a long string)
- **Token** (a secret token for read/write access)
- **Content Token** (optional, for read-only access)

Save these credentials - you'll need them for the next step!

## Step 4: Add Environment Variables to Netlify

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your Highvale Events site
3. Go to **Site configuration** → **Environment variables**
4. Add the following variables:

```
NEXT_PUBLIC_TINA_CLIENT_ID = [Your Client ID from TinaCMS]
TINA_TOKEN = [Your Token from TinaCMS]
TINA_SEARCH_TOKEN = [Optional - Your Search Token if you want search]
```

## Step 5: Configure Local Development (Optional)

If you want to test TinaCMS locally:

1. Create a `.env.local` file in your project root:
```
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
TINA_TOKEN=your-token-here
```

2. Run the development server with TinaCMS:
```bash
bun run dev:tina
```

## Step 6: Deploy and Test

1. After adding the environment variables to Netlify, trigger a new deployment:
   - You can do this by pushing any small change to your GitHub repo
   - Or in Netlify, go to **Deploys** → **Trigger deploy** → **Deploy site**

2. Once deployed, visit your site and append `/admin` to the URL:
   - Example: `https://your-site.netlify.app/admin`

3. You should see the TinaCMS login screen:
   - Click "Login with TinaCMS"
   - Authorize the connection
   - You'll be redirected to the visual editor!

## How to Use the Visual Editor

Once logged in to `/admin`:

1. **Browse Pages**: Click on any page in the sidebar to edit it
2. **Visual Editing**: Click directly on content in the preview to edit
3. **Add Blocks**: Use the "+" button to add new content blocks:
   - Hero sections
   - Service grids
   - Testimonials
   - Content blocks
   - Image galleries
   - Call-to-action sections
4. **Style Controls**: Each block has style options for:
   - Colors and backgrounds
   - Spacing and padding
   - Layout options
   - Typography settings
5. **Save Changes**: Click "Save" to commit changes to your GitHub repo
6. **Instant Deploy**: Changes automatically trigger a new Netlify deployment

## Available Content Blocks

Your TinaCMS setup includes these pre-built blocks:

- **Hero Block**: Full-screen hero sections with background images
- **Services Block**: Grid layouts for showcasing services
- **Testimonials Block**: Customer testimonials with various layouts
- **CTA Block**: Call-to-action sections with buttons
- **Content Block**: Rich text content with flexible layouts
- **Gallery Block**: Image galleries with lightbox support

## Troubleshooting

### "Failed to fetch" error
- Check that your environment variables are correctly set in Netlify
- Ensure your TinaCMS project is connected to the correct GitHub repo

### Can't see the visual editor
- Make sure you're logged in at `/admin`
- Clear your browser cache and cookies
- Check that JavaScript is enabled

### Changes not appearing
- TinaCMS saves to your GitHub repo, which triggers a Netlify build
- Wait 1-2 minutes for the deployment to complete
- Check Netlify's deploy status in your dashboard

## Support

- TinaCMS Documentation: https://tina.io/docs
- TinaCMS Community: https://discord.gg/tinacms
- Netlify Support: https://www.netlify.com/support

## Next Steps

1. Complete the setup above
2. Test the visual editor by making a small change
3. Explore the different content blocks
4. Customize the blocks further if needed
5. Train your team on using the visual editor

Your site is ready for visual editing once you complete these steps!
