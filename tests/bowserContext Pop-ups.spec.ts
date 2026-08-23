// import {test, expect, Page, chromium, firefox} from '@playwright/test';

// test ("Browser Context", async ({}) => {

// const browser = await chromium.launch();
// const context = await browser.newContext();
// const page:Page = await context.newPage();
// await page.goto("https://testautomationpractice.blogspot.com/");


// });


// import {test, expect, Page, chromium} from '@playwright/test';

// test ("Browser Context Demo", async ({page}) => {

// //const browser = await chromium.launch();
// //const context = await browser.newContext();
// //const page: Page = await context.newPage();
// await page.goto("https://testautomationpractice.blogspot.com/");

// });


// import {test, expect} from "@playwright/test"

// test ("Dialogs Frame Demo", async ({page}) => {

// await page.goto("https://testautomationpractice.blogspot.com/");

// //await page.getByRole('button', { name: 'Simple Alert' }).click();

// page.on('dialog', dialog => {
// console.log("Dialog type is", dialog.type());
// expect(dialog.type()).toContain('alert');
// console.log("Dialog message is", dialog.message());
// expect(dialog.message()).toContain('I am an alert box!');
// dialog.accept();

// });
// await page.locator('#alertBtn').click();
// await page.waitForTimeout(5000);
// });


// import {test, expect} from "@playwright/test"

// test.only ("Dialogs Frame Demo", async ({page}) => {

// await page.goto("https://testautomationpractice.blogspot.com/");

// //await page.getByRole('button', { name: 'Simple Alert' }).click();

// page.on('dialog', dialog => {
// console.log("Dialog type is", dialog.type());
// expect(dialog.type()).toContain('confirm');
// console.log("Dialog message is", dialog.message());
// expect(dialog.message()).toContain('Press a button!');
// dialog.accept();
// //dialog.dismiss();

// });

// await page.locator('#confirmBtn').click();
// const text:string = await page.locator('#demo').innerText();
// console.log("Output text:", text);

// //await expect (page.locator('#demo')).toHaveText("You pressed Cancel!");
// await expect (page.locator('#demo')).toHaveText("You pressed OK!");

// await page.waitForTimeout(5000);
// });

import {test, expect} from "@playwright/test"

test ("Dialogs Frame Demo", async ({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog', dialog => {
console.log("Dialog type is", dialog.type());
expect(dialog.type()).toContain('prompt');
console.log("Dialog message is", dialog.message());
expect(dialog.message()).toContain('Please enter your name:');

expect(dialog.defaultValue()).toContain("Harry Potter");

dialog.accept('John');

//dialog.dismiss();

});

await page.locator('#promptBtn').click();

const text:string = await page.locator('#demo').innerText();
console.log("Output text:", text);

//await expect (page.locator('#demo')).toHaveText("You pressed Cancel!");
await expect (page.locator('#demo')).toHaveText("Hello John! How are you today?");

await page.waitForTimeout(5000);

});