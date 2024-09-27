//Varsta:
let age = 49;
console.log("My age is", age, "years.");
console.log("-------");

//Suma a doua numere:
const a = 326;
const b = 124;
let sum = a + b;
console.log("Sum a + b =", sum);
console.log("OR");
console.log(`${a} + ${b} = ${sum}`);
console.log("-------");

//Celsius to Fahrenheit:
let celsiusTemperature = 26;
let fahrenheitTemperature = (celsiusTemperature * 9 / 5) +32;
console.log(`${celsiusTemperature} C = ${fahrenheitTemperature} F`);
console.log("-------");

//Hello message:
let char1 = "Hello, ";
let char2 = "!";
const myName = "Horia";
let hello = char1+myName+char2;
console.log("Hello message: \"", hello, "\".");
console.log("-------");

//Numar par sau impar:
let number = 24;
if (number % 2 === 0){
    console.log(`The number ${number} is EVEN.`);
} else{
    console.log(`The number ${number} is ODD.`);
}
console.log("-------");

//Student sau nu:
let student = false;
console.log("Student? ", student);
console.log("-------");

//Concatenare siruri de caractere:
let string1 = "Un string oarecare ";
console.log("String 1:", string1);
let string2 = "Un alt string oarecare";
console.log("String 2:", string2);
let string = string1 + string2;
console.log("String concat:", string);
console.log("-------");

//Restul impartirii:
let number1 = 39;
let number2 = 16;
let rest = number1 % number2;
console.log(`The remainder of the division ${number1}/${number2} is`, rest);
console.log("-------");

//Valoare undefined:
let undefinedVariable;
console.log("The value of undefined variable is", undefinedVariable);
console.log("-------");

//Aria dreptunghiului:
let squareLenght = 15;
console.log("Square lenght:", squareLenght);
let sqareWidth = 9;
console.log("Square width:", sqareWidth);
let sqareArea = squareLenght * sqareWidth;
console.log("The area of my sqare is", sqareArea);
console.log("-------");

//Verificare daca doua siruri de caractere sunt identice:
string1 = "sir de caractere";
string2 = "sir de caractere";
console.log(`\"${string1}\" === \"${string2}\"`, string1 === string2);
console.log("OR:");
if(string1 === string2){
    console.log("Those strings are identical.");
} else{
    console.log("Those strings are NOT identical.");
}
console.log("-------");

//Operatii logice cu doua variabile boolean:

console.log("Boolean variable:");
let booleanVariable1 = true;
console.log("Variable1:", booleanVariable1);
let booleanVariable2 = false;
console.log("Variable2:", booleanVariable2);
console.log("Variable1 === Variable2", booleanVariable1 === booleanVariable2);
console.log("Variable1 !== Variable2", booleanVariable1 !== booleanVariable2);
console.log("(Variable1 === Variable2) || (Variable1 !== Variable2)", (booleanVariable1 === booleanVariable2) ||
(booleanVariable1 !== booleanVariable2));
console.log("(Variable1 === Variable2) && (Variable1 !== Variable2)", (booleanVariable1 === booleanVariable2) &&
(booleanVariable1 !== booleanVariable2));
console.log("-------");

//Calcul varsta:
const birthYear = 1975;
console.log("Your birthyear:", birthYear);
// let currentYear =2024;
let currentYear = new Date().getFullYear();
console.log("Current year:", currentYear);
let yourAge = currentYear - birthYear;
console.log(`In ${currentYear} you turned / you will be ${yourAge} years old.`)
console.log("-------");

//Concatenare siruri de caractere si convertire in majuscule:

console.log("String 1:", string1);
console.log("String 2:", string2);
let concat = string1 + string2;
console.log("String 1 concatenate with String 2:", concat);
concatUppercase = concat.toUpperCase();
console.log("String 1 concatenate with String 2 and uppercase:", concatUppercase);
console.log("-------");

//verificare numar >= 100:
console.log(`${number} >= 100:`, number >= 100);
console.log("OR:");
if(number >= 100){
    console.log(`The number ${number} is greater or equal to 100`);
} else{
    console.log(`The number ${number} is not greater or equal to 100`);
}
console.log("-------");

//Convertirea distantei din km in mile:
let distance = 48;
let distanceMiles = distance * 0.621371;
console.log(`${distance} kilometers = ${distanceMiles} miles.`);
console.log("-------");

//Verificare tip de data null:
let nullValue = null;
console.log("The variable nullValue is:", nullValue);
console.log("-------");

//Verificare egalitate a doua numere:
number1 = 35;
number2 = 85;
console.log(`${number1} === ${number2}:`, number1 === number2);
console.log("OR:");
if(number1 === number2){
    console.log(`The number ${number1} is equal to number ${number2}`);
} else{
    console.log(`The number ${number1} is not equal to number ${number2}`);
}
console.log("-------");

//Pret cu reducere:
let originalPrice = 460;
let discount = 15;
let newPrice = originalPrice - (originalPrice * discount / 100);
console.log("Original price: ", originalPrice);
console.log("Discount:", discount);
console.log("New price:", newPrice);
console.log("-------");