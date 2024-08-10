import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
    test('should load successfully', async ({ page }) => {
        await page.goto('/projects');
        await expect(page).toHaveTitle('Projects');
    });

    test('should have correct heading', async ({ page }) => {
        await page.goto('/projects');
        const heading = page.locator('h1');
        await expect(heading).toContainText('C5 Projects');
    });

    test('should display project list', async ({ page }) => {
        await page.goto('/projects');
        const projectsList = page.locator('#projects-list');
        await expect(projectsList).toBeVisible();
    });

    test('should have project cards with correct elements', async ({ page }) => {
        await page.goto('/projects');
        await page.waitForSelector('.bg-gradient-to-br');
        const projectCard = page.locator('.bg-gradient-to-br').first();
        await expect(projectCard.locator('h3')).toBeVisible();
        await expect(projectCard.locator('.project-description')).toBeVisible();
        await expect(projectCard.locator('svg')).toBeVisible(); // GitHub icon
    });
});