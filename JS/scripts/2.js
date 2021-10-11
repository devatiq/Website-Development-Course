/*
JS let and const
JS Operator
  --Arithmetic Operator
    + - * / % ++ --
  --Assignment Operator
    = += -= *= /= %=
JS Functions
JS Objects
*/

/*
let x = 10;
x = 12;
console.log(x);

{
  let y = 20; // allowed
  console.log(y);
  //var y = 10// not allowed
}

{
  let y = 30; //allowed
  //let y = 40 not allowed
  console.log(y);
}

//Hoisting (let/const)
let changeTxt = "this is our CHANGE text";
document.getElementById('firstjs').innerHTML = changeTxt;
//var changeTxt;

*/

/** modulas/division reminder
var x = 12;
var y = 5;
var c = x % y; 
console.log(c);

var a = 10;
a++; //a = a + 1;

var b = 10;
b--; //b = b - 1;
console.log(b);
var a = 10;
a += 15; //a = a + 15;
console.log(a);

var b = 14;
b %= 5; //b = b % 5;
console.log(b);


function imgChange() {
  document.getElementById('ourimg').src="images/img2.jpg";
  document.getElementById('ourimg').style.border="5px solid red";
  document.getElementById('ourimg').style.borderRadius="12px";
}

function myFunction(a,b) {
  return a * b;
}
let x = myFunction(5,4);
console.log(x);

function toCel(Fah) {
return (5/9) * (Fah-32);
}

let ourCel = toCel(100);

console.log(ourCel);
*/

const myProfile = {
  firstName:"Atiqur",
  lastName:"Rahman",
  myAge:"1000",
  myJob:"Coding",
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

myProfile.myAge = "100";
myProfile.myEdu = "Bsc";
console.log(myProfile.fullName());

















