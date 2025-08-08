import { Before, After, BeforeAll, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, Page, BrowserContext } from '@playwright/test';
import { pageFixture } from './page-fixture';


let browser: Browser;
let context : BrowserContext;

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  const browserName = process.env.BROWSER || 'chromium';
  const isHeadless = process.env.HEADLESS === 'false' ? false : true;

  switch (browserName) {
    case 'firefox':
      browser = await firefox.launch({ headless: isHeadless });
      break;
    case 'webkit':
      browser = await webkit.launch({ headless: isHeadless });
      break;
    default:
      browser = await chromium.launch({ headless: isHeadless });
  }
  console.log('Launching browser...');
});

Before(async () => {
  console.log('Launch Browser, performed before each individual test scenario');

  context = await browser.newContext({
    viewport: null,
    isMobile: false,
    permissions: ['geolocation'],
    locale: 'es-MX',
    timezoneId: 'America/Bogota'
  });

  pageFixture.page = await context.newPage();
});

AfterAll(async () => {
  console.log('Closes Browser before the start of each scenario');
  await browser.close();
});

After(async ({ pickle, result }) => {
  console.log('Browser closed after each scenario, and result?.status');

  if (result?.status == Status.FAILED) {
    await pageFixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: 'png',
    });
  }

  await pageFixture.page.close();
  await context.close();
});
