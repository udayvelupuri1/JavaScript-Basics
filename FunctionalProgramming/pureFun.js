
var a = 4
//impure function
function addImpure(x){
    console.log(x+a)
    a++;
}
addImpure(2)
addImpure(2)
addImpure(2)

//Pure Functions
function addPure(x,a){
    //console.log(x+a)
    return x+a
}
console.log(addPure(2,3))
console.log(addPure(2,3))
console.log(addPure(2,3))
console.log(addPure(2,3))
console.log(addPure(2,3))