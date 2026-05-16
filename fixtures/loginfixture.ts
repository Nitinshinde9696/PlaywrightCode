import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { HomePage } from '../pages/HomePage';

type myFixtures = {
    loginPage: LoginPage;
    homePage:HomePage;
}
export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage :async({page},use)=>{
        await use(new HomePage(page));
    }
    
});
