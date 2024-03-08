console.log('Hey Arbaz');


//String-------------------------------------------------------------------------------------------------------------------------------------
let lastName = 'Haider';
console.log(typeof(lastName));
console.log(lastName.length);
console.log(lastName[0]);
console.log(lastName.includes('de'));
console.log(lastName.startsWith('ha')); //output will be false because H is capital and here we give the input as small h.
console.log(lastName.endsWith('er'));
console.log(lastName.indexOf('d'));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());

let lastName1 = '  Suleman ';
console.log(lastName1.trim());
console.log(lastName1.replace('Sule', 'Us'));

let firstName = new String ('Arbaz');
console.log(typeof(firstName));
console.log(firstName.length);

let messsage = 'Hey! How You Doing?';
let words = messsage.split(' ');
console.log(words);

//template literal---------------------------------------------------------------------------------------------------------------------------
let messsage1 = `This 
is 
my 
first 
message`
console.log(messsage1);

let text = `Hello Arbaz

How You Doing? 

From 
Nasim`

console.log(text);

let text2 = `Hey ${firstName}

How's your study going On?
How's your Healyh?

From
Nasim`

console.log(text2);

//Date and Time Object-------------------------------------------------------------------------------
let date = new Date();
console.log(date);

let date1 = new Date('May 18 1997 10:20')
console.log(date1);
date1.getFullYear();
console.log(date1);

let date2 = new Date(1997, 4, 18, 10);//indexing of month is starting from 0.
console.log(date2);

let date3 = new Date(1997, 11, 12, 12);
console.log(date3);
date3.setFullYear(1998);
console.log(date3);
date3.setDate(24);
console.log(date3);
date3.getDate();
console.log(date3);