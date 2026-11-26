const { test } = require('@playwright/test');

const { HomePage } = require('../pages/Homepage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

const testData = require('../data/testData.json');

test('Verify checkout email field', async ({ page }) => {

    const data = testData[0];

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.navigate();

    await homePage.clickMensOuterwear();

    await productPage.productLink.click();
    await productPage.selectSize(data.size);
    await productPage.addToCart();

    await productPage.openCart();

    await cartPage.openCheckout();

    await checkoutPage.verifyCheckoutPage();
    await checkoutPage.verifyEmailField();
    await checkoutPage.verifyPhoneField();

});