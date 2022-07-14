const mlb = require("./mathLibObj.js");

var listNum = [5, 10]
var listNum2 = [10,5]

console.log(`The sum beetween ${listNum2[0]} and ${listNum2[1]} is equal to ${mlb.sum(...listNum2)}`);
