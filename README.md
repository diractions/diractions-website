# Diractions Consulting – Hugo Static Site

This is the source code for the personal website of **Diractions Consulting**, built using [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. It serves as a portfolio, service overview, blog, and contact hub.

---

## Tech Stack

- [Hugo](https://gohugo.io/) static site generator
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme
- Markdown-based content
- Custom landing page with:
  - Portrait photo
  - Social popup window with contact info
- Light/Dark mode support with dynamic logo switching
- Minimal JS and CSS customizations for branding

## Directory Structure

```bash
├── content/                        # Pages and blog posts (Markdown)
│   ├── about/
│   ├── services.md
│   ├── faq.md
│   ├── archives.md
│   └── posts/                      # Blog posts
├── static/                         # Static assets like images, logos
│   └── images/
│   └── js/                         # Custom JavaScript
├── layouts/                        # Custom layout overrides
│   └── _partials/
│       └── header.html             # Overridden header with dual-logo support
│       └── index_profile.html      # Custom landing page
│       └── socialpopup.html        # Social popup window
│   └── index.html                  # Landing page
├── assets/css/extended             # Custom CSS
├── hugo.yaml                       # Site configuration
```

## Customizations I've made on top of the PaperMod theme

### Dynamic Logo Switching (Dark/Light)

Two logo files are used:

- static/images/logo-light.png
- static/images/logo-dark.png

CSS handles visibility based on the body.dark class.

## Custom CSS

- Branding elements according Diractions corporate style.

## Collapsible card tags

- 

## License

This repository contains personal content and branding. Do not reuse text, logos, or styles without permission.