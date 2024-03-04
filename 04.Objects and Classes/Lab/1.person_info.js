function personInf(firstName, lastName, age) {
    let obj = {}
    obj.firstName = firstName
    obj.lastName = lastName
    obj.age = age
    return obj
   
}
    // age = Number(age)
    // let person = {firstName:firstName, lastName:lastName, age:age}
    // return person
   
const createObj = (firstName, lastName, age) => ({
    firstName,
    lastName,
    age,
});

console.log(personInf("Peter", "Pan", "20"))
console.log(personInf("George", "Smith", "18"))