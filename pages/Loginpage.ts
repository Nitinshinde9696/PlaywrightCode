import {expect,Page} from '@playwright/test';
// import { setBrowserZoom } from 'playwright-zoom';
export class LoginPage
{
    constructor(private readonly page:Page)
    {   }
    readonly username = this.page.getByRole('textbox', { name: 'Username' });
    readonly password = this.page.getByLabel('Password');
    readonly loginbutton = this.page.locator('#submit-login');

    async login(username:string, password:string)
    {
        await this.page.goto('https://practice.expandtesting.com/login');
        
        await this.username.waitFor({ state: 'visible' });
        await this.username.fill(username);
        await this.password.waitFor({ state: 'visible' });
        await this.password.fill(password);
        await this.loginbutton.click();
        // await this.page.selectOption('#userSelect', ['user2', 'user3']);
        // await expect(this.page.screenshot({path: 'screenshot1.png', fullPage: true})).toMatchSnapshot({ path:'screenshot.png', fullPage: true });
        

        // // await this.page.waitForLoadState('networkidle');
        // await this.page.evaluate(() => {
        //     (document.body.style as any).zoom = '0.8';
            
        // });
        // await this.page.waitForLoadState('load');
        
        await this.page.waitForLoadState('networkidle');

        // await this.page.keyboard.press('Control+Shift+');
        await expect(this.page).toHaveURL('https://practice.expandtesting.com/secure');
        // await setBrowserZoom(this.page, 50);
        await expect(this.page.getByText('You logged into a secure area!')).toBeVisible();

    }
}