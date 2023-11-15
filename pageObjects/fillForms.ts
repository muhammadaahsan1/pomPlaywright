import { Locator, Page, expect } from "@playwright/test";


export class FillFormsonOrange {
    readonly page: Page;
    readonly personalPage: Locator
    
    constructor(page: Page) {
        this.page =page;
        //Only define most repeatable locators, otherwise it will be a mess
        this.personalPage = page.locator('.orangehrm-edit-employee-content',{hasText:'Personal Details'});

    }

    async fillDetailsOnMyInfoPage (name:string, lastName:string, id:string, date:string){
        
            await this.page.getByText('My Info').click();
            await expect(this.page.getByRole('heading', { name: 'Personal Details'})).toBeVisible();
            await this.personalPage.getByPlaceholder('First Name').fill(name);
            await this.personalPage.getByPlaceholder('Last Name').fill('Champ');
            await this.page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").fill(id);
            await this.personalPage.getByPlaceholder("yyyy-mm-dd").last().fill(date); 
        }
    }

