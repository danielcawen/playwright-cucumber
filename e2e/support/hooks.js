const { Before, After, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { chromium, firefox, webkit } = require("@playwright/test");

let browser;

Before(async function () {
    const browserType = process.env.BROWSER || 'chromium';
    const isHeaded = process.env.HEADED === 'true';
    const launchOptions = { headless: !isHeaded };


    // Select the browser engine
    const engine = { chromium, firefox, webkit }[browserType] || chromium;
    
    const width = parseInt(process.env.WIDTH, 10) || 1200;
    const height = parseInt(process.env.HEIGHT, 10) || 780;

    browser = await engine.launch(launchOptions);
    const context = await browser.newContext({
        viewport: { width, height }
    });
    this.page = await context.newPage();
});

After(async function () {
    if (this.page) {
        await this.page.close();
    }
    if (browser) {
        await browser.close();
    }
});
