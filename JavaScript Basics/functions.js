function add(a,b){
    console.log(a*b)
}
function greet(){
    console.log("Hello")
}
greet()
add(3,4)

//Function Expression

var a = 6+5-3
console.log(a)
//anonymous function
var multiply = function(x,y){
    return x*y
}
var res = multiply(6,4)
console.log(res)

//Hoisting: we can call even before declaring the variables
console.log(c)
greeting()
var c = 'hi'
function greeting(){
    console.log("Welcome")
}
// we use function expressions to get rid off from auto calling of functions even before declaring it