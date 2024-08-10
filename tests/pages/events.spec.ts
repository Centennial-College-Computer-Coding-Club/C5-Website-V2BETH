import { test, expect } from '@playwright/test';

test.describe('Events Page', () => {
    test('should load successfully', async ({ page }) => {
        await page.goto('/events');
        await expect(page).toHaveTitle('Events');
    });

    test('should have correct heading', async ({ page }) => {
        await page.goto('/events');
        const heading = page.locator('h1');
        await expect(heading).toContainText('C5 Events');
    });

    test('should display calendar', async ({ page }) => {
        await page.goto('/events');
        const calendar = page.locator('#calendar-grid');
        await expect(calendar).toBeVisible();
    });

    test('should display upcoming events', async ({ page }) => {
        await page.goto('/events');
        const upcomingEvents = page.locator('#events-list');
        await expect(upcomingEvents).toBeVisible();
    });

    test('should open event modal on click', async ({ page }) => {
        await page.goto('/events');
        await page.waitForSelector('.button-accent:text("View Details")');
        await page.click('.button-accent:text("View Details")');
        const modal = page.locator('#event-modal');
        await expect(modal).toBeVisible();
    });
});