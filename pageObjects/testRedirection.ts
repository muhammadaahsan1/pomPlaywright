import { Page, expect } from "@playwright/test";


export class TestRedirection {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page =page;
    }

    async moveToAdminPage (){

        await this.page.getByText('Admin').click();
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

    async moveToTimePage (){

        await this.page.getByText('Recruitment').click();
        await expect(this.page.getByRole('heading', { name: 'Candidates'})).toBeVisible();
    }


    async moveToRecruitmentPage (){

        await this.page.getByText('Leave').click();
        await expect(this.page.getByRole('heading', { name: 'Select Employee'})).toBeVisible();
    }

    




}

    