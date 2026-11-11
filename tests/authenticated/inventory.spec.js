import {test, expect} from "@playwright/test";

test('adding an item to the cart', async({page}) => {
    await page.goto('/inventory.html');
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});