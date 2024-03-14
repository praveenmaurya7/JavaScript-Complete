// Variables are containers for Data.
// strings are always stored in double or single quote.
fullname = "Tony Strak";
// for print the value of variable as it is, don't use double qoute in console.log
console.log (fullname);

price = 99.99;
console.log(price);

x = null;
// known but empty value
console.log (x);
y = undefined; 
// undefined means don't know what it is
console.log (y);

// boolean type -> true value or false value

isFollow = true;
console.log (isFollow);

// JS is a dynamically typed language because it can store any value in any variable.
// don't tell about data type priorily
// equal to (=) is assignment operator which assign the value

fullname_ = 25;
console.log(fullname_)

// we can give any name to variables but should follow some rules :
// 1- Variable names are case sensitive; "a" & "A" are different.

fullname = "Praveen Maurya";
FULLNAME = "Praveen Kumar Maurya";

console.log (fullname);
console.log (FULLNAME);

// 2- ONLY letters, digits, underscore(_) and $ is allowed. (not even space).

fullname_ = "pkm";
fullname$ = "pk";
fullname12= "pm";

// 3- ONLY a letter, underscore(_) or $ should be 1st character.

fullname = "pkm";
_fullname = "pkm";
$fullname = "pkm";

// 4- Reserved words can't be variable names.
// for ex: console which is fixed value of JS can't be use as a variable name but Console with capital C can use as a Variable name.
// for more reserved words refer to mdn.

Console = "apna college";

console.log (Console);

// /Always try to write the variables in Camel Case (In camelCase, each word is concatenated without spaces, and the first letter of each word (except the first word) is capitalized.)
// ex:
// isFollow
// totalPrice

// three keywords is used just before the variale names,

// 1-let: Variables cannot be redeclared but can be updated. A block scope variable.

let fullName = "praveen maurya";
let age = 24;
age= 52;
let totalPrice = 1000;

console.log (fullName);

// 2-const: Variables cannot be redeclared or updated. A block scope variable. ex: pi
// const always write with an initialize value but let can write without initialize value 
let a 

const PI = 3.14;

console.log (PI);

// 3-var: can be redeclared & updated. A global scope variable. it is old method.

// block scope -> { }
// ex:
 {
    let a = 5;
    console.log(a);
 }

 {
    let a = 10;
    console.log(a);
 }