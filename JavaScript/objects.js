//Object - variable that can store multiple data in key-value pairs.
//syntax
const objectName = {
    key1: value1, //property
    key2: value2, //property
    ...,
    keyN: valueN
};

//*************
//create person object
const person = {
    name: "Bobby", //properties
    hobby: "Dancing",
};

// access property Dot notation
console.log(person.name); 
// access property Bracett notation
console.log(person["name"]);
// modify property
person.hobby = "Singing"; // Output: { name: 'Bobby', hobby: 'Singing' }
// add properties
person.No = 14;
person.gender = "Male"; //Output: { name: 'Bobby', hobby: 'Singing', No: 14, gender: 'Male' }
// delete object property
delete person.gender

//********************
// dog object
const dog = {
    name: "Rocky",
    // bark method
    bark: function () {
        console.log("Woof!");
    }

};
// access method
dog.bark();  // Output: Woof!

**************************************

//THIS - this keyword in an object method to access a property of the same object. For example
// person object
const person = {
    name: "John",
    age: 30,
    // method
    introduce: function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);

    }
};

// access the introduce() method
person.introduce(); // Output: My name is John and I'm 30 years old.

---------------
//You can add more methods to a JavaScript object even after we've defined it
// student object
let student = {
    name: "John"
};
// add new method
student.greet = function () {
    console.log("Hello");
};
// access greet() method
student.greet(); // Output: Hello

**************************
// CONSTRUCTION FUNCITON WITH PARAMETERS
function Person (person_name, person_age, person_gender) {

   // assign parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,


    this.greet = function () {
        return (`Hi ${this.name}`);
    }
}

// create objects and pass arguments
const person1 = new Person("John", 23, "male");
const person2 = new Person("Sam", 25, "female");

// access properties
console.log(person1.name); // John
console.log(person2.name); // Sam

-----------------
// use object literal to create
// a single object person
let person = {
    name: "Sam"
}

// use constructor function
function Person () {
    this.name = "Sam"
}

// create multiple objects
// from constructor function
let person1 = new Person();
let person2 = new Person();
-----------------
    
// use Object() constructor to create object
const person = new Object({ name: "John", age: 30 });

// use String() constructor to create string object
const name = new String ("John");

// use Number() constructor to create number object
const number = new Number (57);

// use Boolean() constructor to create boolean object
const count = new Boolean(true);

console.log(person); //{ name: 'John', age: 30 }
console.log(name); //[String: 'John']
console.log(number); //[Number: 57]
console.log(count); //[Boolean: true]

******************************************
in JavaScript, there are two kinds of object properties:
//Data properties
const student = {

    // data property
    firstName: 'Monica';
};

//Accessor properties
//accessor properties are methods that get or set the value of an object. For that, we use these two keywords:
    get - to define a getter method to get the property value
    set - to define a setter method to set the property value

//getter methods are used to access the properties of an object
const student = {
    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica
// accessing getter methods
console.log(student.getName); // Monica
// trying to access as a method
console.log(student.getName()); // error

// setter methods are used to change the values of an object
const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Monica
// change(set) object property using a setter
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah

**************************************
JavaScript Object.defineProperty() - method to add getters and setters

const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica
// changing the property value
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah


//PROTOTYPE - prototypes allow properties and methods to be shared among instances of the function or object.
//add properties and methods to a constructor function using a prototype. For example,
// constructor function
function Person () {
    this.name = "John",
    this.age = 23
}

// create objects
let person1 = new Person();
let person2 = new Person();

// add a new property to the constructor function
Person.prototype.gender = "Male";


console.log(person1.gender);  // Male
console.log(person2.gender);  // Male




//for - loops through a block of code a number of times - също като for of но функционален начин
//for/in - loops through the properties of an object - за обхождане на обекти
//for/of - loops through the values of an iterable object - за обхождане на масиви

function objectsDemo() {

    let person = {
        name: 'Ivo',
        age: 30,
        isDev: true,
    }
    person.gender = 'male'
    person['height'] = 185
    
    console.log(person);

    let keys = Object.keys(person); //връща всички ключове  // ['name', 'age']
    let values = Object.values(person); //връща всички ст-ти  // ['Tom', 5]
    let entries = Object.entries(person); //връща масив, т.е матрица от []   // [['name', 'Tom'], ['age', 5]]
    //и трите връщат масив[]

    function cityInfo(city) {
         let entries = Object.entries(city);
         for (let [ key, value ] of entries) {
                console.log(`${key} -> ${value}`);
 }
}

}


//JSON -a носи само данни, няма функции с себе си
// За пренос на данни, XML също пренася данни, но е по-тежък, файла е по-голям заради таговете

let text = JSON.stringify(obj); //obj -> str

let obj = JSON.parse(text); //str -> obj


function keyOb(param){
// c for in обикаляме ключовете на обекта
let obj = {
    name:"Ivo",
    age:30,
    text:'hello'
}
for (const key in obj){     //==== for (const key of Object.key(obj)
    console.log(key)
    console.log(obj[key]);
}
}
keyOb();

function objConverter(json) {
     let person= JSON.parse(json);
     let entries = Object.entries(person);
    
     for (let [key, value] of entries) {
         console.log(`${key}: ${value}`);
 }
}
