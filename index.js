
const parser = require("./parse.js");
const util = require("util");

console.log(util.inspect(parser(process.argv[2]), { depth: null }));
