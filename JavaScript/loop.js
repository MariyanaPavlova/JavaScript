// FOR
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

//-CTRL + / {бутона до шифт}

****************
//WHILE
// initialize variable i
let i = 1;

// loop runs until i is less than 4
while (i < 4) {
    console.log(i);
    i += 1;
}

****************
// FOR OF loops through the values of an iterable object.
//const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
}

//FOR IN - loops through the properties of an Object:
//минава през key 
//Ако го използваме за Array ще ни даде просто индексите 0, 1, 2 - за Array For of
//For of не може да се използва за Objеct 
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {    // === for (let x in Object.key(person))
  text += person[x];
}

const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

//FOR EACH()
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

