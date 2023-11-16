import { Locator, Page, expect } from "@playwright/test";


export class FillFormsonOrange {
    readonly page: Page;
    readonly personalPage: Locator
    
    constructor(page: Page) {
        this.page =page;
        //Only define most repeatable locators, otherwise it will be a mess
        this.personalPage = page.locator('.orangehrm-edit-employee-content',{hasText:'Personal Details'});

    }
    /**
     * 
     * @param name 
     * @param lastName 
     * @param id 
     * @param date 
     * @param smoker 
     */
    async fillDetailsOnMyInfoPage (name:string, lastName:string, id:number, date:string, smoker:boolean){
        
            await this.page.getByText('My Info').click();
            await expect(this.page.getByRole('heading', { name: 'Personal Details'})).toBeVisible();
            await this.personalPage.getByPlaceholder('First Name').fill(name);
            await this.personalPage.getByPlaceholder('Last Name').fill('Champ');
            await this.page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").fill(Number(id).toString());
            await this.personalPage.getByPlaceholder("yyyy-mm-dd").first().fill(date); 
            if(smoker){
                await this.personalPage.getByRole('checkbox').first().check({force:true})
            }
            await this.page.waitForTimeout(1000)

            

    
        }
    }

