import { test , expect } from '../../fixtures/test-fixtures.js';

test.beforeEach(async({loginPage}) => {
    await loginPage.goto();
});

test('login with valid credentials', async({page, loginPage}) => {
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await expect(page).toHaveURL('/inventory.html');
});

test('login with invalid credentials', async({page, loginPage}) => {
    await loginPage.login('invalid_user', 'invalid_password');
    await expect(loginPage.errorMessage).toContainText(
        'Username and password do not match any user in this service'
    );
});

test('login with empty credentials', async({page, loginPage}) => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toContainText(
        'Username is required'
    );     
});