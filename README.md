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
- Github Actions to upload changes to my website to my Hostinger account

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

### Custom CSS

- Branding elements according Diractions corporate style.

### Collapsible card tags

- I have enhanced my generated blog posts by adding collapsible card tags. I am using a Hugo partial (`collapsible_tags.html`) to display post tags in a compact, collapsible format. This approach is especially useful for posts with many tags, keeping the layout tidy and user-friendly.
- How the partial works:
  - Parameters: `maxVisible`: Maximum tags shown before collapsing (default: 3). `showOnMobile`: Maximum tags shown on mobile (default: 2).
  - Behavior: If the number of tags exceeds `maxVisible`, only the first `maxVisible` tags are shown, and a “+N” button appears to reveal the rest. On mobile, the `showOnMobile` parameter controls how many tags are visible before collapsing.

## Common pitfalls and how to avoid them

- Note that some elements in a Hugo generated website, like the footer, are cached. During the development of my new website, I've had to remove my local browser cache to see updates of such elements. Sometimes, you also have to restart the local Hugo dev server.
- Don't modify the theme files directly. Always override theme files by copying them into your main project directory with the same relative path. This keeps your changes separate and upgrade-safe.
- Hugo only overwrites or adds files during builds; it does not automatically remove deleted or draft content from the `public` directory. This can result in old or unintended pages being published. Use the `--cleanDestinationDir` flag when building (`hugo --cleanDestinationDir`) to ensure the output directory is cleared before new files are generated. Alternatively, manually delete the `public` directory before each build. You can integrate this within the CI/CD pipeline if needed.
- I personally have always started the local dev server with these options: `hugo server --disableFastRender --noHTTPCache`. 
- Hugo’s documentation and internal logic (layouts, archetypes, content types) can be confusing, especially for more complex site structures. Simple changes may require unexpectedly deep understanding. By the way, I am not using archetypes since I do all my Markdown editing within VSCode.
- My advice is not to use Obsidian as Markdown editor for this specific purpose. Obsidian is my daily notetaking app, but it has some specifics on where to position images which you have to consider. This can be solved by using the [Megascript of Network Chuck](https://blog.networkchuck.com/posts/my-insane-blog-pipeline/). I am not using this approach. I'm using VSCode and the [Markdown All in One extension](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one).
- Hugo’s templating language (Go templates) can be less intuitive than alternatives, especially for those used to JavaScript-based tools. Extending or customizing site behavior may feel constrained. My advice would be to leverage community snippets and templates. And leverage on vibe coding. I personally have set up a dedicated Space for this in my Perplexity Pro account.

## License

This repository contains personal content and branding. Do not reuse text, logos, or styles without permission.