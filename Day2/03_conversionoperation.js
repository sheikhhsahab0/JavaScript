// let score = 33;

// console.log(typeof score);
// console.log(typeof (score));



// let score1 = "33";

// console.log(typeof score1);
// console.log(typeof (score1));

// let valueInNumber1 = Number(score1);
// console.log(typeof valueInNumber1);



// let score2 = "33abc"; //NaN Not a Number

// console.log(typeof score2);

// let valueInNumber2 = Number(score2);
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);



// let score3 = null

// console.log(typeof score3);

// let valueInNumber3 = Number(score3);
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);



// let score4 = undefined

// console.log(typeof score4);

// let valueInNumber4 = Number(score4);
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);



// let score5 = true

// console.log(typeof score5);

// let valueInNumber5 = Number(score5);
// console.log(typeof valueInNumber5);
// console.log(valueInNumber5);




// let score6 = false

// console.log(typeof score6);

// let valueInNumber6 = Number(score6);
// console.log(typeof valueInNumber6);
// console.log(valueInNumber6);




// let score7 = "Arbaz"

// console.log(typeof score7);

// let valueInNumber7 = Number(score7);
// console.log(typeof valueInNumber7);
// console.log(valueInNumber7);

// when we convert a number ex:- 33 or "33" it can easily convert into number
// but when we try to convert a number ex:- "33abc" it's not converting into number and it's a value NaN (Not a Number), but tytpe of NaN is Number only (Keep this in mind)
// when we are taking value true it's converting into 1 and for false it's convereting into 0


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// it will give the boolean value true


let isLoggedIn1 = 0;

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);
// it will give the boolean value false


let isLoggedIn2 = "";

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);
// when we will give empty string the boolean value will be false

let isLoggedIn3 = "Arbaz";

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);
// when we will add some value in string then boolean value will be true



let someNumber = 44;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
// converted into string



