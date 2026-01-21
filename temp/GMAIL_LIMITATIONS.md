# Gmail Technical Limitations for Email Signatures

## 1. Character Limit

- **Limit:** ~10,000 HTML characters
- **What counts:** All code, including inline styles, links, and meta tags
- **Consequence:** When exceeded, Gmail truncates the code on save, signature may break

**Recommendation:** Minimize table nesting, avoid redundant styles.

---

## 2. Styling and CSS

### Inline CSS Only
Gmail ignores `<style>` tags. All styles must be in the `style` attribute:
```html
<td style="color: #000; font-family: Arial;">
```

### Safe Fonts
Gmail does not load external fonts (@import, Google Fonts).

**Allowed:**
- Arial
- Helvetica
- Verdana
- Georgia
- Times New Roman

### Prohibited CSS Properties
- `display: flex`
- `display: grid`
- `position: absolute/relative`
- `box-shadow`
- `border-radius` (partial support)
- `transform`
- `animation`

---

## 3. Image Limitations

### Hosting
- **Base64 does NOT work** — images must be on an external server
- Requires a public direct link (HTTPS)

### Required Attributes
```html
<img src="https://..." width="150" height="50" alt="Logo" style="display: block;">
```

| Attribute                 | Purpose                                |
| ------------------------- | -------------------------------------- |
| `width` / `height`        | Prevents layout "jumps" during loading |
| `alt`                     | Displayed if images are blocked        |
| `style="display: block;"` | Removes extra spacing below the image  |

### Formats
- **PNG** — for logos and icons (transparency)
- **JPG** — for photos
- **SVG** — NOT recommended (blocked or displayed incorrectly)

---

## 4. Mobile Limitations (iOS/Android)

### Scaling
- Signatures wider than **600px** are forcibly reduced
- Recommended maximum width: **500-600px**

### Auto-linking
Phone numbers and emails automatically become blue links.

**Solution:** Wrap in `<a>` with fixed color:
```html
<a href="tel:+18777377178" style="color: #000000; text-decoration: none;">
  +1 877 737 7178
</a>
```

---

## 5. Security

### Prohibited
- `<script>` — completely removed
- `<iframe>` — blocked
- `<form>` — does not work
- `onclick` and other JS events — ignored

### Interactivity
Impossible. No accordions, tabs, or animations.

---

## Compliance Checklist

- [ ] HTML code < 10,000 characters
- [ ] All styles inline
- [ ] Only system fonts
- [ ] Images on external HTTPS hosting
- [ ] All `<img>` have width, height, alt
- [ ] Signature width <= 600px
- [ ] Phone numbers/emails wrapped in `<a>` with fixed color
- [ ] No SVG, JavaScript, external CSS
