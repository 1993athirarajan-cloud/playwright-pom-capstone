class HomePage {
    constructor(page) {
        this.page = page;

        this.mensOuterwearLink = page.locator('#tabContainer').getByRole('link', {
            name: "Men's Outerwear",
            exact: true
        });

        this.ladiesOuterwearLink = page.locator('#tabContainer').getByRole('link', {
            name: "Ladies Outerwear",
            exact: true
        });

        this.mensTshirtsLink = page.locator('#tabContainer').getByRole('link', {
            name: "Men's T-Shirts",
            exact: true
        });

        this.ladiesTshirtsLink = page.locator('#tabContainer').getByRole('link', {
            name: "Ladies T-Shirts",
            exact: true
        });

        this.cartIcon = page.locator('#tabContainer').getByRole('link', {
            name: /cart/i
        });
    }

    async navigate() {
        await this.page.goto('/');
    }

    async clickMensOuterwear() {
        await this.mensOuterwearLink.click();
    }

    async clickLadiesOuterwear() {
        await this.ladiesOuterwearLink.click();
    }

    async clickMensTshirts() {
        await this.mensTshirtsLink.click();
    }

    async clickLadiesTshirts() {
        await this.ladiesTshirtsLink.click();
    }
}

module.exports = { HomePage };