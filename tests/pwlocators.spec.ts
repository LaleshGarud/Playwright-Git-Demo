// // import {test, expect, Locator} from '@playwright/test';

// // test ('Verify pwlocators demo', async ({page}) => {

// // await page.goto('https://demo.nopcommerce.com/');

// // //1. page.getByAltText - Images Locators

// // // const logo:Locator = page.getByAltText("nopCommerce demo store");
// // // await expect(logo).toBeVisible();

// // // 2. page.getByText - Find element by Visible Text

// // // const text:Locator = page.getByText("Welcome to our store");
// // // await expect(page.getByText("Welcome to our store")).toBeVisible();

// // await page.getByRole('link', { name: 'Register' }).click();
// // await expect (page.getByRole('heading', { name: 'Register'})).toBeVisible();

// // await page.getByLabel('First name:').fill("John");
// // await page.getByLabel('Last name:').fill("Kenedy")
// // await page.getByLabel('Email:').fill("abc@gmail.com")

// // await page.getByPlaceholder('Search store').fill("Apple Mobile");

// // const link:Locator = await page.getByTitle("Home Page Link");
// // expect(link).toHaveText("Home");
// // await expect(page.getByTitle("Home Page Link")).toHaveText("Home");

// // await expect (page.getByTestId("profile-name")).toHaveText("John Doe");
// // }
// // );


// import { test, expect, Locator } from "@playwright/test";

// test("Locator Verifications", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   // Non Interactive Text
//   const pagetitle: Locator = page.getByRole("heading", {name: "Automation Testing Practice",});
//   await expect(pagetitle).toHaveText("Automation Testing Practice");

// //   Link
// //   await page.locator('#PageList2').getByRole('link', { name: 'Blog' }).click();
// //   page.getByText('Software Testing & Automation Tutorials', { exact: true })

//   // Input Box

//   const textBox:Locator = page.locator('#name');
//   await expect(textBox).toBeVisible();
//   await expect(textBox).toBeEnabled();
//   const maxLength: string | null = await textBox.getAttribute("maxlength");

//   expect(maxLength).toBe('15');  

//   await textBox.fill("Lalesh Garud");

//   //console.log ("text content of FirstName:", await textBox.textContent());

//   const enteredValue: string = await textBox.inputValue()
//   console.log ("Input value of FirstName:", await textBox.inputValue());
//   expect (enteredValue).toBe("Lalesh Garud");

//   await page.waitForTimeout(3000);
// });


// test ("Radio Button Verifications", async ({ page }) => {

//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const maleRadio:Locator = page.locator('#male');
//   await expect(maleRadio).toBeVisible();
//   await expect(maleRadio).toBeEnabled();

  
//   expect(await maleRadio.isChecked()).toBe(false);  

//   await maleRadio.check();
//   // expect(await maleRadio.isChecked()).toBe(true); 
//   await expect(maleRadio).toBeChecked();

//   await page.waitForTimeout(3000);

// });


// test ("Check Box Verifications", async ({ page }) => {

//   await page.goto("https://testautomationpractice.blogspot.com/");

//   //one checkbox select

//   const sundayCheckbox:Locator = page.getByLabel('Sunday');
//   //await sundayCheckbox.check();
//   //await expect (sundayCheckbox).toBeChecked();


//   //multiple check boxes select

//   const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const checkboxes:Locator[] = days.map(index => page.getByLabel(index));

//   expect (checkboxes.length).toBe(7);

//   for (const checkbox of checkboxes) 
    
//     {
//         await checkbox.check();
//         await expect(checkbox).toBeChecked();

//     }

//   await page.waitForTimeout(3000);

// });


// test ("Hover Verifications", async ({ page }) => {

//   await page.goto("https://testautomationpractice.blogspot.com/");

//   await page.getByRole('button', { name: 'Point Me' }).hover();

//   await page.waitForTimeout(3000);

// });

// test ("Double click Verifications", async ({ page }) => {

//   await page.goto("https://testautomationpractice.blogspot.com/");

//   //await page.locator('#field1').dblclick();
//   //await page.locator('#field2').fill('LG');
//   await page.locator('#field2').pressSequentially('Hello World!');

//   await page.waitForTimeout(5000);

// });

// test ("Drag & Drop", async ({ page }) => {

//   await page.goto("https://testautomationpractice.blogspot.com/");

//   await page.locator(`p:has-text("Drag me to my target")`).dragTo(page.locator('#droppable'));

//   await page.waitForTimeout(7000);

// });

// test.only ("Scroll", async ({ page }) => {

//   await page.goto("https://testautomationpractice.blogspot.com/");

//   await page.getByText('merrymoonmary', { exact: true }).scrollIntoViewIfNeeded();

//   await page.waitForTimeout(7000);

// });









import {test, expect, Locator} from '@playwright/test';

test.only ('DropDown Verification', async ({page}) =>{

await page.goto("https://testautomationpractice.blogspot.com/");

// await page.locator ('#country').selectOption("India"); //Visible Text option

// await page.locator ('#country').selectOption({value:'uk'}) //Value attribute

// await page.locator ('#country').selectOption({value:'India'}) //Label 

// await page.locator ('#country').selectOption({index:3}) //Label 

const dropdownOptions:Locator = page.locator('#country>option');
await expect(dropdownOptions).toHaveCount(10);

const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
console.log(optionsText);

expect (optionsText).toContain('Japan');

await page.waitForTimeout(3000);

});