import { test, expect } from '../../fixtures/test-fixtures.js';

test('adding an item to the cart', async({inventoryPage}) => {
    await inventoryPage.goto();

    await inventoryPage.addItemToCart('sauce-labs-backpack');
    await inventoryPage.addItemToCart('sauce-labs-bike-light');
    
    await expect(inventoryPage.cartBadge).toHaveText('2');
});