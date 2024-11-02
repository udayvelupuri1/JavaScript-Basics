//sum of elements of an array

let num = [1,2,3,4,10]
let sum = 0
for(let i =0;i<num.length;i++){
    sum += num[i]
}
console.log(sum)
//Reduce
let result = num.reduce(function(acc,value){
    return acc+value

},0)
console.log(result)
let res = num.reduce(function(acc,value){
    return acc*value

},1)
console.log(res)