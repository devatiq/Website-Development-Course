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
let b = 9;
let c = a != b;

console.log(c);

let a = 10;
let b = '10';
let c = a !== b;

console.log(c);


let a = 10;
let b = 9;

let c = (a >= b) && (a > b) && (b> a);

//True --> all true --> True
//one False --> False

console.log(c);

let a = 10;
let b = 9;

let c = (a >= b) || (a > b) || (b> a);

//True --> one true --> True
//All False --> False

console.log(c);

let a = 10;
let b = 10;

let c = !(a === b);

console.log(c);

let a = 10;
let b = 10;

let c = (a != b) ? 100 : 200;

console.log(c);

let a = 7;
let b = 9;

if (7 <= 9 || 8 <= 9 || 9<9) {
    console.log('You will be executed');
}

let myName = 10;

if (myName === '10') {
    console.log('You are Atiqur');
} else {
    console.log('You are not Atiqur');
}


let myAge = 18;

if (myAge === 18) {
    console.log('You are Tenager');
} else if (myAge <= 18){
    console.log('You are Children');
}
else if (myAge === 18){
    console.log('You are Adult');
} else {
    console.log('You are not a human');
}

var myAge = 20;

switch(myAge) {
    case 18:
    console.log('You are Tenager');
   break;

    case 20:
    console.log('You are Adult');
    break;

    case 60:
        console.log('You are old');
    break;

    default:
        console.log('You are not a human');

}
*/

let myDay ='Friday';

switch(myDay) {
 case 'Saturday':
    console.log('This is a Saturday');
    break;

case 'Sunday':
    console.log('This is a Saturday');
    break;

        //....

case 'Friday':
    console.log('This is offday');
    break;

    default: 
    console.log('This is not a day at all');
}






















