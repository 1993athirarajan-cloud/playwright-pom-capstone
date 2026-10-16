const {test,expect }= require("@playwright/test");
const { HomePage } =require( "../pages/Homepage")

test('verify polymer shop homepage',async({page})=>{
    const homepage=new HomePage(page);
    await homepage.navigate();
    await expect(page).toHaveTitle(/SHOP/);
});