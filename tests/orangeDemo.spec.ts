import {test, expect, Locator} from '@playwright/test';

test ("Orange Demo Verification", async ({page}) => {

await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

expect(page).toHaveTitle("OrangeHRM");

await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill("Admin");

await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill("admin123");

await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");


});