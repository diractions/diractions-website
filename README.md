# Diractions Consulting – Hugo Static Site

This is the source code for the personal website of **Diractions Consulting**, built using [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. It serves as a portfolio, service overview, blog, and contact hub.

---

## 🧱 Tech Stack

- [Hugo](https://gohugo.io/) static site generator
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme
- Markdown-based content
- Custom landing page with:
  - Portrait photo
  - Social popup window with contact info
- Light/Dark mode support with dynamic logo switching
- Minimal JS and CSS customizations for branding

## 📁 Directory Structure

```bash
├── content/                        # Pages and blog posts (Markdown)
│   ├── about.md
│   ├── services.md
│   ├── faq.md
│   └── posts/                      # Blog posts
├── static/                         # Static assets like images, logos
│   └── images/
├── layouts/                        # Custom layout overrides
│   └── _partials/
│       └── header.html             # Overridden header with dual-logo support
│       └── index_profile.html      # Custom landing page
│       └── socialpopup.html        # Social popup window
├── assets/css/                     # Custom CSS
│   └── diractions.css
├── hugo.yaml                       # Site configuration
```

## ⚙️ Getting Started

### Prerequisites

- Hugo Extended version 0.146.0 or later

### Clone and Run Locally

```bash
git clone https://github.com/yourusername/diractions-website.git
cd diractions-website
hugo server --disableFastRender
```

## 🌐 Deployment

You can deploy this site to:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel (via static output)
- Or how I choose to deploy it on Hostinger using a Github webhook

Build with:

```bash
hugo --minify
```

Output will be in the public/ directory.

## 🖼️ Customizations

### Dynamic Logo Switching (Dark/Light)

Two logo files are used:

- static/images/logo-light.png
- static/images/logo-dark.png

CSS handles visibility based on the body.dark class.

## ✍️ Content Management

- Posts are in content/posts/
- Pages are in content/about.md, services.md, faq.md, etc.
- All content is in Markdown with YAML frontmatter.

## 📄 License

This repository contains personal content and branding. Do not reuse text, logos, or styles without permission.