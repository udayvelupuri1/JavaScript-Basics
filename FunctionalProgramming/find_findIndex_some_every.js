//Find returns the first element of an array that Stisfy the condition
const transactions = [-1000,3000,4000,2000,898,3800,4500];
let firstWithdrawl = transactions.find(function(n){
    return n<0
})
console.log(firstWithdrawl)
//findIndex
let firstWithdrawlIndex = transactions.findIndex(function(n){
    return n<0
})
console.log(firstWithdrawlIndex)
//some method
//some: Condition Check: To get true or false based on a condition
//it will return true if even 1 element satisfies the condition

let result = transactions.some(function(n){
    return n>0
})
console.log(result)

//every method

let result2 = transactions.every(function(n){
    return n>0
})
console.log(result2)
