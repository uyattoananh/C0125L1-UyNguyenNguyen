/*Bai tap 1*/
let inputPhysics;
let inputChemistry;
let inputBiology;
inputPhysics = prompt("Enter Physics");
inputChemistry = prompt("Enter Chemistry");
inputBiology = prompt("Enter Biology");

let physics = parseInt(inputPhysics);
let chemistry = parseInt(inputChemistry);
let biology = parseInt(inputBiology);
let average = (physics + chemistry + biology)/3;
let sum = (physics + chemistry + biology);
document.write("Diem trung binh la: " + average);
document.write("Diem tong la: " + sum);

/*Bai tap 2*/
let inputCelsius;
inputCelsius = prompt("Enter Celsius");
let celsius = parseInt(inputCelsius);
let fahrenheit = (celsius - 32)/9
document.write(inputCelsius + " C in Fahrenheit is" + fahrenheit +"F");

/*Bai tap 3&4*/

let inputRadius;
inputRadius = prompt("Enter Radius");
let radius = parseInt(inputRadius);
let area_circle = Math.PI * radius * radius;
let circumference = Math.PI * 2 * radius;
document.write("A circle with radius" + radius + "has an area of" + area_circle + "and a circumference of" + circumference);

