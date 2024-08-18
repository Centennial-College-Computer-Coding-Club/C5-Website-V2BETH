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

    test('should have three feature sections', async ({ page }) => {
        await page.goto('/');
        const featureSections = page.locator('.grid > div');
        await expect(featureSections).toHaveCount(3);
    });

    test('should have correct feature titles', async ({ page }) => {
        await page.goto('/');
        const featureTitles = page.locator('.grid h3');
        await expect(featureTitles).toHaveCount(3);
        await expect(featureTitles.nth(0)).toHaveText('Learn');
        await expect(featureTitles.nth(1)).toHaveText('Connect');
        await expect(featureTitles.nth(2)).toHaveText('Innovate');
    });

    test('should have elements with animation classes', async ({ page }) => {
        await page.goto('/');
        const fadeInDownElements = page.locator('.animate-fade-in-down');
        const fadeInUpElements = page.locator('.animate-fade-in-up');

        await expect(fadeInDownElements).toHaveCount(1);
        await expect(fadeInUpElements).toHaveCount(3);
    });

    test('should have footer', async ({ page }) => {
        await page.goto('/');
        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
    });
});