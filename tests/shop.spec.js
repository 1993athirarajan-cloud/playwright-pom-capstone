const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/Homepage');

test('@smoke Navigate to Men\'s Outerwear', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.clickMensOuterwear();

    await expect(page).toHaveURL(/mens_outerwear/);
});