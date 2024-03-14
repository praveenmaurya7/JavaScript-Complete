// Data Types in JS
// Primitive Datatypes (7)
// 1- Number

let price = 100.50;

// 2- String

let name = "tony";

// 3-Boolean

let isFollow = false;

// 4-Undefined 
// by default sabhi variables undefined hote hai jab tak unme koi value nhi hoti.

{let x;}

// 5-Null

{let x = null;}

// 6- Bigint

let x = BigInt("123");

// 7- Symbol

let y = Symbol("Hello!");

// Non-Primitive
//  object -> Collection of Values
// Generally object are declare by const
// key: value

const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};

// for accesing the key in the object ->
// object.key   or    object["key"]

// for change the value
student["age"] = student["age"] + 1;
student["name"] = "Rahul Sharma";

console.log(student.cgpa);
console.log(student["age"]);
console.log(student["name"]);

// let -> can be updated
// const -> can't be updated 
// keys of const object can be updated.
