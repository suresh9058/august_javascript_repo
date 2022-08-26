// const user = {
//     name: 'rakesh',
//     email:'rakesh@gmail',
//     address: {
//         city: 'hyderabad',
//         state: 'TS'
//     },
//     mobileNumber: '987654321'
// };

// user.name

// const name = user.name;
// const email = user.email;

// const {name1,email2} = user;
// const name1 = user.name1;
// const email2 = user.email2;

// console.log(name1);// undefined
// console.log(email2);// undefined

// default value
// const {name, mobileNumber="123456789"} = user;

// // const mobileNumber = user.mobileNumber === undefined ? defaultValue : user.mobileNumber;

// console.log(name);
// console.log(mobileNumber);//

// alias Names
// const {name: firstName} = user;
// console.log(firstName); // "rakesh"
// // const firstName = user.name;

// const name="rakesh123";

// nested object
// const {address: {city,state}} = user;
// // console.log(address);
// // const city = user.address.city;
// console.log(city);
// console.log(state);

// let arr = ["rakesh","kumar","abc","123","456"];

// let [firstName, lastName, ...x] = arr;
// console.log(firstName);
// console.log(lastName);
// console.log(x); // 

// const {name,...otherProps} = user;
// console.log(name);
// console.log(otherProps);

//  swap variable
// a=10, b=20
// logic
// a=20, b=10

// let a=10, b=20;
// [a,b] = [b,a]; //[20,10]
let user = {};

console.log(user?.address?.city?.name);// undefined.city 
// destructuring.js:65 Uncaught TypeError: Cannot read properties of undefined (reading 'city')

// first option
// user.address && user.address.city && user.address.city.name