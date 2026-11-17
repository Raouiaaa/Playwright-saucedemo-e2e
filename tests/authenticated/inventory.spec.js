import {test, expect} from "@playwright/test";
import { InventoryPage } from "../../pages/InventoryPage.js";

test('adding an item to the cart', async({page}) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.goto();

    await inventoryPage.addItemToCart('sauce-labs-backpack');
    await inventoryPage.addItemToCart('sauce-labs-bike-light');
    
    await expect(inventoryPage.cartBadge).toHaveText('2');
});