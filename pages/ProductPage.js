class ProductPage {
    constructor(page) {
        this.page = page;
        this.productLink = page.getByRole('link',{
            name:'Anvil L/S Crew Neck - Grey'
        });

        this.sizeDropdown = page.getByLabel('Size');

        this.addToCartButton = page.getByRole('button', {
            name: 'Add this item to cart',
            exact: true
        });

        this.viewcartlink = page.getByRole('link', {
            name: 'View Cart',
            exact: true
        });
       
    }

    async selectSize(size) {
        await this.sizeDropdown.selectOption(size);
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.viewcartlink.click();
    }
}

module.exports = { ProductPage };