const { log } = require('console');
const path = require('path')
console.log(path.sep);

const filePath = path.join('constent', 'subfolder','text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);
