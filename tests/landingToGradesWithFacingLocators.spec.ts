import { test, expect } from '@playwright/test';
import {LoginPage} from '../pageObjects/login.ts'
import { TestRedirection } from '../pageObjects/redirectPages.ts';
import { FillFormsonOrange } from '../pageObjects/fillForms.ts';

test('test for safe landing on site', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
  
});


test('test Forms using Parameterization', async ({ page }) => {
    const login = new LoginPage(page);
    const redirection = new TestRedirection(page);

    await login.loginToOrange();

    //Test Admin Form
    await redirection.moveToAdminPage();
    
    //landingToGradesWithFacing locators>Page Objects can be made for this
    await page.getByLabel('Topbar Menu').getByRole('listitem').nth(1).click();
    await page.getByLabel('Topbar Menu').getByRole('listitem').nth(1).filter({hasText:'Pay Grades'}).click();
    await page.getByLabel('Topbar Menu').getByRole('listitem').nth(1).getByRole('listitem').nth(1).click();
    await expect(page.getByRole('heading', { name: 'Pay Grades'})).toBeVisible();

    await page.getByTitle('Help').click();
    await page.waitForTimeout(2000)

  
  });