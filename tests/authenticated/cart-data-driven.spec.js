import { test, expect } from '../../fixtures/test-fixtures.js';
import { cartCases } from '../../data/cart-data.js';

for (const data of cartCases) {
  test(`cart - ${data.description}`, async ({ inventoryPage }) => {
    await inventoryPage.goto();

    for (const product of data.products) {
      await inventoryPage.addItemToCart(product);
    }

    await expect(inventoryPage.cartBadge)
      .toHaveText(data.expectedCount.toString());
  });
}