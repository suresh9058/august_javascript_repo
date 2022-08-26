// console.log(sum(10,20));

// function sum(a,b){
// //  console.log(a+b);//a*c/d
//  return a+b; // 30, 
// }

// function expression
console.log(sum(10,20));// Uncaught ReferenceError: Cannot access 'sum' before initialization

let sum = function(a,b) {
    return a+b;
}

// console.log(sum(10,20));