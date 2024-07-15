const { test, expect } = require('@playwright/test');

test('Valid Login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder("Username").type("Admin")

    await page.locator("input[name='password']").type("Admin123")

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})
