import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.moneycontrol.com/');

  await page.getByRole('link', { name: 'Markets' }).hover();
  await page.getByRole('link', { name: 'TRENDING STOCKS' }).click();
  await page.getByRole('link', { name: 'Gainers' }).click();
  await page.locator('iframe[name="google_ads_iframe_/1039154/MC_ENG_Desktop/MC_ENG_ROS/MC_ENG_ROS_AS/MC_ENG_AS_ROS_INSTL_OOP_0"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await expect(page.getByText('No Hourly Gainers Stocks in')).toBeVisible();
});