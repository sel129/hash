import {init} from './hash.js';

const command = process.argv[2];

if(command === "init") {
    try {
        await init(process.argv[3]);
    } catch(e) {
        console.log(e);
        exit(1);
    }
    
    console.log(`initiated ${process.argv[3]}`);
};