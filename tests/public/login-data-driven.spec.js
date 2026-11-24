import { test, expect } from '../../fixtures/test-fixtures.js';
import { loginCases } from '../../data/login-data.js'

for (const data of loginCases) {
  test(`login - ${data.description}`, async ({ loginPage }) => {
    await loginPage.goto();

    await loginPage.login(data.username, data.password);

    await expect(loginPage.errorMessage)
      .toContainText(data.expectedError);
  });
}