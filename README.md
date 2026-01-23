# FLS Email Signature Generator

Generate email signatures for First Line Software employees.

## Development

This project uses Express.js for local development and Playwright for automated testing across multiple browsers.

### Setup

1. Install dependencies:
```bash
npm install
```

2. Copy the environment file and configure if needed:
```bash
cp .env.example .env
```

3. Install Playwright browsers:
```bash
npx playwright install
```

For WebKit support on Linux, install system dependencies:
```bash
sudo npx playwright install-deps
```

### Running the Development Server

```bash
npm start
```

The server will start on `http://localhost:3002` (configurable via `.env` file).

### Running Tests

Tests run on three browsers: **Chromium**, **Firefox**, and **WebKit** (Safari).

```bash
npm test              # Run all tests in headless mode
npm run test:ui       # Run tests with Playwright UI
npm run test:headed   # Run tests in headed mode (see browser windows)
```

### Usage

1. Open `http://localhost:3002` in your browser (or deploy to production)
2. Enter your name and job title
3. Click "Copy Signature"
4. Paste into Gmail settings

## Production

The application is hosted on GitHub Pages. The static `index.html` file works standalone without the Express server in production.
