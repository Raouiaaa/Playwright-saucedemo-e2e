import { test , expect } from '../../fixtures/test-fixtures.js';

test('adding an item to the cart', async({page, inventoryPage, cartPage}) => {
    
    await inventoryPage.goto();

    // select the product to add to the cart
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    await inventoryPage.addItemToCart('sauce-labs-bike-light');

    // go to the cart page
    await inventoryPage.goToCart();
    await expect(page).toHaveURL('/cart.html');

    // verify that the items are in the cart
    await expect(cartPage.getProductByName('Sauce Labs Backpack')).toBeVisible();
    await expect(cartPage.getProductByName('Sauce Labs Bike Light')).toBeVisible();
    }
)
