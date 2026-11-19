
export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async goto() {
        await this.page.goto('/inventory.html');
    } 

    async addItemToCart(productSlug) {
        await this.page.locator(`#add-to-cart-${productSlug}`).click();
    }

    async goToCart() {
        await this.cartLink.click();
    }
}