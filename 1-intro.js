const amount = 9;

if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log(`he is my first node app`);

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// module.exports - is oblject !!

const names = require("./04-names");
// console.log(names);
const sayHi = require("./05-utils");

// sayHi(names.jhon)
// sayHi(names.peter)
// sayHi("Susan")

const data = require("./06-alternative-flavor");
// console.log(data);

require("./07-mind-grenade");
