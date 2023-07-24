let timeout = setTimeout(() => {
    console.log('Hello Aaryan!');
}, 5000);
let counter = 0;
let interval = setInterval(() => {
    console.log('Meow');
    counter++;
    if(counter == 5) {
        clearInterval(interval);
    }
}, 1000);
 //clearTimeout(timeout); 