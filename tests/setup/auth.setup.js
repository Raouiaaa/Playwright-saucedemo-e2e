import { test as setup, expect } from "@playwright/test"

setup('authenticate as a standard user', async ({page}) => {
    await page.goto('/');
    await page.locator('#user-name').fill(process.env.USERNAME);
    await page.locator('#password').fill(process.env.PASSWORD);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('/inventory.html');
    await expect(
        page.getByText('Products', { exact: true })
    ).toBeVisible();

    //sauvegarder l'état de stockage dans un fichier JSON
    await page.context().storageState({ 
        path: 'playwright/.auth/standard-user.json' 
    });
    
})