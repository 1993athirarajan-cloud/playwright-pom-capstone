const { expect } = require('@playwright/test');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.checkout = page.locator('shop-checkout');
        this.email = this.checkout.locator('#accountEmail');
        this.phone = this.checkout.locator('#accountPhone');
    }

    async verifyCheckoutPage() {
        await expect(this.page).toHaveURL(/\/checkout$/);
        await expect(this.checkout).toBeVisible();
        
    }
    async verifyEmailField() {
    const accountHeading = this.checkout.getByText('Account Information');

    if (await accountHeading.isVisible()) {
        await accountHeading.click();
    }

    await expect(this.email).toBeVisible();
    await this.email.fill('test@example.com');
    await expect(this.email).toHaveValue('test@example.com');
}
    async verifyPhoneField() {
    await expect(this.phone).toBeVisible();
    await this.phone.fill('9876543210');
    await expect(this.phone).toHaveValue('9876543210');
}
}

module.exports = { CheckoutPage };