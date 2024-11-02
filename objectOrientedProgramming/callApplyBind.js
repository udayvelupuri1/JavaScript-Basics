let person1 = {
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 102,
    printDetails: function() {
        console.log(`Hi, I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
    }
};

let person2 = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 41
};

// Using `call` method to invoke printDetails with `person2` as the context
// `call` allows us to call a function with a specified `this` value and individual arguments
person1.printDetails.call(person2);  // Output: Hi, I am Tony Stark and I am 41 years old

// Using `apply` method to invoke printDetails with `person2` as the context
// `apply` is similar to `call`, but it takes an array of arguments instead of individual arguments
person1.printDetails.apply(person2);  // Output: Hi, I am Tony Stark and I am 41 years old

// Using `bind` method to create a new function with `person2` as the context
// `bind` doesn't immediately call the function; it returns a new function that can be invoked later
let boundFunction = person1.printDetails.bind(person2);
boundFunction();  // Output: Hi, I am Tony Stark and I am 41 years old

// Calling printDetails on `person1` without changing context
person1.printDetails();  // Output: Hi, I am Steve Rogers and I am 102 years old
