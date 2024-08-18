import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
    test('should load successfully', async ({ page }) => {
        await page.goto('/blog');
        await expect(page).toHaveTitle('Blog');
    });

    test('should have correct heading', async ({ page }) => {
        await page.goto('/blog');
        const heading = page.locator('h1');
        await expect(heading).toContainText('C5 Blog');
    });

    test('should have "Create New Post" button', async ({ page }) => {
        await page.goto('/blog');
        const newPostButton = page.locator('#new-post-button');
        await expect(newPostButton).toBeVisible();
    });

    test('should display blog posts', async ({ page }) => {
        await page.goto('/blog');
        const blogPosts = page.locator('#blog-posts');
        await expect(blogPosts).toBeVisible();
    });

    test('should open blog post modal on click', async ({ page }) => {
        await page.goto('/blog');
        await page.waitForSelector('.bg-gradient-to-br');
        await page.click('.bg-gradient-to-br');
        const modal = page.locator('#blog-modal');
        await expect(modal).toBeVisible();
    });
});