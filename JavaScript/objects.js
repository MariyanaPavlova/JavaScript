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

    let keys = Object.keys(person); //връща всички ключове
    let values = Object.values(person); //връща всички ст-ти
    let entries = Object.keys(person); //връща масив, т.е матрица от []
    //и трите връщат масив[]

    console.log(keys);
    console.log(values);
    console.log(entries);
}
objectsDemo();

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
