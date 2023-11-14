import { test, expect } from '@playwright/test';
import {LoginPage} from '../pageObjects/login.ts'
import { TestRedirection } from '../pageObjects/redirectPages.ts';

test('test for safe landing on site', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
  
});


test('test Forms using Parameterization', async ({ page }) => {
    const login = new LoginPage(page);
    await login.loginToOrange();
    //Finding any user
    const redirection = new TestRedirection(page);
    await redirection.moveToMyInfoPage();
    

  
  });