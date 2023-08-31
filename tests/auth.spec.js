const { test, expect } = require('@playwright/test');

test.describe('Authentication & Authorization', () => {
    test('Sign in with existing credentials', async ({ page }) => {
        await page.goto('https://coding.pasv.us/user/login')

        await page.locator('#normal_login_email').fill('yulia.vl@yahoo.com')
        await page.locator('#normal_login_password').fill('Blue5055@')
        await page.locator('button[type="submit"]').click()

        await expect(page.locator('.ant-avatar-square')).toBeVisible()
    })
})