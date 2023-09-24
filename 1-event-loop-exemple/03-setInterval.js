
// start operation sistem

console.log("first");

// complite and exited operation sistem
// program to stop the setInterval() method after five times

let count = 0; 
const intervalID = setInterval(() => {
    count += 1;
    console.log("Heelo set Interval");
    if(count === 2) {
        console.log("Finish setInterval");
        clearInterval(intervalID)
    }
}, 1000);

console.log("I will run first");
