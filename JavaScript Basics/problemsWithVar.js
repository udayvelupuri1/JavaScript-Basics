var a = 21
var a = 35 //issue one is reDeclaration
console.log(a)

if(a === 35){
    var b = 40 //this varible can be accesses outside also so problem(Scoping)
    console.log(b)
}
console.log(b)

// Function scope
// Variables declared within a function are only accessible within that function and any nested functions within that function. 
// Block scope
// Variables declared within a block of code enclosed within curly braces ({}) are only accessible within that block.