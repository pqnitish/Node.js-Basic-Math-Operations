const sum = require("./sum");
const multiply = require("./multiplication");
const substraction = require("./subtraction");
const divide = require ("./division");
let a = 5 ;
let b = 6;
let result = sum(a,b);
//console.log(result);

let multA = 7;
let multB = 8;
const multResult = multiply (multA ,multB);
//console.log(multResult);
const subA = 18;
const subB = 9;
const subResult = substraction(subA , subB);
//console.log(subResult);
const divA = 18;
const divB = 9;
const divResult = divide(divA , divB);
console.log(divResult);





