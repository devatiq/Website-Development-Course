/*
JS Comparison Operators
 == != > < >= <= === !==
JS Logical Operators
 && || !
JS Conditional/Ternary Operators
 (.. ? .. :..):
Conditional Statements
 if, if..else, if..else if
Switch Statement
*/

/*
let a = 10;
let b = 12;

let c = a < b;

console.log(c)

let a = 10;
let b = 12;

let c = a >= b;

console.log(c)

let a = 10;
let b = '10';

let c = a !== b;
console.log(c)

let a = 10;
let b = 10;

let c = (a === b) && (a >= b) && (a == b);

//All true ---> true 
//Any one false --> False

console.log(c)

let a = 10;
let b = 10;

let c = (a !== b) || (a > b) || (a != b);

//any one true ---> True 
//All false --> False

console.log(c)

let a = 10;
let b = 10;

let c = !(a != b); //true

console.log(c)

let a = 9;
let b = 11;

let c = (a <= b) ? 100 : 200;

console.log(c)

let a = 7;
let b = 7;

if (b <= a) {
console.log('this will be executed')
}

if (7 > 5) {
    console.log('this will be executed 2 ')
    }

if (50< 100) {
    console.log('this will be executed 3')
}
        
let myAge = 18;

if (myAge !== 18) {
console.log('You are Teenager');
} else {
    console.log('You are child or adult');
}

let myAge = 20;

if (myAge >= 18) {
console.log('You are Teenager');
} else if (myAge !== 20){
    console.log('You are adult');
} else {
    console.log('You are not Human');
}

*/

let x = 30;

if (x > 20) {
    if (x > 25){
  console.log('This is true');
    }
}


/*

let myAge = 17;

switch(myAge) {
    case 18:
    console.log('You are adult');
    break;

    case 17:
    console.log('You are Teenager');
    break;

    case 60:
    console.log('You are old');
    break;

    default:
    console.log('You are not human');
}

*/

let myDay = 'Friday';

switch(myDay) {
    case 'Saturday':
    console.log('This is Saturday');
    break;

    case 'Sunday':
    console.log('This is Sunday');
    break;

    //....

    case 'Friday':
    console.log('This is Off Day');
    break;

    default:
    console.log('This is not a day at all');
}
























