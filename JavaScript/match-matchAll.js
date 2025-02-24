//mathc -  не е задължителен глобален флаг g 
// без използване на g връща индекс и входен стринг на reg, но само на 1вото съвпадение 
// при използване на g връща само масив 
const str = "Hello hello world";
const regex = /hello/i; // Без 'g'
console.log(str.match(regex)); 
// ["hello", index: 6, input: "Hello hello world", groups: undefined]

const regexGlobal = /hello/gi;
console.log(str.match(regexGlobal)); 
// ["Hello", "hello"]  (само съвпадащите стойности)


//mathcAll() винаги глобален флаг g , но винаги връща индекс и входен стринг на reg
//връща Iterator съдържащ обект със съвпаденията
const str1 = "Hello hello world";
const regex1 = /hello/gi;
const matches = str1.matchAll(regex1);

for (const match of matches) {
    console.log(match);
}
// ["Hello", index: 0, input: "Hello hello world", groups: undefined]
// ["hello", index: 6, input: "Hello hello world", groups: undefined]
