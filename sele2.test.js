const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs");

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
});

test("Verify Google logo", async () => {
    await driver.get("https://www.google.com");

    // Check if the Google logo is present by alt attribute
    const logoElement = await driver.findElement(By.css("img[alt='Google']"));
    const isDisplayed = await logoElement.isDisplayed();

    expect(isDisplayed).toBe(true);
});

afterAll(async () => {
    await driver.quit();
});
