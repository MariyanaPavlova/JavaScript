// FOR
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

//-CTRL + / {бутона до шифт}

// FOR OF loops through the values of an iterable object.
//const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
}

//FOR IN - loops through the properties of an Object:
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
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

