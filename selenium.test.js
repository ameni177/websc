const { Builder, By, until } = require('selenium-webdriver');

describe('Color change test', () => {
  let driver;

  beforeEach(async () => {
    const chrome = require('selenium-webdriver/chrome');
    const options = new chrome.Options().addArguments('--ignore-ssl-errors=yes');
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    await driver.get('http://localhost:3001');
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should change the color of the text when button clicked', async () => {
    // Find the text element
    let zahlText = await driver.findElement(By.tagName("h3"));

    // Get the initial color
    let initialColor = await zahlText.getCssValue("color");
    expect(initialColor).toBe("rgba(0, 0, 255, 1)"); // Expecting blue in RGBA representation

    // Find the button element
    let btn = await driver.findElement(By.tagName("button"));

    // Click the button
    await btn.click();

    // Wait for the color change
    await driver.wait(until.elementLocated(By.tagName("h3")), 5000); // Adjust timeout as needed

    // Get the color after clicking the button
    let colorAfterClick = await zahlText.getCssValue("color");
    expect(colorAfterClick).toBe("rgba(255, 0, 0, 1)"); // Expecting red in RGBA representation
  });
});
