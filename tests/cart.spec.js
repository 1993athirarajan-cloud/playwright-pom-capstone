const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/Homepage');
const { ShopPage } = require('../pages/ShopPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const testData = require('../data/testData.json') ;
for (const data of testData){
test(`@smoke Add product with size ${data.size}`, async ({ page }) => {
    const homePage = new HomePage(page);
    const shopPage = new ShopPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    await homePage.navigate();
    //await shopPage.openProduct();
    await homePage.clickMensOuterwear();
    await productPage.productLink.click();
    await productPage.selectSize(data.size);
    await productPage.addToCart();
    await productPage.openCart();
    await expect(cartPage.cartProduct).toContainText(data.productName);
    await expect(cartPage.quantity).toHaveValue(String(data.quantity));
   // await expect(cartPage.cartProduct).toHaveValue('1');
    //await expect(cartPage.totalLabel).toBeVisible();
    await expect(cartPage.totalPrice).toBeVisible();
    await cartPage.verifyCartDetails(
        data.productName,
        data.expectedPrice
    );
    await cartPage.openCheckout()
     await expect(page).toHaveURL(/\/checkout$/);
    

});
}