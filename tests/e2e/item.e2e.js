const { Builder, By } = require('selenium-webdriver');

(async function testUI() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000');
    // Simulate interaction (if front-end UI is present)
    // await driver.findElement(By.id('someId')).sendKeys('test');
    console.log("UI loaded successfully");
  } finally {
    await driver.quit();
  }
})();
