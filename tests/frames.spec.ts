import {test, expect,Locator} from "@playwright/test"

// test ("Dialogs Frame Demo", async ({page}) => {

// await page.goto("https://ui.vision/demo/webtest/frames/");

// const frames = page.frames();
// console.log("No. of frames:", frames.length);


// const frame = page.frame({ url:"https://ui.vision/demo/webtest/frames/frame_1"});

// if (frame)

//     {
//         //await frame.locator("input[name='mytext1']").fill('LG');
//         await frame.fill("input[name='mytext1']", 'LG');
//     }
//     else
//     {
//         console.log ("Frame is not available");
//     }
//         await page.waitForTimeout(3000);
// });

/*
test ("Inner Frame Demo", async ({page}) => {

await page.goto("https://ui.vision/demo/webtest/frames/");

page.frameLocator ("[src='frame_1.html']").locator("[name='mytext1']").fill('Hello');

await page.waitForTimeout(3000);

});

*/
/*

test ("Inner Frame Demo", async ({page}) => {

await page.goto("https://ui.vision/demo/webtest/frames/");

const frame3 = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3"});

await frame3?.locator("[name='mytext3']").fill('My Name is DON');
const childFrames = frame3?.childFrames();
console.log("Child frames:", childFrames?.length);

if (childFrames && childFrames.length > 0) {
	const radio = childFrames[0].getByLabel('I am a human');
    await radio.check();
    await expect(radio).toBeChecked();
}
else{
    console.log("Frame is not available");
}

await page.waitForTimeout(3000);

});

*/

test ("Tables Demo", async ({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator = page.locator("table[name='BookTable'] tbody");
await expect(table).toBeVisible();

const rows:Locator = page.locator ("table[name='BookTable'] tbody tr");
await expect (rows).toHaveCount(7);

const rowCount: number=await rows.count();
console.log ("Number of rows:", rowCount);
expect(rowCount).toBe(7);


const columns: Locator = page.locator ("table[name='BookTable'] tbody tr th");
await expect (columns).toHaveCount(4);

const columnCount: number=await columns.count();
console.log ("Number of columns:", columnCount);
expect(columnCount).toBe(4);


});

