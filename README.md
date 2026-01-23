# FLS Email Signature Generator

Generate email signatures for First Line Software employees.

## Usage

1. Open `index.html` in browser (or via `python3 -m http.server 8000`)
2. Enter your name and job title
3. Click "Copy Signature"
4. Paste into Gmail settings

## Development

### Running the Express Server

```bash
npm install
npm start
```

The server will start on `http://localhost:3000`

### Running Tests

```bash
npm test              # Run tests in headless mode
npm run test:ui       # Run tests with UI
npm run test:headed   # Run tests in headed mode
```

Before running tests, make sure to install Playwright browsers:
```bash
npx playwright install chromium
```

## Setup GitHub Pages

1. Push to GitHub
2. Settings → Pages → Source: main branch
3. Update `GITHUB_BASE_URL` in `index.html` with your Pages URL
