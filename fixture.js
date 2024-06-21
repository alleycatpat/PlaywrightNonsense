const baseTest = require("@playwright/test");
import { GoogleHomeScreen } from "./pages/google";

exports.test = baseTest.test.extend({
    googleHome: async({page}, use) => {
        const googleHome = new GoogleHomeScreen(page);
        await googleHome.navigateToUrl();
        await googleHome.verifyingGoogleSearchScreen();
        await use(googleHome);
    },
});

exports.expect = baseTest.expect;