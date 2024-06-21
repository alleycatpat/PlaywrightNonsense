const {test} = require('../../fixture.js');

test("Navite to Google home screen and verify it appears", async ({ googleHome }) =>{
    await googleHome.navigateToUrl();
    await googleHome.verifyingGoogleSearchScreen();
});