// console.log(sum(10,20));

// function sum(a,b){
// //  console.log(a+b);//a*c/d
//  return a+b; // 30, 
// }

// function expression
// console.log(sum(10,20));// Uncaught ReferenceError: Cannot access 'sum' before initialization

//function expression
let sum = function(a,b) {
    return a+b;
}

// arrow function
let sumArrow = (a,b) => {
    return a+b;
}

let double = function(n) {
    return n*2;
}

let doubleArrow = n=>n*2;

console.log(doubleArrow(2));
// console.log(sum(10,20));