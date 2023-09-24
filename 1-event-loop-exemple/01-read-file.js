console.log("started a first task");
// check file path!!!

readFile("./content/first.txt", "utf8", (error, result) => {
    if(error) {
        console.log(error);
        return
    }
    console.log(result);
    console.log("completed first task");
})

console.log("start a next task");