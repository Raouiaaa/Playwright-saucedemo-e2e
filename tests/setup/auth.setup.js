import { test as setup, expect } from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage.js"

setup('authenticate as a standard user', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);

    await expect(page).toHaveURL('/inventory.html');
    await expect(
        page.getByText('Products', { exact: true })
    ).toBeVisible();

    //sauvegarder l'état de stockage dans un fichier JSON
    await page.context().storageState({ 
        path: 'playwright/.auth/standard-user.json' 
    });
    
})