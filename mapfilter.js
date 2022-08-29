// const numbers = [1,2,3,4];

// const doubleNumbers = numbers.map(function(element,index){
//     // logic 
//    return element*2;
// });

// console.log(doubleNumbers); //[2,4,6,8]

// const doubleNumbers = numbers.map(element=>{return element*2});
// console.log(doubleNumbers);

let User = [
    {
        name: "akesh",
        age:32,
        salary: 100
    },
    {
        name: "nandu",
        age:31,
        salary: 150
    },
    {
        name: "manu",
        age:30,
        salary: 200
    }
]

let filterAgeSalary = User.filter(item=> {
    if(item.age === 32) {
        item.salary = item.salary+100;
    }
    return item;
});

console.log(filterAgeSalary);
// let UpdateUsers = User.map((item)=>{
//     item.salary = item.salary+100;
//     return item;   
// });

// console.log(UpdateUsers);

const numbers = [1,2,3,4];

// const evenNumbers = numbers.filter(function(element)=>{
//    return element%2===0;
// });

const evenNumbers = numbers.filter(element=>element%2===0);
 
console.log(evenNumbers);
