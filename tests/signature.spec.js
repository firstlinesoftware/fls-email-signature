const { test, expect } = require('@playwright/test');

test.describe('FLS Email Signature Generator', () => {
  test('should load the page successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page title is correct
    await expect(page).toHaveTitle('Create your FLS email signature');
    
    // Check that the main heading is present
    const heading = page.locator('h1');
    await expect(heading).toContainText('Create your FLS email signature');
  });

  test('should have input fields for name and job title', async ({ page }) => {
    await page.goto('/');
    
    // Check that input fields exist
    const nameInput = page.locator('#in-name');
    const jobInput = page.locator('#in-job');
    
    await expect(nameInput).toBeVisible();
    await expect(jobInput).toBeVisible();
    
    // Check default values
    await expect(nameInput).toHaveValue('John Smith');
    await expect(jobInput).toHaveValue('Software Engineer');
  });

  test('should update signature preview when inputs change', async ({ page }) => {
    await page.goto('/');
    
    const nameInput = page.locator('#in-name');
    const jobInput = page.locator('#in-job');
    const preview = page.locator('#signature-preview');
    
    // Clear and enter new name
    await nameInput.clear();
    await nameInput.fill('Jane Doe');
    
    // Check that preview is updated
    await expect(preview).toContainText('Jane Doe');
    
    // Clear and enter new job title
    await jobInput.clear();
    await jobInput.fill('QA Engineer');
    
    // Check that preview is updated
    await expect(preview).toContainText('QA Engineer');
  });

  test('should have copy signature button', async ({ page }) => {
    await page.goto('/');
    
    const copyButton = page.locator('#btn-copy');
    await expect(copyButton).toBeVisible();
    await expect(copyButton).toContainText('Copy Signature');
  });

  test('should have help button and modal', async ({ page }) => {
    await page.goto('/');
    
    const helpButton = page.locator('#btn-help');
    await expect(helpButton).toBeVisible();
    
    // Click help button
    await helpButton.click();
    
    // Check that modal is visible
    const modal = page.locator('#modal');
    await expect(modal).toHaveClass(/active/);
    
    // Check modal content
    await expect(modal).toContainText('How to import your signature');
    
    // Close modal
    const closeButton = page.locator('#btn-close-modal');
    await closeButton.click();
    
    // Check that modal is hidden
    await expect(modal).not.toHaveClass(/active/);
  });

  test('should toggle dark mode theme', async ({ page }) => {
    await page.goto('/');
    
    const themeButton = page.locator('#btn-theme-toggle');
    const previewCard = page.locator('.preview-card');
    
    // Initially should be light mode
    await expect(previewCard).not.toHaveClass(/preview-dark/);
    
    // Click theme toggle
    await themeButton.click();
    
    // Should now be dark mode
    await expect(previewCard).toHaveClass(/preview-dark/);
    
    // Click again to toggle back
    await themeButton.click();
    
    // Should be light mode again
    await expect(previewCard).not.toHaveClass(/preview-dark/);
  });

  test('should display signature with company logo and social links', async ({ page }) => {
    await page.goto('/');
    
    const preview = page.locator('#signature-preview');
    
    // Check for company name
    await expect(preview).toContainText('First Line Software');
    
    // Check for phone number
    await expect(preview).toContainText('+1 877 737 7178');
    
    // Check for specific images by alt text
    const logo = preview.locator('img[alt="First Line Software"]');
    await expect(logo).toBeVisible();
    
    const websiteIcon = preview.locator('img[alt="Website"]');
    await expect(websiteIcon).toBeVisible();
    
    const linkedInIcon = preview.locator('img[alt="LinkedIn"]');
    await expect(linkedInIcon).toBeVisible();
    
    const instagramIcon = preview.locator('img[alt="Instagram"]');
    await expect(instagramIcon).toBeVisible();
    
    const youtubeIcon = preview.locator('img[alt="YouTube"]');
    await expect(youtubeIcon).toBeVisible();
    
    const podcastIcon = preview.locator('img[alt="Podcasts"]');
    await expect(podcastIcon).toBeVisible();
  });

  test('should have all social media links', async ({ page }) => {
    await page.goto('/');

    const preview = page.locator('#signature-preview');

    // Check for social media links
    const websiteLink = preview.locator('a[href="https://firstlinesoftware.com"]');
    const linkedInLink = preview.locator('a[href="https://www.linkedin.com/company/first-line-software-inc/mycompany/"]');
    const instagramLink = preview.locator('a[href="https://www.instagram.com/firstlinesoftware/"]');
    const youtubeLink = preview.locator('a[href="https://www.youtube.com/@fls_fam"]');
    const podcastLink = preview.locator('a[href="https://podcasts.apple.com/cz/podcast/spam-jam-by-first-line-software/id1761346338"]');

    await expect(websiteLink).toBeVisible();
    await expect(linkedInLink).toBeVisible();
    await expect(instagramLink).toBeVisible();
    await expect(youtubeLink).toBeVisible();
    await expect(podcastLink).toBeVisible();
  });

  test('should copy signature to clipboard', async ({ page, context, browserName }) => {
    const clipboardStrategies = {
      chromium: {
        async grantPermissions() {
          await context.grantPermissions(['clipboard-read', 'clipboard-write']);
        },
        async readClipboard() {
          return await page.evaluate(async () => {
            const clipboardData = await navigator.clipboard.read();
            const htmlBlob = await clipboardData[0].getType('text/html');
            return await htmlBlob.text();
          });
        },
        verify(content) {
          expect(content).toContain('Alice Johnson');
          expect(content).toContain('Senior Developer');
          expect(content).toContain('First Line Software');
          expect(content).toContain('+1 877 737 7178');
          expect(content).toContain('firstlinesoftware.com');
        }
      },
      webkit: {
        async grantPermissions() {
          // Mock clipboard API for WebKit to capture what was written
          await page.addInitScript(() => {
            let clipboardData = '';
            Object.defineProperty(navigator, 'clipboard', {
              value: {
                writeText: async (text) => {
                  clipboardData = text;
                  window.__clipboardData = clipboardData;
                  return Promise.resolve();
                },
                write: async (data) => {
                  const item = data[0];
                  for (const type of item.types) {
                    const blob = await item.getType(type);
                    clipboardData = await blob.text();
                    window.__clipboardData = clipboardData;
                  }
                  return Promise.resolve();
                },
                readText: async () => {
                  return Promise.resolve(window.__clipboardData || '');
                }
              },
              writable: false
            });
          });
        },
        async readClipboard() {
          return await page.evaluate(() => window.__clipboardData);
        },
        verify(content) {
          expect(content).toContain('Alice Johnson');
          expect(content).toContain('Senior Developer');
        }
      },
      default: {
        async grantPermissions() {},
        async readClipboard() {
          return await page.evaluate(async () => {
            return await navigator.clipboard.readText();
          });
        },
        verify(content) {
          expect(content).toContain('Alice Johnson');
          expect(content).toContain('Senior Developer');
        }
      }
    };

    const strategy = clipboardStrategies[browserName] || clipboardStrategies.default;

    await strategy.grantPermissions();
    await page.goto('/');

    await page.locator('#in-name').clear();
    await page.locator('#in-name').fill('Alice Johnson');
    await page.locator('#in-job').clear();
    await page.locator('#in-job').fill('Senior Developer');

    await page.locator('#btn-copy').click();
    await page.waitForTimeout(500);

    const clipboardContent = await strategy.readClipboard();
    strategy.verify(clipboardContent);
  });
});
