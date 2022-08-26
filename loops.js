// let i=0;
// while(i<3){// 0<3,1<3,2<3, 3<3
// console.log(i);
// // i=i+1;
// i++;
// }

// for(let i=0;i<3;i++){
//     console.log(i);
// }

// let obj = {
//     name: "rakesh",
//     id: 123,
//     age:32,
//     isAdmin: true
// };

// for(let prop in obj) {
//     console.log(prop); // keys of an object
//     console.log(obj[prop]); // value of the key
// }

// let fruits = ["apple","banana","plum"];

// console.time("forloop");
// for(let i=0;i<fruits.length;i++) {
//     console.log(fruits[i]);
// }
// console.timeEnd("forloop");

// console.time("forof");
// for(let fruit of fruits) {
//     console.log(fruit);
// }
// console.timeEnd("forof");


// function hoistingExample() {
//     console.log(a);// 10, undefined,  // Uncaught ReferenceError: Cannot access 'a' before initialization
//     const a=10; 
// }

// internally javascript
// function hoistingExample() {
//     var a;
//     console.log(a);// 10, undefined, 
//     a=10;
// }

// hoistingExample();

// function scopeExample() {
//     let i;
//     for(i=0;i<3;i++) {//3<3, i=3
//         //.....
//     }
//     console.log(i);//undefined, undefined, error, null, 3
// }

// scopeExample();

// var a=100;
// a=150;
// var a=200;

// console.log(a);

// let a=100;
// a=150;
// // let a=200;

// console.log(a);


// const a=100;
// a=150;
// const a=200;

// console.log(a);