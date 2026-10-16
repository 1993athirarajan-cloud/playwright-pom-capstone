const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/Homepage');
const { ShopPage } = require('../pages/ShopPage');


test('@smoke Select Anvil Grey product', async ({ page }) => {
    const homePage = new HomePage(page);
    const shopPage = new ShopPage(page);

    await homePage.navigate();
    await homePage.clickMensOuterwear();

    await shopPage.selectAnvilGreyProduct();

    await expect(page).toHaveURL(/detail\/mens_outerwear/);
});