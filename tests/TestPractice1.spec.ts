import { test } from '../Fixtures/loginfixture';
import { readFileSync } from 'fs';

test.describe('test suite', () => {
    // test('navigate and login to book my show',{tag:['@smoket']}, async ({loginPage, homePage}) => {

    //     await loginPage.login('practice','SuperSecretPassword!');
        
    //     await homePage.validateHomePage();
    // });
    // test('read Json file',async ({}) => {
    //     const data= await JSON.parse(readFileSync('./test-data/productsData.json', 'utf-8'));
    //     const productName=data.Car
    //     for(const product of productName){
    //         console.log("product name: "+product.id);
    //         console.log("product name: "+product.name);
    //         console.log("product name: "+product.description);
    //     }
//     }
test('get second highest occurrence of a number in an array',async ({}) => {
    const arr=[1,1,2,3,4,5,6,7,8,9,10,1,2,3,4,1,4,5,6,7,8,9];
    const countMap=new Map();  
    const uniqueNumbers=new Set(arr);
    console.log("unique numbers: "+Array.from(uniqueNumbers));
    for(const num of arr){
        if(countMap.has(num)){
            countMap.set(num, countMap.get(num)+1);
            
        }else{
            countMap.set(num, 1);
        }   
    }
    for(const [key,value] of countMap.entries()){
        console.log("number : "+key+" count: "+value);
    }

    const sortedCount=Array.from(countMap.entries()).sort((a,b)=>b[1]-a[1]);
    console.log("second highest occurrence: "+sortedCount[1][0]);
    for(const [key,value] of sortedCount){
        console.log("number : "+key+" count: "+value);
    }
}
);
test('permutation of a string',async ({}) => {
    const str="abc";    
    const permute=(s:string, prefix:string="")=>{
        if(s.length===0){
            console.log(prefix);
        }   
        for(let i=0;i<s.length;i++){
            const rem=s.substring(0,i)+s.substring(i+1);
            permute(rem, prefix+s[i]);
        }
    }
    permute(str);



});
});