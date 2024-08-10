import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test('should load successfully', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle('Home');
    });

    test('should have correct heading', async ({ page }) => {
        await page.goto('/');
        const heading = page.locator('h1');
        await expect(heading).toContainText('Welcome to C5');
    });

    test('should have "Join Us" button', async ({ page }) => {
        await page.goto('/');
        const joinButton = page.locator('#joinBtn');
        await expect(joinButton).toBeVisible();
        await expect(joinButton).toHaveAttribute('href', '/join');
    });

    test('should have "Upcoming Events" button', async ({ page }) => {
        await page.goto('/');
        const eventsButton = page.locator('a:text("Upcoming Events")');
        await expect(eventsButton).toBeVisible();
        await expect(eventsButton).toHaveAttribute('href', '/events');
    });

    test('should have footer', async ({ page }) => {
        await page.goto('/');
        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
    });
});