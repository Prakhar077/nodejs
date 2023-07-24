const os = require('os');
// console.log(new Date(new Date()-3600*1000*3).toISOString());
setInterval(() => {
    let date = new Date();
    console.log(date.getHours(), date.getMinutes(), date.getSeconds());
    setTimeout(() => {
        console.clear();
        
    }, 800);
   
}, 1000);