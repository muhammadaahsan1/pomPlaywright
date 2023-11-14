import { test, expect } from '@playwright/test';
import {LoginPage} from '../pageObjects/login.ts'

test('test Navigation of Pages', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
  
});

test('Search Directory of Users in orangeHRM', async ({ page }) => {
  const login = new LoginPage(page);
  await login.loginToOrange();
  //Finding any user
  await page.getByPlaceholder('Type for hints...').fill('Russel')
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Software Engineer' }).isVisible();

});
