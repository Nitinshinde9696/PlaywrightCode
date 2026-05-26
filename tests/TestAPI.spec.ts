import ajv from 'ajv';
import { test } from '../Fixtures/loginfixture';
import schemaValidation from '../test-data/schemaValidation.json';
import fs from 'fs';
import { parse } from 'csv-parse/sync'

test('validate API response with JSON schema', async ({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
    const ad=fs.readFileSync('./test-data/schemaValidation.json','utf-8');
    const adData=JSON.parse(ad);
      console.log("value of adData.type:", adData.type);
    
    
    // console.log('API response:', adData.title);
    const schema = schemaValidation;
    const validator = new ajv();
    const validate = validator.compile(schema);
    const valid = validate(data);
    if (valid) {
        console.log('API response is valid according to the schema');
    }
    else {
        console.log('API response is NOT valid according to the schema');
        console.log(validate.errors);

    }
});