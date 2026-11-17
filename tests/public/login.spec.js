import {test, expect} from "@playwright/test"
import {LoginPage} from "../../pages/LoginPage.js"

let loginPage;

test.beforeEach(async({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
});
test('login with valid credentials', async({page}) => {
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await expect(page).toHaveURL('/inventory.html');
});

test('login with invalid credentials', async({page}) => {
    await loginPage.login('invalid_user', 'invalid_password');
    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('Username and password do not match any user in this service');
});

test('login with empty credentials', async({page}) => {
    await loginPage.login('', '');
    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('Username is required');
});