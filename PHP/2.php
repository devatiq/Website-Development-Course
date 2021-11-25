<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Class 2</title>

    <style>
        body {
            padding: 100px;
            font-size: 35px;
        }
    </style>
</head>
<body>

<?php 
/*
1. PHP Strings
- strlen() // Return the Length of a String
- str_word_count() // Count Words in a String
- strrev() // Reverse a String
- strpos() // Find the Position of a Substring in a String
- str_replace() // Replace a Substring in a String

2. PHP Math
 -pi() function returns the value of PI
 - min() and max() Functions // Return the Smallest and Largest Values
 - abs() Function // Return the Absolute Value of a Number
 - sqrt() Function // Return the Square Root of a Number
 - round() Function // Round a Number to the Nearest Value
 - rand() function // Generate a Random Number

3. PHP Constants

4. PHP Operators
 -Arithmetic operators (+, -, *, /, %)
 -Assignment operators (=, +=, -=, *=, /=, %=)
 -Comparison operators (==, ===, !=, !==, <, >, <=, >=)
 -Increment/Decrement operators (++, --)
 -Logical operators (&&, ||, !)
 -String operators (.) 
 -Conditional assignment operators (?:)

5. PHP if...else...elseif Statements
*/


//echo str_replace("second", "2nd", "this is our second PHP class");

//echo pi();

//echo (min(1,2,3,4,5,6,-7,8,9,10));
//echo "<br>";
//echo (max(1,2,3,4,5,6,-7,8,9,10));


//echo abs(-8995);
//echo sqrt(64);
//echo round(4.4);

//echo rand("10", "20");
/*
define("GREETING", "Welcome to the PHP class!", true);

//echo "Hello " .GREETINg;

function myFunction() {
    echo "Hello " .GREETINg;
}
myFunction();
*/

//$x = 14;
//$y = 3;

//echo $x += 5; // $x = $x + 5
//echo $x %= $y; // $x = $x % $y

//$x = 14;
//$y = "14";

//var_dump($x <= $y); //true

//$x = 14;
//echo --$x; // $x = $x - 1

//$x = 14;
//$y = 19;

//echo $x . $y;

//$x = 14;
//$y = 14;

//echo ($x == $y) ? "100" : "200";

$x = 14;
$y = 15;

if ($x > $y) {
    echo "100";
} elseif ($x == $y) {
    echo "200";
} else {
    echo "300";
}

?>
 

</body>
</html>