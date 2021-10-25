/*
- JS HTML DOM Introduction

- DOM Elements
 -- getElementById()
 -- getElementsByTagName()
 -- getElementsByClassName()
 -- querySelectorAll() // querySelector()
 -- Finding HTML elements by HTML object collections

- JS Form Validation
- DOM EventListener
- Creating a popup

*/

//document.getElementById('jstut').innerHTML = "This is our CHANGE TEXT";

//let x = document.getElementsByTagName('p');
//document.getElementById('jstut').innerHTML = x[2].innerHTML;

//let x = document.getElementsByClassName('ctext');
//document.getElementById('jstut').innerHTML = x[0].innerHTML;

//let x = document.querySelectorAll('.ctext');
//document.getElementById('jstut').innerHTML = x[2].innerHTML;

//let x = document.querySelector('.ctext4');
//document.getElementById('jstut').innerHTML = x.innerHTML;

//let x = document.getElementById('lname');
//document.getElementById('jstut').innerHTML = x.value;
/*
let x = document.forms['form1'];
let text= "";

for (let i =0; i < x.length; i++) {
    text += x.elements[i].value + '<br>';
}

document.getElementById('jstut').innerHTML = text;
*/

/*

function validateForm() {
 let x = document.forms['form2']['fname2'].value;

 if ( x=="") {
     alert("Please fill up the form");
     return false;
 }
}

let x = document.getElementById('btn1');

x.addEventListener('click', alert1);
x.addEventListener('click', alert2);

function alert1() {
    alert('this is alert 1');
}

function alert2() {
    alert('this is alert 2');
}

*/

let button = document.querySelector('#btn1');
let popup = document.querySelector('#popup');
let closepop = document.querySelector('.closepop');

button.addEventListener('click', showpop);
closepop.addEventListener('click', hidepop);

function showpop(){
    popup.classList.add('active');
}

function hidepop() {
   popup.classList.remove('active');
}
