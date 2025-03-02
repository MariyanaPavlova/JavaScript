//Object - variable that can store multiple data in key-value pairs.
//syntax
const objectName = {
    key1: value1,
    key2: value2,
    ...,
    keyN: valueN
};

//*************
const person = {
    name: "Bobby",
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

---------
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
