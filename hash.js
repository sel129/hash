import fs from 'fs';

const init = async (filename) => {
    fs.writeFile(`${filename}.json`, '{}', (err) => {
        if (err) {
            throw err;
        }
    });
}

export {init};