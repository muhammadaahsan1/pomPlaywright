import { Page } from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page =page;
    }

    async loginToOrange (){

        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
        await this.page.getByPlaceholder('Username').fill('Admin');
        await this.page.getByPlaceholder('Password').fill('admin123');
        await this.page.getByRole('button', { name: 'Login' }).click();
        await this.page.waitForTimeout (5000);
    }




}

    