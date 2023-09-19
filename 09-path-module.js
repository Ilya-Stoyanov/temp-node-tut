const { log } = require("console");
const path = require("path")
// console.log(path.sep);

const filepath = path.join('/cotent/', 'subfolder', 'test.txt')
// console.log(filepath);

const base = path.basename(filepath);
// console.log(base);

const absolut = path.resolve(__dirname, 'test.txt')
console.log(absolut);
