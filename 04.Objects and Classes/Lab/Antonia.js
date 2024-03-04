let test = {}

console.log(test);

test.firstName = 'Antonia'
test['lastName'] = 'Atanasova' 
console.log(test);


const createObj = (firstName, lastName, age) => ({
    firstName,
    lastName,
    age,
});
console.log(createObj())

console.log(Object.keys(text)
console.log(Object.values(text)
console.log(Object.entries(text)

//------------------

for (key in object) {
    Each iteration returns a key (x)
}

const person = {fname:"John", lname:"Doe", age:25};

for (let key in person) {  // loops through the properties of an Object
  const value = person[key];
  console.log(value) //John Doe 25
}

for (let i of Object.values(person)){  //loops through the values of an iterable object.
    console.log(i); //John Doe 25
}

for (let [key, value] of Object.entries(person)){
    console.log(key)
    console.log(value)
}

Object.keys(meetings).forEach((day) => {
    console.log(`${day} -> ${meetings[day]}`)
})

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//При копиране на обект Json.parse(Json.stringify())