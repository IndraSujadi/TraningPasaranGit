import * as fs from 'fs';
import {join} from 'path';

let path = join(__dirname, '../dist');

fs.readdir(path, (error, fileList) => {
    if(error) {
        throw error;;
    }
    // console.log(fileList);
    let allResult = new Map();
    let done = () => {
        for(let fileName of fileList) {
            let result = allResult.get(fileName);
            if(result) {
                console.log(fileName +':'+result.size);
            }
        }
        console.log('done');
    }
    for(let fileName of fileList) {
        fs.stat(join(path, fileName), (error, result) =>{
            allResult.set(fileName, result);
            if(allResult.size === fileList.length) {
               done();
            } else {
                console.log("wow");
            }
        });
        
    }
});