/* Operators in JS:
// Used to perform some operation on data

// 1- Arithmetic Operators:
// +, -, *, /

let a = 5;
let b = 2;

console.log("a =", a, " & b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

// Modulus -> % (It gives the remainder value)

console.log("a % b =", a % b);

// Exponentiation -> ** (It gives power)

console.log("a ** b =", a ** b); //it means 5^2 = 25

// above operators always requires two operands such as a,b
// but unary operators works on single operators

// Unary Operators
// i) Increment -> ++ (Means a + 1)
// ii) Decrement -> -- (Means a - 1)

// a ++; //6
// a --; //4
// console.log("a =",a);

// a++ -> post increment
// ++a -> pre increment 
// a-- -> post decrement
// --a -> pre decrement

// console.log ("++a = ", ++a); //6 (first change the value then print)
// console.log ("a++ = ", a++); // 5 (in first line only prints the value of a)
// console.log ("a =", a); // 6 (in next line print the changed value)

// console.log ("--a = ", --a); //4 (first change the value then print)
console.log ("a-- = ", a--); //5 (in first line only prints the value of a)
console.log ("a =", a); //4 (in next line print the changed value) 


// 2- Assignment Opeartors: 

// i) = (value go from right to left)
// ii) += , -= , *= , /= , ( it means a += 1  --> a= a + 1 )

let a = 5;
let b = 2;

// a += 4; // a = a + 4
// a -= 4; // a = a - 4
// a *= 4; // a = a * 4
// a /= 4; // a = a / 4
//  a %= 4; // a = a % 4
 a **= 4; // a = a ** 4

console.log("a =", a); */

// 3- Comparison Operators:
// used to compare two values

// i) Equal to --> (==)
// let a = 5;
// let b = 2;
// console.log("5 == 2", a == b); //false

// let a = 5;
// let b = 5;
// console.log("5 == 5", a == b); //true

// ii) Not Equal to --> (!=)
// let a = 5;
// let b = 5;
// console.log("5 != 5", a != b); //false

// let a = 5;
// let b = 2;
// console.log("5 != 2", a != b); //true

// let a = 5; //number
// let b = "5"; // string (here string converted into number because it has no. only)
// console.log("a == b", a == b); //true

// for not comparing string and no. equally,
//stricted and work with data type.

// iii)  Equal to & type

// let a = 5;
// let b = "5";
// console.log("a === b", a === b); //flase

// iv) Not Equal to & type 
// let a = 5;
// let b = 2;
// console.log("5 !== 2", a !== b); //true

// Other Comparison operators are ( > , >= , < , <= )

// let a = 5;
// let b = 3;

// console.log ("5 > 3", a > b);//true

// let a = 5;
// let b = 5;

// console.log ("5 <= 5", a <= b);//true

// 4- Logical Operators:
// give final answer by evaluating multiple expression

// Logical AND (&&) --> for the output true the condition 1 and condition 2 both are true.

let a = 6;
let b = 5;

// let cond1 = a > b; //true
// let cond2 = a === 6; //true
// console.log("cond1 && cond2 =",cond1 && cond2);//true

// let cond1 = a > b; //true
// let cond2 = a === 5; //false
// console.log("cond1 && cond2 =",cond1 && cond2);//false

//Logical OR (||) --> dono me se agar ek true to answer true.

//console.log("cond1 || cond2 =", a < b || a === 6); //true

// Logical NOT (!) --> true ko false aur false ko true kar deta hai.

console.log("!(6<5) = ", !(a < b)); //true

