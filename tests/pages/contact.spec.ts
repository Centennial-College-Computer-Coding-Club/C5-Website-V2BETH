import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
    test('should load successfully', async ({ page }) => {
        await page.goto('/contact');
        await expect(page).toHaveTitle('Contact');
    });

    test('should have correct heading', async ({ page }) => {
        await page.goto('/contact');
        const heading = page.locator('h1');
        await expect(heading).toContainText('Contact C5');
    });

    test('should have contact form', async ({ page }) => {
        await page.goto('/contact');
        const form = page.locator('form');
        await expect(form).toBeVisible();
        await expect(page.locator('#name')).toBeVisible();
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#message')).toBeVisible();
    });

    test('should submit form successfully', async ({ page }) => {
        await page.goto('/contact');
        await page.fill('#name', 'Test User');
        await page.fill('#email', 'test@example.com');
        await page.fill('#message', 'This is a test message');
        await page.click('button[type="submit"]');
        const successMessage = page.locator('text=Your message has been sent successfully');
        await expect(successMessage).toBeVisible();
    });
});