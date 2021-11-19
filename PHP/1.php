<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Class 1</title>

    <style>
        body {
            padding: 100px;
            font-size: 35px;
        }
    </style>
</head>
<body>

<?php 

$car = "volvo";
//code goes here
echo "<h1>Hello World!</h1>";

eCho "<h2>Hello World! $car</h2>";

//single line comment
#single line comment
/* multiple 
line 
comments
*/

//Variables

$name = "John";

echo "my name is $name <br>";

echo "my name is " .$name. "<br>";

//$x = 5;
//$y = 10;
//$z = $x + $y;
//echo $z;

function myfunction() {
    global $x, $y, $z;
    $x = 5;
    $y = 10;
    $z = $x + $y;
}
myfunction();
echo $z;
echo "<br>";

function myanotherfun() {
    static $x = 10;
    echo $x;
    $x--;
}
myanotherfun();
echo "<br>";
myanotherfun();
echo "<br>";
myanotherfun();
echo "<br>";
myanotherfun();
echo "<br>";

print "hello world;";
echo "<br>";
echo "<br>";

$a = 10; // integer
$b = "this is a text"; //string
$c = 10.5; //float
$d = true / false; //boolean
$e = null; //null
$f = array(1,2,3,4,5); //array

var_dump($f);



?>
 

</body>
</html>