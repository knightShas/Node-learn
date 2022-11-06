// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const sayHi = require("./first_module")
const name = require("./name")
const tp = require("./alertnative_module")

require('./addfunction')

// sayHi('Prince')
// sayHi(name.sname.toUpperCase())
// sayHi(name.pname.toUpperCase())

// console.log(tp)