var arr1 =  [12,'uday',true,12.4]
console.log(arr1)
arr1[0] = "kumar"
console.log(arr1[0])
console.log(arr1.length)

// inbuilts js array methods
var arr2 = [12,14,56,57]
arr2.pop() //last element
console.log(arr2)
arr2.push("Uday") //add last
console.log("pushed" , arr2)
arr2.shift() // remove first
console.log(arr2)
arr2.unshift(true);
console.log(arr2)

var arrrr = []
for(var i=0;i<6;i++){
    arrrr.push(i);
}
console.log(arrrr)
