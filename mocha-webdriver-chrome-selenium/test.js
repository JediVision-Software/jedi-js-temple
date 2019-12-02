const {Builder, By, Key, until} = require('selenium-webdriver');

var Page = function() {
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // sleep session
    this.sleep = async function() {
        return await this.driver.sleep(2000);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element [by id]');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's css
    this.findByCss = async function(css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 15000, 'Looking for element [by css]');
        return await this.driver.findElement(By.css(css));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element [by name]');
        return await this.driver.findElement(By.name(name));
    };

    // xpath
    this.findByXPath = async function(xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 15000, 'Looking for element [by xpath]');
        return await this.driver.findElement(By.xpath(xpath));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };
};
 
(async function payever() {

	var page = new Page();
    driver = page.driver;

    // verify page
    await page.visit('<Secret-Page-URL>');
    await page.findByCss('.logo-header');

    // prepare login
    const email = await page.findByName('UserName');
    await page.write(email, 'Secret-Username')
    const password = await page.findById('mat-input-3');
    await page.write(password, 'Secret-Password')
    await page.sleep();

    // login
    const loginBtn = await page.findByCss('.mat-button-wrapper');
    await loginBtn.click();
    await page.sleep();

    // click apps
    const appsBtn = await page.findByCss('.mat-toolbar-link-text.ng-star-inserted');
    await appsBtn.click();
    await page.sleep();

    // click shop
    const shopBtn = await page.findByXPath(".//div[contains(@data-pe-app, 'shop')]");
    await shopBtn.click();
    await page.sleep();

    // themes
    const themesBtn = await page.findByXPath(".//button[contains(@data-pe-navbar-link, 'themes')]");
    await themesBtn.click();
    await page.sleep();

    // add theme
    const addThemeBtn = await page.findByXPath(".//mat-card-content[contains(@data-pe-themes, 'add')]");
    await addThemeBtn.click();
    await page.sleep();

    // add text
    const addTextBtn = await page.findByXPath(".//pe-builder-navbar-top-button[contains(@bottomlabel, 'Text')]");
    await addTextBtn.click();
    await page.sleep();

    await page.quit();
})();











