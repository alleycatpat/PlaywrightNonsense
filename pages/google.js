const {expect} = require("@playwright/test");

exports.GoogleHomeScreen = class GoogleHomeScreen {
    constructor(page){
        this.page = page;
        // this.searchBox = page.locator(getByLabel('Search', { exact: true }));
        this.searchBox = page.locator("#q");
        // this.searchBox = page.getByName('q', {exact: true});
        // this.searchButton = page.locator(getByRole('button', { name: 'Google Search' }));
        this.searchButton = page.locator("#btnK");
        // this.searchButton = page.getByName('btnK', {exact: true});

    }

    async navigateToUrl() {
        await this.page.goto("https://www.google.com");
    }

    async verifyingGoogleSearchScreen(){
        await expect(this.page).toHaveTitle("Google");
        await expect(this.searchBox).toBeVisible();
        await expect(this.searchButton).toBeVisible();
    }

    async enterSearchText(searchText){
        await this.searchBox.fill(searchText);
        await this.searchButton.click();
    }
};

