import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('test');
  await page.getByRole('img', { name: 'Google' }).click();
  await page.getByRole('button', { name: 'Google Search' }).click();
  await page.close();
});