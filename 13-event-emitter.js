const { log } = require("console")
const {readFile} = require("fs")
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on("response", (name, age) => {
    console.log(`data recieved ${name} with age - ${age}`);
})

customEmitter.on("response", () => {
    console.log(`some other logic here`);
})

// customEmitter.emit('response')
customEmitter.emit('response', "Jhon", 29)


