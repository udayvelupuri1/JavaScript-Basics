let a = 5;           // Number
let b = '5';         // String

console.log(a === b); // Output: false (different types)

let c = 10;          // Number
let d = 10;          // Number

console.log(c === d); // Output: true (same value and type)

let e = null;        // Null
let f = undefined;   // Undefined

console.log(e === f); // Output: false (different types)
let a1 = 5;           // Number
let b1 = '5';         // String

console.log(a == b);  // Output: true (b is coerced to a number)

let c1 = 0;           // Number
let d1 = false;       // Boolean

console.log(c == d);  // Output: true (false is coerced to 0)

let e11 = null;        // Null
let f1 = undefined;   // Undefined

console.log(e == f);  // Output: true (null and undefined are loosely equal)

// jsConcepts.js

// 1. Truthy and Falsy Values
console.log("Truthiness and Falsiness:");
console.log(Boolean(0));            // Output: false (falsy)
console.log(Boolean(""));           // Output: false (falsy)
console.log(Boolean(null));         // Output: false (falsy)
console.log(Boolean(undefined));    // Output: false (falsy)
console.log(Boolean(NaN));          // Output: false (falsy)
console.log(Boolean(1));            // Output: true (truthy)
console.log(Boolean("Hello"));      // Output: true (truthy)
console.log(Boolean([]));           // Output: true (truthy)
console.log(Boolean({}));           // Output: true (truthy)

console.log("\n");

// 2. Shallow and Deep Copy
console.log("Shallow and Deep Copy:");

let originalArray = [1, 2, { a: 3 }];
let shallowCopy = originalArray.slice(); // Shallow copy

// Modifying the nested object in the original array
originalArray[2].a = 4;

console.log("Original Array:", originalArray); // Output: [1, 2, { a: 4 }]
console.log("Shallow Copy:", shallowCopy);     // Output: [1, 2, { a: 4 }] (affected by change)

let deepCopy = JSON.parse(JSON.stringify(originalArray)); // Deep copy
originalArray[0] = 100;

console.log("Original Array after modifying:", originalArray); // Output: [100, 2, { a: 4 }]
console.log("Deep Copy:", deepCopy); // Output: [1, 2, { a: 4 }] (not affected by change)

console.log("\n");

// 3. Primitive and Reference Data Types
console.log("Primitive and Reference Data Types:");

let num = 42; // Primitive type
let str = "Hello"; // Primitive type
let bool = true; // Primitive type

let arr = [1, 2, 3]; // Reference type (array)
let obj = { key: "value" }; // Reference type (object)

// Modifying primitive values
num = 100; // num is copied, original value is unchanged
console.log("Primitive number:", num); // Output: 100

// Modifying reference types
arr[0] = 10; // Changes original array
console.log("Reference array:", arr); // Output: [10, 2, 3]

console.log("\n");

// 4. Closures in JavaScript
console.log("Closures in JavaScript:");

function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable
    }

    return innerFunction; // Returning inner function
}

const closureFunc = outerFunction();
closureFunc(); // Output: "I am from outer function"

console.log("\n");

// 5. Function Currying
console.log("Function Currying:");

function multiply(x) {
    return function(y) {
        return x * y; // Returning product
    };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // Output: 10
console.log(multiply(3)(4)); // Output: 12

console.log("\n");

// 6. Type of Operator in JavaScript
console.log("Type of Operator:");

console.log(typeof 42);          // Output: "number"
console.log(typeof "Hello");     // Output: "string"
console.log(typeof true);        // Output: "boolean"
console.log(typeof undefined);    // Output: "undefined"
console.log(typeof null);        // Output: "object" (this is a known quirk in JS)
console.log(typeof []);          // Output: "object" (arrays are objects)
console.log(typeof {});          // Output: "object" (objects)

console.log("\n");

// 7. Array.isArray Method
console.log("Array.isArray Method:");

console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray("Hello"));    // Output: false
console.log(Array.isArray({}));          // Output: false
console.log(Array.isArray(null));        // Output: false

console.log("Done!");
