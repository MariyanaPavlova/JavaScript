function solve(name,grade) {
    console.log(`The name is: ${name}, grade: ${grade.toFixed()}`);
}
solve('Peter', 3.555);

let a = 12.112111
console.log(a.toFixed()) //=Math.round
//резултата обаче от toFixed e стринг

console.log(1 == '1'); //true - сравнява по стойност
console.log(1 === '1'); //false - сравнява по тип и стойност

const isValid = true
const result = isValid ? "is valid" : "is Not" //? true case : false
console.log(result);


const isValid = true;
const isNotValid = false;
console.log(!isValid) //false заради !
console.log(!isValid || isNotValid) //OR в питон, търси поне 1 TRUE

// ! обръща булевата !false = true
// && AND  true && false = false
// || OR  true || false = true

const e = 7.8;
console.log(typeof e); //string 

for (let i=0; i<= 5; i++){  //1 2 3 4 5
    console.log(i)
}

for (let i=5; i>=0; i--){  //5 4 3 ...
    console.log(i)
}

for (let i=0; i < NumA.length; i++){
}

let i=1;
while (i <= 5) {
    console.log(i)
    i++;
}


let a = 5.5
console.log(Number(a)) //5.5
console.log(parseFloat(a)) //5.5
console.log(parseInt(a)) //5


let newNum = String(number); //прави str
"1" + 1 => "11"
"1" + "1" => "11"