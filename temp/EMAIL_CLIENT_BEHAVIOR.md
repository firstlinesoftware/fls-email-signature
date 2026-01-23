# Email Client Behavior Guide

A comprehensive guide on how different email clients handle HTML email signatures and their quirks.

---

## Email Client Support Comparison Table

### CSS & HTML Support

| Feature | Gmail | Outlook Desktop | Outlook.com | Apple Mail | Thunderbird | Yahoo Mail |
|---------|-------|-----------------|-------------|------------|-------------|------------|
| **Inline CSS** | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full |
| **`<style>` tags** | ❌ Stripped | ⚠️ Limited | ⚠️ Limited | ✅ Yes | ✅ Yes | ❌ Stripped |
| **External CSS** | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **Tables** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`<div>` layout** | ✅ Yes | ⚠️ Limited | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Limited |
| **External Images (HTTPS)** | ✅ Via proxy | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Blocked default | ✅ Yes |
| **Base64 Images** | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Limited |
| **SVG Images** | ❌ Blocked | ❌ Blocked | ❌ Blocked | ⚠️ Limited | ⚠️ Limited | ❌ Blocked |
| **Web Fonts** | ❌ No | ❌ No | ⚠️ Limited | ✅ Yes | ⚠️ Limited | ❌ No |
| **System Fonts** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

### CSS Properties Support

| Property | Gmail | Outlook Desktop | Outlook.com | Apple Mail | Thunderbird | Yahoo Mail |
|----------|-------|-----------------|-------------|------------|-------------|------------|
| **`padding`** | ✅ Yes | ⚠️ Buggy | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`margin`** | ✅ Yes | ⚠️ Buggy | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Limited |
| **`width`** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`max-width`** | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`height`** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`background-color`** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`background-image`** | ✅ Yes | ❌ No | ⚠️ Limited | ✅ Yes | ✅ Yes | ⚠️ Limited |
| **`border`** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`border-radius`** | ✅ Yes | ❌ No | ⚠️ Limited | ✅ Yes | ✅ Yes | ⚠️ Limited |
| **`box-shadow`** | ✅ Yes | ❌ No | ⚠️ Limited | ✅ Yes | ✅ Yes | ❌ No |
| **`display: flex`** | ✅ Yes | ❌ No | ⚠️ Limited | ✅ Yes | ✅ Yes | ❌ No |
| **`display: grid`** | ✅ Yes | ❌ No | ❌ No | ✅ Yes | ⚠️ Limited | ❌ No |
| **`position`** | ⚠️ Limited | ❌ No | ❌ No | ✅ Yes | ⚠️ Limited | ❌ No |
| **`float`** | ⚠️ Buggy | ⚠️ Buggy | ⚠️ Buggy | ✅ Yes | ⚠️ Buggy | ⚠️ Buggy |
| **`transform`** | ❌ No | ❌ No | ❌ No | ✅ Yes | ⚠️ Limited | ❌ No |
| **`animation`** | ❌ No | ❌ No | ❌ No | ⚠️ Limited | ⚠️ Limited | ❌ No |
| **`transition`** | ❌ No | ❌ No | ❌ No | ⚠️ Limited | ⚠️ Limited | ❌ No |
| **`opacity`** | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Limited |

### Dark Mode Support

| Feature | Gmail | Outlook Desktop | Outlook.com | Apple Mail | Thunderbird | Yahoo Mail |
|---------|-------|-----------------|-------------|------------|-------------|------------|
| **Has Dark Mode** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Inverts Images** | ⚠️ Small/mono only | ❌ No | ⚠️ Partial | ❌ No | ❌ No | ⚠️ Unpredictable |
| **Changes Text Color** | ✅ Yes | ⚠️ Partial | ✅ Yes | ✅ Yes | ⚠️ Partial | ✅ Yes |
| **Changes Background** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Media Queries** | ❌ No | ❌ No | ❌ No | ✅ Yes | ⚠️ Limited | ❌ No |
| **`prefers-color-scheme`** | ❌ No | ❌ No | ❌ No | ✅ Yes | ⚠️ Limited | ❌ No |

### Mobile Support

| Feature | Gmail iOS/Android | Apple Mail iOS | Outlook Mobile | Samsung Email |
|---------|-------------------|----------------|----------------|---------------|
| **Responsive Design** | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Limited |
| **Media Queries** | ⚠️ Limited | ✅ Yes | ⚠️ Limited | ⚠️ Limited |
| **Touch Targets** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Auto-link Detection** | ✅ Yes (phones/emails) | ✅ Yes (phones/emails) | ✅ Yes | ✅ Yes |
| **Viewport Meta** | ⚠️ Ignored | ⚠️ Ignored | ⚠️ Ignored | ⚠️ Ignored |
| **Max Width (600px)** | ✅ Auto-scales | ✅ Auto-scales | ✅ Auto-scales | ✅ Auto-scales |

### Interactive Elements

| Feature | Gmail | Outlook Desktop | Outlook.com | Apple Mail | Thunderbird | Yahoo Mail |
|---------|-------|-----------------|-------------|------------|-------------|------------|
| **Links (`<a>`)** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`mailto:` links** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **`tel:` links** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Forms (`<form>`)** | ❌ Stripped | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **`<button>`** | ⚠️ Styled only | ⚠️ Styled only | ⚠️ Styled only | ⚠️ Styled only | ⚠️ Styled only | ⚠️ Styled only |
| **JavaScript** | ❌ Stripped | ❌ Stripped | ❌ Stripped | ❌ Stripped | ❌ Stripped | ❌ Stripped |
| **`onclick` events** | ❌ Stripped | ❌ Stripped | ❌ Stripped | ❌ Stripped | ❌ Stripped | ❌ Stripped |
| **`<iframe>`** | ❌ Blocked | ❌ Blocked | ❌ Blocked | ❌ Blocked | ❌ Blocked | ❌ Blocked |
| **`<video>`** | ❌ No | ❌ No | ❌ No | ⚠️ Limited | ❌ No | ❌ No |
| **`<audio>`** | ❌ No | ❌ No | ❌ No | ⚠️ Limited | ❌ No | ❌ No |

### Character Limits

| Client | Character Limit | Notes |
|--------|----------------|-------|
| Gmail | ~10,000 chars | HTML code including styles |
| Outlook Desktop | No strict limit | Large signatures may cause performance issues |
| Outlook.com | ~10,000 chars | Similar to Gmail |
| Apple Mail | No strict limit | - |
| Thunderbird | No strict limit | - |
| Yahoo Mail | ~5,000 chars (recommended) | May strip content if too large |

### Market Share (2024-2025 estimates)

| Client | Desktop | Mobile | Overall |
|--------|---------|--------|---------|
| Gmail | ~35% | ~40% | ~37% |
| Apple Mail | ~10% | ~35% | ~25% |
| Outlook | ~30% | ~5% | ~15% |
| Yahoo Mail | ~8% | ~5% | ~6% |
| Others | ~17% | ~15% | ~17% |

**Legend:**
- ✅ **Full Support** - Works as expected
- ⚠️ **Partial/Buggy** - Works with limitations or inconsistencies
- ❌ **No Support** - Doesn't work or is blocked

---

## Detailed Client Information

## **Gmail** (Web & Mobile)

- ✅ Good HTML support
- ✅ Inline CSS works perfectly
- ⚠️ **Dark mode**: Automatically inverts small monochrome icons
- ⚠️ Character limit: ~10,000 characters
- ✅ External images loaded via Google proxy
- ⚠️ Removes `<style>` tags - only inline CSS works
- ✅ Supports most safe CSS properties

**Dark Mode Behavior:**
- Small images (< 32-40px) and monochrome images get inverted
- Large images and colorful images remain unchanged
- Text colors may be adjusted automatically

---

## **Outlook** (Windows/Mac Desktop)

- ⚠️ **Uses Microsoft Word for HTML rendering!** - Very outdated CSS support
- ❌ Doesn't support `max-width`, `min-width`
- ❌ `padding` works inconsistently
- ❌ `border-radius` doesn't work
- ❌ `background-size`, `box-shadow` not supported
- ✅ But tables work well
- ⚠️ **Dark mode**: Does NOT invert images, but changes background to dark
- 🔧 For dark mode, use `<td style="background-color: transparent;">` to avoid white backgrounds
- ⚠️ May replace fonts with Times New Roman if font-family is not recognized

**Important Notes:**
- Outlook 2007-2019 uses Word rendering engine (not a browser)
- Outlook 365 (newer versions) have slightly better support but still limited
- Always test in Outlook if targeting corporate users

---

## **Outlook.com** (Web Version)

- ✅ Much better CSS support than desktop Outlook
- ✅ Works almost like Gmail
- ⚠️ **Dark mode**: Partially inverts colors, adds `color-scheme: dark`
- ✅ Supports more modern CSS properties
- ⚠️ Still filters some CSS aggressively

---

## **Apple Mail** (macOS/iOS)

- ✅✅ **Best CSS support among all email clients**
- ✅ Supports even some CSS3 properties
- ✅ `@media (prefers-color-scheme: dark)` works!
- ⚠️ **Dark mode**: Does NOT automatically invert images
- ⚠️ But changes text color - use explicit colors in styles
- ✅ Excellent responsive support
- ✅ WebKit-based, similar to Safari

**Dark Mode Support:**
```html
<!-- Apple Mail respects media queries -->
@media (prefers-color-scheme: dark) {
  .text { color: #ffffff !important; }
}
```

---

## **Thunderbird**

- ✅ Good HTML/CSS support
- ✅ Similar to Firefox rendering
- ⚠️ **Dark mode**: Behavior depends on version
- ✅ External images blocked by default (like most clients)
- ✅ Better support than Outlook, not as good as Apple Mail

---

## **Yahoo Mail**

- ⚠️ Moderate CSS support
- ⚠️ Aggressively filters styles
- ⚠️ Adds its own classes and styles
- ⚠️ Dark mode behavior is unpredictable
- ⚠️ May strip certain attributes
- ⚠️ Less reliable than Gmail or Apple Mail

---

## **Mobile Clients**

### **iOS Mail**
- ✅ Excellent CSS support (WebKit-based)
- ⚠️ Automatically converts phone numbers and emails to links (use `<a>` tags to control styling)
- ⚠️ Dark mode: Doesn't invert images, but changes text colors
- ✅ Respects media queries
- ✅ Good responsive support

### **Android Gmail**
- ✅ Similar to web Gmail
- ⚠️ Inverts small icons in dark mode
- ✅ Good responsive support
- ✅ External images loaded via Google proxy

### **Samsung Email**
- ⚠️ Variable support depending on version
- ⚠️ Dark mode behavior inconsistent
- ✅ Generally decent HTML support

---

## **Cross-Client Compatibility Best Practices**

### 1. **Colors and Dark Mode**

```html
<!-- Always specify explicit colors for text -->
<td style="color: #000000;">
  Text content
</td>

<!-- For Outlook dark mode, use transparent backgrounds -->
<!--[if mso]>
<td style="background-color: transparent !important;">
<![endif]-->

<!-- For links, always specify color -->
<a href="tel:+1234567890" style="color: #000000; text-decoration: none;">
  +1 234 567 890
</a>
```

### 2. **Images**

```html
<!-- Always include: width, height, alt, display: block, border: 0 -->
<img src="https://example.com/image.png"
     width="150"
     height="50"
     alt="Logo"
     style="display: block; border: 0; max-width: 100%; height: auto;">

<!-- IMPORTANT: -->
<!-- - Must be hosted on HTTPS server -->
<!-- - Base64 does NOT work in Gmail -->
<!-- - Always use absolute URLs, not relative paths -->
```

**Image Formats:**
- **PNG**: Best for logos and icons (transparency support)
- **JPG**: Best for photos
- **GIF**: Works but avoid animations (blocked in many clients)
- **SVG**: NOT recommended (blocked or rendered incorrectly)

### 3. **Layout: Tables vs. Divs**

```html
<!-- ✅ GOOD: Works in all clients including Outlook -->
<table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;">
  <tr>
    <td>Content</td>
  </tr>
</table>

<!-- ❌ BAD: Doesn't work in Outlook -->
<div style="display: flex;">
  <div>Content</div>
</div>

<!-- ❌ BAD: Doesn't work in Outlook -->
<div style="display: grid;">
  <div>Content</div>
</div>
```

### 4. **Fonts**

**Safe Fonts (Work Everywhere):**
- Arial
- Helvetica
- Georgia
- Times New Roman
- Verdana
- Courier New

```html
<!-- Always provide fallbacks -->
<td style="font-family: Arial, Helvetica, sans-serif;">
  Text
</td>
```

**Web Fonts:**
- ❌ `@import` doesn't work in Gmail
- ❌ `<link>` to Google Fonts blocked in most clients
- ❌ `@font-face` has limited support
- 💡 Stick to system fonts for maximum compatibility

### 5. **Width and Responsive Design**

```html
<!-- Desktop: Maximum 600px width -->
<table style="max-width: 600px; width: 100%;">
  <tr>
    <td>Content</td>
  </tr>
</table>

<!-- Images: Make responsive -->
<img src="logo.png" width="150" style="max-width: 100%; height: auto;">
```

**Key Points:**
- Desktop emails should be 500-600px wide maximum
- Outlook ignores `max-width`, so use fixed `width` as fallback
- Use `width="100%"` and `max-width: 600px` together
- Images should have `max-width: 100%; height: auto;` for mobile

### 6. **Prohibited CSS Properties**

These properties don't work in Outlook and should be avoided:

```css
/* ❌ Don't use: */
display: flex;
display: grid;
position: absolute;
position: relative;
position: fixed;
box-shadow;
border-radius; /* Partial support */
transform;
animation;
transition;
float; /* Unreliable */
```

### 7. **Links and Buttons**

```html
<!-- ✅ GOOD: Text link with explicit styling -->
<a href="https://example.com" style="color: #1a73e8; text-decoration: underline;">
  Link text
</a>

<!-- ✅ GOOD: Button using table (works everywhere) -->
<table cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td style="background-color: #1a73e8; padding: 12px 24px; border-radius: 4px;">
      <a href="https://example.com" style="color: #ffffff; text-decoration: none; font-weight: bold;">
        Button Text
      </a>
    </td>
  </tr>
</table>

<!-- ⚠️ For phone numbers (prevents auto-styling on mobile): -->
<a href="tel:+18777377178" style="color: inherit; text-decoration: none;">
  +1 877 737 7178
</a>
```

### 8. **Spacing**

```html
<!-- Use cellpadding and cellspacing on tables -->
<table cellspacing="0" cellpadding="0">
  <!-- Then use padding on cells -->
  <tr>
    <td style="padding: 12px;">Content</td>
  </tr>
</table>

<!-- Or use empty spacer cells -->
<tr>
  <td style="height: 20px; line-height: 20px;">&nbsp;</td>
</tr>
```

---

## **Your Signature Compatibility Analysis**

### ✅ **What Works Well:**
- ✅ Table-based layout - compatible with all clients
- ✅ Inline CSS only
- ✅ System fonts (Arial, Helvetica)
- ✅ External images on HTTPS
- ✅ Simple structure without complex CSS
- ✅ Width constraint (max-width: 600px)
- ✅ Phone number wrapped in `<a>` tag

### ⚠️ **Known Issues:**

**1. Icon Inversion in Gmail Dark Mode**
- Small (28px) black icons will be inverted to white in Gmail dark mode
- This is normal behavior and many companies accept it

**Solutions:**
- Use colored icons instead of black
- Use gray (#666666) icons instead of black - less likely to be inverted
- Leave as is - this is standard behavior

**2. Outlook Dark Mode**
- Background may change to dark, but images won't invert
- Text colors should be explicit (already done in your signature)

---

## **Testing Recommendations**

### Must-Test Clients:
1. **Gmail** (web) - Most popular
2. **Outlook** (desktop) - Corporate standard
3. **Apple Mail** (iOS) - Mobile users
4. **Android Gmail** - Mobile users
5. **Outlook.com** (web) - Common among users

### Testing Tools:
- **Litmus** (litmus.com) - Paid, shows previews in 90+ clients
- **Email on Acid** (emailonacid.com) - Paid, comprehensive testing
- **Mailtrap** (mailtrap.io) - Free tier available
- **Manual Testing** - Send to yourself on different devices

### Test Checklist:
- [ ] Images load correctly
- [ ] Links are clickable
- [ ] Phone number is styled correctly (not auto-linked)
- [ ] Signature fits within 600px width
- [ ] Works in light and dark modes
- [ ] Text is readable
- [ ] No broken layout in Outlook
- [ ] Responsive on mobile devices

---

## **Dark Mode Strategies**

### Option 1: Ignore Dark Mode
- Let clients handle it automatically
- Most common approach
- Least control but most compatible

### Option 2: Explicit Colors
```html
<!-- Always specify text colors -->
<td style="color: #000000;">Dark text</td>

<!-- For dark mode, some clients will override anyway -->
```

### Option 3: Color-Agnostic Icons
```html
<!-- Use colored icons that look good on any background -->
<img src="colored-icon.png" alt="Icon">

<!-- Or use gray icons (#666666) instead of pure black -->
```

### Option 4: Media Queries (Apple Mail only)
```html
<style>
@media (prefers-color-scheme: dark) {
  .dark-mode-text { color: #ffffff !important; }
  .dark-mode-image { filter: brightness(0.8); }
}
</style>
```
⚠️ Only works in Apple Mail - other clients ignore this

---

## **Character Limits**

| Client | Limit | Notes |
|--------|-------|-------|
| Gmail | ~10,000 HTML chars | Truncates on save if exceeded |
| Outlook | No strict limit | But large signatures may cause issues |
| Apple Mail | No strict limit | |
| Yahoo Mail | ~5,000 chars recommended | May strip content |

**Your signature**: ~2,500-3,000 characters ✅ Well within limits

---

## **Security Considerations**

### ❌ Blocked/Stripped:
- `<script>` tags - Completely removed
- `<iframe>` - Blocked
- `<form>` - Doesn't work
- `onclick`, `onload`, etc. - Ignored
- `javascript:` URLs - Blocked
- `<object>`, `<embed>` - Blocked

### ✅ Allowed:
- `<table>`, `<tr>`, `<td>`
- `<img>` with external HTTPS URLs
- `<a>` with https/http/mailto/tel URLs
- Inline styles (most properties)
- `<strong>`, `<em>`, `<span>`

---

## **Final Recommendations for Maximum Compatibility**

1. **Use tables for layout** - Not divs
2. **Inline CSS only** - No `<style>` tags or external CSS
3. **System fonts only** - Arial, Helvetica, etc.
4. **External HTTPS images** - No Base64
5. **Max width 600px** - With `max-width: 100%` for mobile
6. **Explicit colors** - Always specify text and link colors
7. **Simple structure** - Avoid complex nesting
8. **Test everywhere** - Especially Gmail, Outlook, and iOS Mail

Your signature already follows all these best practices! 🎉
