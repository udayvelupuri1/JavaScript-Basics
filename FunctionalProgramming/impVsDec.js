// we will bew given a number and we have to check that if the square of that number is even or not

//Imperative way
const a = 5
let isEven
if(a*a %2 == 0){
    isEven = true
}
else{
    isEven = false
}
console.log(isEven)

//Declarative Way

const checkForSquare = (x)=> (x*x%2 == 0 ? true : false)
console.log(checkForSquare(4))