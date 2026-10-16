const { expect } = require("@playwright/test");

class CartPage {
    constructor(page) {
        this.page = page;
        this.cart = page.locator('shop-cart');
        this.cartProduct = page.locator('shop-cart-item');
        this.quantity = this.cart.getByRole('combobox', { name: 'Change quantity' });
        this.checkoutBox = this.cart.locator('.checkout-box');
        this.totalLabel = this.checkoutBox.getByText('Total:');
        
        // Fix: Target the checkout box or use toContainText instead of toHaveText on a loose text selector
        this.totalPrice = this.checkoutBox; 
    }

    async verifyCartDetails(expectedProduct, expectedPrice) {
        await expect(this.cart).toBeVisible();
        await expect(this.cartProduct).toContainText(expectedProduct);
        await expect(this.quantity).toHaveValue('1');
        await expect(this.totalLabel).toBeVisible();
        
        // Use toContainText so it successfully checks for the price inside the container block
        await expect(this.totalPrice).toContainText(expectedPrice);
    }
}

module.exports = { CartPage };