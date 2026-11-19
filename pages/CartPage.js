
export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
    }

    getProductByName(productName) {
        return this.cartItems.filter({ 
            has: this.page.locator('.inventory_item_name').getByText(productName, { exact: true })
        });
    }
}