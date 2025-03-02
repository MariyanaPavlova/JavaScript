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


//Local variable = променливата не може да се извика извън ф-ята
-----------------------
function greet() {

    // local variable
    var message = "Hello";

    
    console.log(`Local: ${message}`);
}

greet();  
console.log(`Global: ${message}`); //Local: Hello ERROR! //ReferenceError: message is not defined  
-----------------------

//Global variable - in JavaScript, a variable declared outside any function or in the global scope
// Може да се достъпи от ф-ята и извън нея
// declare global variable
var message = "Hello";


function greet() {
    console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`); //Local: Hello //Global: Hello

--------------------------
// Block-Level Variables
function display_scopes() {
    // declare variable in local scope
    let message = "local";

    if (true) {

        // declare block-level variable
        let message = "block-level";


        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

display_scopes();

//HOISTING in JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration. 

// use test variable before declaring
console.log(test);

// declare and initialize test variable
var test = 5; // Output: undefined


// 2 Типа
    //Variable Hoisting
    //Function Hoisting

//Variable Hoisting
// use the message variable before declarationзз
console.log(message);

// variable declaration using var keyword
var message; // Output: undefined


...............
// use the message variable before declaration
console.log(message);

// variable declaration using let keyword
let message; 
//ReferenceError: Cannot access 'message' before initialization
//Here, the error occurs because a variable declared with let is not assigned any default value when hoisted.
//When we declare a variable using let or const, it is hoisted to the top of its current scope. 
//However, the variable does not have a default value when it is hoisted (unlike when declared using var

//Function Hoisting
//In JavaScript, function hoisting allows us to call the function before its declaration.

// function call
greeting(); 

// function declaration
function greeting() {
  console.log("Welcome to Programiz.");
} //Welcome to Programiz.


// display number
console.log(number);
var number = 5; // Output: undefined

//The above program is equivalent to:
var number;
console.log(number);
number = 5;
//As you can see, only the declaration is moved to the top.

//Generally, hoisting is not performed in other programming languages like Python, C, C++, and Java.

