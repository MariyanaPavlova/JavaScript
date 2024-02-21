
let cars = ["BMW", 'Audi', 'Opel']
let firstCar = cars[0]
let lastCar = cars[cars.length-1]
console.log(cars[-1])  //undefined

let emptyArr = [] //Truth - проверката е с if(emptyArr ===0)
let emptyStr = '' //Falsy

for (let i of cars){}

for (let i=0; i < Array.length; i+=2) {}

let numb = [10,20,30,40];
let[a,b, ...elems] = numb; //rest оператор
console.log(elems) //[ 30, 40 ]
let[...elems] = numb;
console.log(elems) //[ 10, 20, 30, 40 ]

let numbers = [10,20,30,40,50];
console.log(numbers.length) //5
const last = numbers.pop()  //50  - маха посл.ел и го връща
console.log(last)
console.log(numbers.length)  //4

const el = numbers.push(5,10)  //добавя накрая и връща целия масив[ 10, 20, 30, 40, 5, 10 ]
console.log(numbers) 

const first = numbers.shift() //10 -remove 1st el and return el
console.log(first)

console.log(numbers.unshift(4)) //add el and return length
console.log(numbers) //[ 4, 20, 30, 40, 5, 10 ]
console.log(numbers.slice(1,3)) //връща отрязък но не променя оригинала

CallBack -ф-я която подаваме като п-р на др.ф-я

sort((a,b) => a-b)
sort((a,b) => a+b)
sort((a,b) => a.localCompare(b))
join(', ') //от [1, 2, 3]=> 1 2 3 
split(", ") //от стринг към []