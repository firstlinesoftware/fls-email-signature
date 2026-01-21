# Email Signature Generator — Plan

## Overview

Single-file HTML/JS/CSS tool for generating email signatures for First Line Software employees.

## Input Fields

| Field | ID | Description |
|-------|-----|-------------|
| Full Name | `in-name` | Employee name (Latin only) |
| Job Title | `in-job` | Employee position |

## Fixed Data (hardcoded)

- **Phone:** +1 877 737 7178
- **Company:** First Line Software
- **Social Links:**
  - Website: https://firstlinesoftware.com
  - LinkedIn: https://www.linkedin.com/company/first-line-software-inc/mycompany/
  - Instagram: https://www.instagram.com/firstlinesoftware/
  - YouTube: https://www.youtube.com/@fls_fam
  - Apple Podcasts: https://podcasts.apple.com/cz/podcast/spam-jam-by-first-line-software/id1761346338

## Project Structure

```
fls-signature/
├── index.html          ← generator (UI + JS)
├── images/             ← icons (move from assets/)
│   ├── logo_fls.png
│   ├── linkedin-circle-black.png
│   ├── instagram-circle-black.png
│   ├── youtube-circle-black.png
│   ├── itunespodcasts-circle-black.png
│   └── link-circle-black.png
├── temp/               ← references
│   └── template.html   ← current assets/index.html
└── PLAN.md             ← this file
```

## Technical Requirements

### Stack
- Vanilla JavaScript (ES6+)
- HTML5 / CSS3
- No frameworks, no libraries

### Signature Template
- Table-based layout (email-safe)
- Inline styles only
- MSO conditional comments for Outlook
- Absolute URLs for images

### Copy Mechanism
```javascript
// Primary: ClipboardItem API (Chrome, Edge, Safari)
const blob = new Blob([html], { type: 'text/html' });
const item = new ClipboardItem({ 'text/html': blob });
await navigator.clipboard.write([item]);

// Fallback: execCommand for Firefox
const div = document.createElement('div');
div.contentEditable = true;
div.innerHTML = html;
document.body.appendChild(div);
div.focus();
document.execCommand('selectAll');
document.execCommand('copy');
document.body.removeChild(div);
```

### Hosting
- GitHub Pages
- URL: `https://{{GITHUB_USERNAME}}.github.io/fls-signature/`
- Images: `https://{{GITHUB_USERNAME}}.github.io/fls-signature/images/`

## Pre-launch Checklist

- [ ] Compress `logo_fls.png` (113KB → ~15-20KB) via TinyPNG
- [ ] Move images from `assets/images/` to `images/`
- [ ] Move `assets/index.html` to `temp/template.html`
- [ ] Delete `assets/` folder
- [ ] Replace `{{GITHUB_USERNAME}}` with actual username
- [ ] Enable GitHub Pages in repository settings

## Alt Texts for Images

| Image | Alt Text |
|-------|----------|
| logo_fls.png | First Line Software |
| link-circle-black.png | Website |
| linkedin-circle-black.png | LinkedIn |
| instagram-circle-black.png | Instagram |
| youtube-circle-black.png | YouTube |
| itunespodcasts-circle-black.png | Podcasts |

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 76+ | Full (ClipboardItem) |
| Edge 79+ | Full (ClipboardItem) |
| Safari 13.1+ | Full (ClipboardItem) |
| Firefox | Fallback (execCommand) |
