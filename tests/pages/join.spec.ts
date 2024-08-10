import { test, expect } from '@playwright/test';

test.describe('Join Page', () => {
    test('should load successfully', async ({ page }) => {
        await page.goto('/join');
        await expect(page).toHaveTitle('Join');
    });

    test('should have correct heading', async ({ page }) => {
        await page.goto('/join');
        const heading = page.locator('h1');
        await expect(heading).toContainText('Join C5');
    });

    test('should have join form', async ({ page }) => {
        await page.goto('/join');
        const form = page.locator('form');
        await expect(form).toBeVisible();
        await expect(page.locator('#first_name')).toBeVisible();
        await expect(page.locator('#last_name')).toBeVisible();
        await expect(page.locator('#email')).toBeVisible();
    });

    test('should submit form successfully', async ({ page }) => {
        await page.goto('/join');
        await page.fill('#first_name', 'John');
        await page.fill('#last_name', 'Doe');
        await page.fill('#email', 'john.doe@example.com');
        await page.click('button[type="submit"]');
        const successMessage = page.locator('text=You\'ve successfully joined C5');
        await expect(successMessage).toBeVisible();
    });
});