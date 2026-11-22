import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    inventoryPage: async ({page}, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },
    cartPage: async ({page}, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});

export { expect };