'use strict';

console.log('JS Basics Day 3');

//Arrays creation------------------------------
let numbers = [1, 3, 5, 7];
console.log(numbers);

//Insertion------------------------------------
// 1--> Insertion in Begining
console.log(numbers.unshift(8));
console.log(numbers);

// 2--> Insertion in End
console.log(numbers.push(9));
console.log(numbers);

//3 --> Insertion in Middle
console.log(numbers.splice(2, 0,'a', 'b', 'c',));
console.log(numbers);

//Searching-------------------------

//Primitives

//First Method
console.log(numbers.indexOf(6));
console.log(numbers.indexOf(3));
console.log(numbers.indexOf(2, 3)); 

// we want to check if number is exists in an array or not
//Second Method
if(numbers.indexOf(4) !=-1);
console.log('Pesent');

//Third Method
console.log(numbers.includes(7));

//Refrences--------------------------------------------
//Call Back Function
let courses = [
    {no:1, naam:'PCM'},
    {no:2, naam:'PCB'}
];
console.log(courses);

// console.log(courses.includes ({no:1, coursename:'PCM'}));

//    let course = courses.find(
//         function(course){
//             return course.naam === 'PCB'
//         }   
//    );

//    console.log(course);

//Arrow Function------------------------------------------
let course = courses.find (course => course.naam === 'PCB');
console.log(course);

//Removing an Element from Array---------------------------
let numbers1 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers1);

// 1 --> Will use pop () to Removing from End 
numbers1.pop();

// 2 --> Will use shift () to Removing from Begining
numbers1.shift();

//  3 --> Will use splice () to Removing from Middle
numbers1.splice(2, 1)

console.log(numbers1);

//Empting an Array-------------------------------------
let numbers2 = [1, 2, 3, 4, 5]
let numbers3 = numbers2;

// numbers2 = [];
// numbers2.length = 0;
numbers2.splice(0, numbers2.length);

console.log(numbers2); 
console.log(numbers3);

//Combining and Slicing--------------------------------
//Combining
let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = first.concat(second); // By using concat method we can combine two arrays.
console.log(combined);

//slicing
let marks = [10, 20, 30, 40, 50, 60, 70, 80]
let sliced = marks.slice(2)
let sliced1 = marks.slice(2,6)
let sliced2 = marks.slice()
console.log(sliced);
console.log(sliced1);
console.log(sliced2);

//spread operator--------------------------------------
let third = [1, 2, 3]
let fourth = [4, 5, 6]

let combineds = [...third, 'a', false, ...fourth, 'b' , true]
console.log(combineds);

//how to create copy------------------------------------
let another = [...combineds];
console.log(another);

//Iterating an array-------------------------------------
// 1 --> by using for-of loop
 let arr = [10, 20, 30, 40 ,50];
 for(let value of arr){
    console.log(value);
 }

 //2 --> by using for each loop
 arr.forEach(function(numb){
    console.log(numb);
 });

 //converting into array functions
 arr.forEach(numb => console.log(numb));

 // joining an Array-------------------------------------
 let numbers4 = [10, 20, 30, 40, 50];
 const joined = numbers4.join(',');
 console.log(joined);

 // splitting an string------------------------------------
 let message = 'This is my first message';
 let parts = message.split(' ');
 console.log(parts);

 let joineds = parts.join('_');
 console.log(joineds);

 //Sorting an Arrays------------------------------------
 let numbers5 = [60, 20, 70, 10, 50]
 numbers5.sort();
 console.log(numbers5);

 let numbers6 = [10, 4, 40, 5]
 numbers6.sort();
 console.log(numbers6); 

 //reversing an array-----------------------------------
 numbers5.reverse();
 console.log(numbers5);

 numbers6.reverse();
 console.log(numbers6);

 //Filtering an array------------------------------------
let numbers7 = [1, 2, -1, -4, -5, 6]

//print only positive numbers
let filtered = numbers7.filter(function(value){
    return value >=0;
});
console.log(filtered);
//converting into arrow functions
let filtered1= numbers7.filter (value => value >=0);
console.log(filtered);

//print only negative numbers
let filtereds= numbers7.filter(function(value){
    return value<=0;
});
console.log(filtereds);
//converting into arrow functions
let filtereds1 = numbers7.filter(value => value<=0);
console.log(filtereds1);

//Mapping an array-------------------------------------
let numbers8 = [7,8,9,10];

let items = numbers8.map(function(value){
    return 'student_no' + value
})
console.log(items);

//converting into arrow functions
let items1 = numbers8.map( value => 'students_no' + value);
console.log(items1);

//Mapping an objects------------------------------------
let numbers9 = [-2,-3,4,5,6,-7];
let filter2 = numbers9.filter(value => value>0)
console.log(filter2);

let items2 = filter2.map(function(num) {
   let obj = {value: num}
    return obj;

    //or we can write lik this also
    // return {value: num}
});
console.log(items2);

//converting into arrow functions
let items3 = filter2.map(num => {value:num});
console.log(items3);

//Sorting an Array--------------------------------------------
let a = [10,5,4,25];

a.sort(function(a,b){
    return a-b;
});

console.log(a);

//Reducing an Array-------------------------------------------
let arr1 = [1,2,3,4];
let total = 0;

for (let value of arr1) //for iterables use for of loop
    total = total + value;

console.log(total);


arr.reduce()