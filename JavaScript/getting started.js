//Declare Variables
var age; /-return undefined -> Value is undefined, type is undefined

let name;

var /-- function-scoped, meaning they can be accessed anywhere within the function including outside the initial block
let /-- block-scoped, meaning they can only be accessed within the block where they were declared.

// constant is a type of variable whose value cannot be changed.
const 


//data type
primitive: [Boolean, null, undefined, Number, String, Symbol, BigInt]
Objects: [including Functions, Arrays)

//Logical operators
! NOT      !false -> true
&& AND     true && false -> false
|| OR      true || false -> true

typeof - return srting, number, Object

▪ "truthy" - true when evaluated in a boolean context
▪ "falsy" - false, null, undefined, NaN, 0, 0n and ""

null represents "no value" or "nothing." 
null is treated as an object

const a = null;
console.log(typeof a); // object
let a;
console.log(typeof a); // undefined
