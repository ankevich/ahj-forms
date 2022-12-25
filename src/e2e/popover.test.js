import puppeteer from 'puppeteer';

describe('Popover validation', () => {
  let browser;
  let page;
  jest.setTimeout(10000);

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 0,
      devtools: false,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:8080');
  });

  test('Popover should be visible', async () => {
    await page.waitForSelector('#button');
    await page.click('#button');
    await page.waitForSelector('#popover');
    const popover = await page.$eval('#popover', (el) => el.classList.contains('d-none'));
    expect(popover).toBe(false);
  });

  afterEach(async () => {
    await browser.close();
  });
});
