import {test, expect} from "@playwright/test"

test('testing the login form with valid credentials', async({page}) => {
    await page.goto('/');
    await page.locator('#user-name').fill(process.env.USERNAME);
    await page.locator('#password').fill(process.env.PASSWORD);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('/inventory.html');
});

test('testing the login form with invalid credentials', async({page}) => {
    await page.goto('/');
    await page.locator('#user-name').fill('invalid_user');
    await page.locator('#password').fill('invalid_password');
    await page.locator('#login-button').click();
    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('Username and password do not match any user in this service');
});

test('testing the login form with empty credentials', async({page}) => {
    await page.goto('/');
    await page.locator('#login-button').click();
    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('Username is required');
});