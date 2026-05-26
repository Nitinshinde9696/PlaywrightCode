import { test } from '../Fixtures/loginfixture';
import fs from 'fs';
import { parse } from 'csv-parse/sync'

test.describe('test suite', () => {
    test('test Allure',{tag:['@smoket']}, async ({loginPage, homePage}) => {

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

 test('read csv',()=>
 {
 const readcsv=fs.readFileSync('./test-data/productsData.csv','utf-8');
 const records=parse(readcsv,{
    columns:true,
    skip_empty_lines:true
 });
 records.forEach((record)=>{
    console.log(record.id);
    console.log(record.name);
    console.log(record.add);
 
 });

});
 test('read csv file',()=>
 {
    const csvdata=fs.readFileSync('./test-data/productsData.csv','utf-8');
        
    const rows=csvdata.split('\n');
    for(const row of rows)
    {
        const columns=row.split(',');
        console.log(columns[0]);
        console.log(columns[1]);
        console.log(columns[2]);
    }  
 });
 test('read json file',()=>
 {
    const jsondata=fs.readFileSync('./package.json','utf-8');
    const products=JSON.parse(jsondata);
    // products.forEach((product) => {
        console.log(products);
        console.log(products.name);
        // console.log(product.description);
    // });
 });
 test('group the data',async()=>{
    const data= new Map<string, string[]>();
    data.set('fruits',['apple','orange','banana']);
    data.set('vegetables',['carrot','broccoli','spinach']);
    data.set('grains',['rice','wheat','oats']);
    for(const [key,value] of data)
    {
        console.log(`key: ${key}`);
        const valueString=value.slice(0,value.length).sort().join(', ');
        console.log(`value: ${valueString}`);
    }

 });

test('check a comes after b in given string',()=>
{
    const data="aabb";
    if(data.includes('ba'))
    {
        console.log("a comes after b");
    }
    else
    {
        console.log("a does not come after b");
    }

}); 

test('check zoom in and out',async ({page})=>
{
   await page.goto('https://www.google.com');
   await page.keyboard.down('Control');
   const searchBox = await page.getByRole('combobox', { name: 'Search' });
//    await page.keyboard.press(searchBox,'Enter')

   searchBox.fill('Hi')
//    searchBox.press('Enter');
   
   searchBox.press('Control+-');

//    searchBox.press('Enter');
    await page.keyboard.press('+');
    await page.waitForTimeout(2000);
    await page.keyboard.press('-');
    await page.waitForTimeout(2000);
    await page.keyboard.up('Control');
});