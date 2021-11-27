<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Class 3</title>

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
- PHP Switch Statement
- PHP While loop
- PHP do...while loop
- PHP for loop
- PHP foreach loop
- PHP Break and Continue
*/

/*
$offday = "Friday";

switch ($offday) {
    case 'Monday':
        echo "Today is Monday";
        break;
    case 'Tuesday':
        echo "Today is Tuesday";
        break;
    case 'Wednesday':
        echo "Today is Wednesday";
        break;
    case 'Thursday':
        echo "Today is Thursday";
        break;
    case 'Friday':
        echo "Friday is a offday";
        break;
    case 'Saturday':
        echo "Today is Saturday";
        break;
    case 'Sunday':
        echo "Today is Sunday";
        break;

    default:
        echo "Today is not a working day";
        break;
}

$x = 7;
while ($x <= 100) {
    echo $x . "<br>";
    $x += 10; // $x = $x + 10;
}

$x = 7;

do {
    echo $x . "<br>";
    $x++;
} while ($x <= 20);


for ($x = 10; $x <= 100; $x += 10) {

    echo $x . "<br>";
    
}

$cars = array("Volvo", "BMW", "Toyota", "Honda");

foreach ($cars as $value) {
    echo $value . "<br>";
}

*/

for ($x = 1; $x <= 15; $x++) {
    if ($x==7) {
        break;
    }
    echo $x . "<br>";   
}


echo "Continue Statement <br>";
for ($x = 1; $x <= 15; $x++) {

    if ($x==7) {
        echo "Skip 7 <br>";
        continue;
    }
    
    echo $x . "<br>";   
}


?>
 

</body>
</html>