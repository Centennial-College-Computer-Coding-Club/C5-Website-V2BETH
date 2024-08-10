import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
    test('should load successfully', async ({ page }) => {
        await page.goto('/about');
        await expect(page).toHaveTitle('About');
    });

    test('should have correct heading', async ({ page }) => {
        await page.goto('/about');
        const heading = page.locator('h1');
        await expect(heading).toContainText('About C5');
    });

    test('should display mission section', async ({ page }) => {
        await page.goto('/about');
        const missionSection = page.locator('h2:text("Our Mission")');
        await expect(missionSection).toBeVisible();
    });

    test('should display team members', async ({ page }) => {
        await page.goto('/about');
        const teamSection = page.locator('h2:text("Meet Our Team")');
        await expect(teamSection).toBeVisible();
        const teamMembers = page.locator('.team-card');
        await expect(teamMembers).toHaveCount(3);
    });

    test('should have "Become a Member" button', async ({ page }) => {
        await page.goto('/about');
        const memberButton = page.locator('a:text("Become a Member")');
        await expect(memberButton).toBeVisible();
        await expect(memberButton).toHaveAttribute('href', '/join');
    });
});