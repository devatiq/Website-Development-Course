/*
-JS Loop Introduction
-Difference between x++ and ++x
-JS For Loop
-JS Do While Loop
-JS While Loop
-Break Statement
-Continue Statement 
-Usage of For Loop
*/

//let x = 5;
//let y = x++;
//console.log(x,y);

//let x = 5;
//let y = ++x;
//console.log(x,y);
/*
let x= 0;
while(x++ <5 ) {
    console.log(x);
}

1,2,3,4,5

console.log('\n reset \n')

let y= 0;
while(++y <5 ) {
    console.log(y);
}

//For Loop
let x = 1;

for (x; x <= 10; x++) {
    console.log(x);
}

//Do while Loop

let x = 20;
do {
    console.log('inside',x);
    x += 1; //x = x + 1;

} while(x<30);
console.log('outside');


//while Loop

let x = 20;
while( x < 30) {
    console.log('inside',x);
    x += 1; //x = x + 1;

} 
console.log('outside');

let x = 1;

for(x; x<20; x++){

    if( x === 10) {
        break;
    }
 console.log(x);   
}

let x = 1;

for(x; x<20; x++){

    if( x === 10) {
    //console.log('10 is skipped');  
        continue;
    }
 console.log(x);   
}

//Multiple statement
let x = 0;
let y = 10;

for(x,y; x<= 10; x++,y--){
 console.log(x,y);   
}

//even
let x = 0;
for(x; x <= 10; x += 2){
 console.log(x);   
}

//factorial
let x = 3;
let fact = 1;

for (x; x > 1; x--){
    fact = fact * x; //fact *= x
}

console.log(fact);

*/

//multiple factorial
let x = 1;
let fact = 1;

for (x; x <=10; x++){
    fact = fact * x; //fact *= x
    console.log(x, 'Factorial', fact);
}




