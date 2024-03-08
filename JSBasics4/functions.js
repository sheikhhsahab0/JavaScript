'use strict'

console.log('This is functions');

//function declaration---------------------------------------------------------------
function run() {
    console.log('running');
}
run(); //without calling the function or invoking it will not give o/p

//function assignment-------------------------------------------------------------
//Named function assignment
let stand = function walk(){
    console.log('walking');
}
stand();

let jump = stand;
jump();

//Anonymous function assignment
let stands = function(){
    console.log('walking');
}
stands();

//JavaScript is a dynamioc language---------------------------------
let x = 3;
x = 'a';
console.log(x);

function sum(a,b){
    return(a+b);
}

console.log (sum(3,4));
console.log (sum(1));
console.log(sum());
console.log (sum(4,3,5,6,7,8));


function sum1(a, b){
    console.log(arguments);
    return a+b;
}
let ans = sum1(1,2,3,4,5);

function sum2(a, b){
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}
let ans1 = sum2(1,2,3,4,5,6);
console.log(ans1);

//Rest Operator 
function sum(num, value, ...args){
    console.log(args);
}

sum(1,2,3,4,5,6);

//Default parameters---------------------------------------



// Getter and Setters-----------------------------------------------

//getter --> access properties
//setter --> change or mutate properties

// let person = {
//     fName: 'Arbaz',
//     lName: 'Haider'
// };
// console.log(person);

// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// issue ---> it's a read only function we will not able to change the name
// console.log(fullName());

let person = {
    fName: 'Nasim',
    lName: 'Haider',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

person.fullName = 'Arbaz Haider';
console.log(person.fullName);

//Try and Catch <------ Error Handling----------------------------------------
let items = {
    fName: 'iPhone',
    lName: '6s',
    get fullName(){
        return `${items.fName} ${items.lName}`;
    },
    set fullName(value){
        if(typeof value !== String) {
            throw new Error('You have not sent a string');
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
try {
    items.fullName = true;
}
catch (e){
    alert(e);
}
console.log(items.fullName);

//Scopes
