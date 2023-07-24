import * as fs from 'fs';
// const fs = require('fs'); // Importing the package
/*async function err() {
    setTimeout(() => {
        console.log('Meow');
    }, 1000);
}*/
// Writing Data into the file
fs.writeFile('hello.txt', 'Hello', (err) => {
    if(err == null) {
        console.log('Written Successfully!');
    } else {
        console.log(err.message);
    }
})
console.log('Done!');
//err();
// Deleting a File
/*fs.unlinkSync('tst.txt', (err) => {
    if(err == null) {
        console.log('Deleted Files Sucessfully!');
    } else {
        console.log(err.message);
    }
})*/