//Varsta:
let age = 49;
console.log("My age is", age, "years.");

//Suma a doua numere:
const a = 326;
const b = 124;
let sum = a + b;
console.log("Sum a + b =", sum, "OR:");
console.log(`${a} + ${b} = ${sum}`);

//Celsius to Fahrenheit:
let celsiusTemperature = 26;
let fahrenheitTemperature = (celsiusTemperature * 9 / 5) +32;
console.log(`${celsiusTemperature} C = ${fahrenheitTemperature} F`);

//Hello message:
let char1 = "Hello, ";
let char2 = "!";
const myName = "Horia";
let hello = char1+myName+char2;
console.log("Hello message: \"", hello, "\".");

//Numar par sau impar:
let number = 24;
if (number % 2 === 0){
    console.log(`The number ${number} is EVEN.`);
} else{
    console.log(`The number ${number} is ODD.`);
}

//Student sau nu:
let student = false;
console.log("Student? ", student);

//Concatenare siruri de caractere:
let string1 = "String 1 ";
let string2 = "String 2";
let string = string1 + string2;
console.log("String concat:", string);

//Restul impartirii:
let number1 = 39;
let number2 = 16;
let rest = number1 % number2;
console.log(`The remainder of the division ${number1}/${number2} is`,rest);

//Valoare undefined:
let undefinedValue;
console.log("The value of variable is", undefinedValue);

//Aria dreptunghiului:
let squareLenght = 15;
let sqareWidth = 9;
let sqareArea = squareLenght * sqareWidth;
console.log("The area of the sqare is", sqareArea);

