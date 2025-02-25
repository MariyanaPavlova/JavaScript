//3 синтаксиса
//Хосктинга е специфика само и единствено на на функ.декларейшъна
//Function declaration
function log(){
    console.log("Some text");//принтиране в конзолата
    //тук функцията ще принтира текста в конзолата, но ще върне р-т undefined
}

//Function expression
cosnt log2 = function(){
    let name = "Gosho";
    console.log("Some text 2");
}

//Arrow function
const log3 = () => console.log("Some text3");

//Function invokation
log();
log2();
log3();

------------------
//Ако 1 функция няма return връща undefined

sumNumbers(2,5);

//не може да бъде извикана от ред2, защото не е декларирана още
let sumNumbers = function(first, second){ 
    console.log(first + second)
}
//може да се извика от ред2- hoisting
function sumNumbers(first, second){
    console.log(first + second)
}

//Returna спира изплънениено ф-ята + връща ст-т, ако няма return резултата от ф-ята ще е undefined
function sumOfTwo(first, second){
    return first + second  
    console.log()   //!!! След return кода е недостъпен      
}   

function finalSum(sum, last){
    console.log(sum + last)
}
//тук отива резултата от retun-a
finalSum(sumOfTwo(5,10), 20)

//може да се използва директно в експрешън
let total = getPrice() * quantity * 1.20

//
function demo(){
    return 5;
}
demo()

function name(){
    let num = demo();
    console.log(num + 2);
}
name()

//arrow function
function demo(){
    
    let sum = (a, b) => a + b //кратка е и може без {}и return
    /*let sum = (a,b) => {
        return a + b
    } слага се скоуп т.е{} и return задължително при по-дълга ф-я */
    
    console.log(sum(3,5));
}
demo()
