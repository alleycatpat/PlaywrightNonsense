const GoogleHomePage = require('./../../pages/googleHomePage');
const { test, expect, chromium } = require('@playwright/test');

test('Google search box is visible', async ({page}) => {
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();

    // const googleHomePage = new GoogleHomePage(page);

    // await googleHomePage.navigate();

    // try{
    //     await googleHomePage.isSearchBoxVisible();
    //     console.log("Search box visible");
    // } catch (error){
    //     console.log(error);
    // }

    // await browser.close();

    const googleHomePage = new GoogleHomePage(page);
    await googleHomePage.navigate();

    await googleHomePage.isSearchBoxVisible();
});