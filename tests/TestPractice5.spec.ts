import { test } from '../Fixtures/loginfixture';
import { readFileSync } from 'fs';

test.describe('test suite', () => {
    test('navigate and login to book my show',{tag:['@smoket']}, async ({loginPage, homePage}) => {

        await loginPage.login('practice','SuperSecretPassword!');
        
        await homePage.validateHomePage();
    });
    // test('read Json file',async ({}) => {
    //     const data= await JSON.parse(readFileSync('./test-data/productsData.json', 'utf-8'));
    //     const productName=data.Car
    //     for(const product of productName){
    //         console.log("product name: "+product.id);
    //         console.log("product name: "+product.name);
    //         console.log("product name: "+product.description);
    //     }
//     }

// );

});