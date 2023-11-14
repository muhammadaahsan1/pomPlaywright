import { Locator, Page, expect } from "@playwright/test";


export class TestRedirection {
    readonly page: Page;
    readonly locatingAdminPage: Locator
    
    constructor(page: Page) {
        this.page =page;
        //Only define most repeatable locators, otherwise it will be a mess
        this.locatingAdminPage = page.getByText('Admin')
    }

    async moveToAdminPage (){


        await this.locatingAdminPage.click()
       //The above line of code is equivalent of the following
       // await this.page.getByText('Admin').click();
        await expect(this.page.getByRole('heading', { name: 'System Users' })).toBeVisible();
    }

    async moveToPimPage (){

        await this.page.getByText('PIM').click();
        await expect(this.page.getByRole('heading', { name: 'Employee Information' })).toBeVisible();
    }

    async moveToLeavePage (){

        await this.page.getByText('Leave').click();
        await expect(this.page.getByRole('heading', { name: 'Leave List'})).toBeVisible();
    }

    async moveToRecruitmentPage (){

        await this.page.getByText('Recruitment').click();
        await expect(this.page.getByRole('heading', { name: 'Candidates'})).toBeVisible();
    }


    async moveToTimePage (){

        await this.page.getByText('Time').click();
        await expect(this.page.getByRole('heading', { name: 'Select Employee'})).toBeVisible();
    }



}

    