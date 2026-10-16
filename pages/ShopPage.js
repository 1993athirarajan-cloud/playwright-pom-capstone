class ShopPage {
    constructor(page) {
        this.page = page;

        this.mensOuterwearHeading = page.getByRole('heading', {
            name: "Men's Outerwear"
        });

        this.anvilGreyProduct = page.getByRole('link', {
            name: 'Anvil L/S Crew Neck - Grey'
        });
    }

    async selectMensOuterwear() {
        await this.mensOuterwearHeading.click();
    }

    async selectAnvilGreyProduct() {
        await this.anvilGreyProduct.click();
    }
}

module.exports = { ShopPage };