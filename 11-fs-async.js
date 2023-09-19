//fs-async

const { log } = require("console");
const {readFile, writeFile} = require("fs")

console.log("start");
// "utf8" important !

readFile('./content/first.txt',"utf8", (err, result)=> {
    if(err){
        console.log(err);
        return
    }
    const first = result
    console.log(first);
    
    readFile('./content/second.txt',"utf8", (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        console.log(second);

        writeFile("./content/result-async.txt",`Here is the result : ${first} ${second}`, ()=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result); // add in a file result-async.txt both text from first.txt and second.txt 
            console.log("done with task");
        })
    })
})

console.log("start next task");



