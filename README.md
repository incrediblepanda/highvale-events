# Highvale Events

A sophisticated event planning website built with Next.js, TypeScript, and Tailwind CSS. Features a content management system (CMS) for easy content updates.

## 🚀 Features

- **Modern Design**: Elegant, responsive design with sage green and gold color scheme
- **Service Showcase**: Weddings, Bachelorette Parties, and Party Planning services
- **Content Management**: Integrated Decap CMS for easy content editing
- **Inquiry Forms**: Contact forms ready for HoneyBook CRM integration
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Responsive**: Beautiful on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Deployment**: Netlify
- **Package Manager**: Bun

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/highvale-events.git

# Navigate to the project
cd highvale-events

# Install dependencies
bun install

# Run development server
bun dev
```

## 🚀 Deployment

The site is configured for deployment on Netlify:

```bash
# Build for production
bun run build

# The output will be in the 'out' directory
```

## 📝 CMS Setup

1. Enable Netlify Identity in your Netlify dashboard
2. Set registration to "Invite only"
3. Enable Git Gateway
4. Access CMS at `yourdomain.com/admin`

See [CMS_GUIDE.md](./CMS_GUIDE.md) for detailed instructions.

## 📁 Project Structure

```
highvale-events/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   └── lib/          # Utility functions
├── content/          # CMS content files
├── public/           # Static assets
│   └── admin/        # CMS configuration
└── tailwind.config.ts # Tailwind configuration
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Content**: Use the CMS at `/admin` or edit JSON files in `/content`
- **Components**: Modify components in `/src/components`

## 📄 License

© 2024 Highvale Events. All rights reserved.

## 🤝 Support

For support, email info@highvaleevents.com
