import {expect,Page} from '@playwright/test';

export class HomePage
{
    constructor(private readonly page:Page)
    {   }
    readonly practice = this.page.getByRole('link', { name: 'Practice' });
    async validateHomePage()
    {
         await expect(this.page).toHaveURL('https://practice.expandtesting.com/secure');
         await expect(this.page.getByRole('link', { name: 'SUT' })).toBeVisible();
         await expect(this.page.getByRole('heading', { name: 'Secure Area page for Automation Testing Practice' })).toBeVisible();
    }
}
