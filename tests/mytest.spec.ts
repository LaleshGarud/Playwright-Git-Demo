// import {test, expect} from '@playwright/test';

// test('Verify page title', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     let title:string = await page.title();
//     console.log('Page title is: ' + title);
//     await expect(page).toHaveTitle('Automation Testing Practice');

// } );


// import {test, expect} from '@playwright/test';

// test.skip ('My Test1', async ({page}) => {

// await page.goto('https://playwright.dev/');
// await expect(page).toHaveTitle(/Playwright/);
// }

// );

// test ('get started...', async ({page}) => {
// await page.goto ('https://playwright.dev/')
// // await page.getByRole('link', { name: 'Get started'}).click();
// // await page.locator('.getStarted_Sjon').click();
// await page.getByText('MCP', { exact: true }).click();
// await expect(page.getByRole('heading', { name: 'Playwright MCP', level: 1 }))

// }
// );

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await expect(page.getByRole('heading', { name: 'Trace viewer' })).toBeVisible();
});