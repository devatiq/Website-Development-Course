<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Class 4</title>

    <style>
        body {
            padding: 100px;
            font-size: 25px;
        }
    </style>
</head>
<body>

<?php 
//Indexed Array
//Associative Array
//Multi-Dimensional Array
//Sort Array
/*
sort() - sort arrays in ascending order
rsort() - sort arrays in descending order
asort() - sort associative arrays in ascending order, according to the value
ksort() - sort associative arrays in ascending order, according to the key
arsort() - sort associative arrays in descending order, according to the value
krsort() - sort associative arrays in descending order, according to the key
*/
/*
$cars = array("Volvo 22 15", "BMW", "Toyota");

echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";

echo "<br>";
echo "<br>";

echo "<pre>";
print_r($cars);
echo "</pre>";

//Indexed Array

$cars = array("Volvo", "BMW", "Toyota", "Honda", "Mercedes");

//echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";

 for ($x = 0; $x < count($cars); $x++) {
     echo $cars[$x] . "<br>";
 }

 //Associative Array

 $age = array(
     "Peter" => "35",
     "Ben" => "37",
     "Joe" => "43"
    );

    foreach ($age as $x => $x_value) {
        echo   $x . " " . $x_value . "<br>";

    }

 //Multi-Dimensional Array

$cars = array(

    array("Volvo", 22, 15),
    array("BMW", 18, 13),
    array("Toyota", 12, 10),
    array("Honda", 20, 17),
    array("Mercedes", 17, 13)

);

//echo $cars[2][0] . " in stock " . $cars[2][1] . ", Sold " . $cars[2][2] . "<br>";

for ($row = 0; $row < count($cars); $row++) {
    echo "<p><b>Row number $row</b></p>";
    echo "<ul>";
    for ($col = 0; $col < 3; $col++) {
        echo "<li>" . $cars[$row][$col] . "</li>";
    }
    echo "</ul>";
}

*/

$cars = array("BMW", "Volvo", "Toyota", "Honda", "Mercedes");
rsort($cars);

for ($x = 0; $x < count($cars); $x++) {
    echo $cars[$x] . "<br>";
}

echo "<br>";
echo "<br>";


$age = array(
    "Peter"=>"35",
    "Ben"=>"37",
    "Joe"=>"43",
    "John"=>"29",
    "Mark"=>"55",
    "Mary"=>"19"
);

krsort($age);

foreach ($age as $x => $x_value) {
    echo   $x . " " . $x_value . "<br>";

}









