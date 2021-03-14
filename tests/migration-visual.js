
'use strict';

require('chromedriver');
const { Builder, By } = require('selenium-webdriver');
const { Eyes, ClassicRunner, Target, RectangleSize } = require('@applitools/eyes-selenium');
const {Configuration} = require('@applitools/eyes-selenium');
let SuiteConfig = new Configuration();


describe('DemoApp - ClassicRunner', function () {
    let runner, eyes, browser;

    beforeEach(async () => {
        runner = new ClassicRunner();

        // Initialize the eyes SDK (IMPORTANT: make sure your API key is set in the APPLITOOLS_API_KEY env variable).
        eyes = new Eyes(runner);

        // Use Chrome browser
        browser = await new Builder()
            .forBrowser('chrome')
            // .setChromeOptions(new ChromeOptions().headless())
            .build();
    });


    it('Smoke Test', async () => {
        SuiteConfig = new Configuration()

        eyes.setSaveDiffs(true);
        await eyes.open(browser, 'Homepage - Sitename', 'Home', new RectangleSize(1440, 766));

        // Navigate the browser to the "Baseline" URL.
        await browser.get("http://baselineURL.com/");


        // Visual checkpoint #1 - Check the app page.
        await eyes.check("Homepage", Target.window().fully());

        // End the test.
        await eyes.close(true);
    });

    it('Smoke Tests', async () => {
        // Start the test by setting AUT's name, test name and viewport size (width X height)
        SuiteConfig = new Configuration()

        eyes.setSaveDiffs(false);
        await eyes.open(browser, 'Homepage - Sitename', 'Home', new RectangleSize(1440, 766));

        // Navigate the browser to the "Checkpoint" Page.
        await browser.get("http://comparisonurl.com/");

        // Visual checkpoint #2 - Check the app page.
        await eyes.check("Home", Target.window().fully());

        // End the test.
        await eyes.close(true);
    });

});

