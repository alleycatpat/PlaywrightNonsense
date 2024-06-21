const {expect}  = require('@playwright/test');

class GoogleHomePage{

    constructor(page){
        this.page = page;
        this.searchBox = page.locator('input[name="q"]');
    }

    async navigate(){
        await this.page.goto('https://www.google.com');
    }

    async isSearchBoxVisible(){
        await expect(this.searchBox).toBeVisible();
    }
}

module.exports = GoogleHomePage;