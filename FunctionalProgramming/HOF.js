// let arr = [1,2,3,4,5]

// let sqauredArr = []

// for(let i=0;i<arr.length;i++){
//     sqauredArr.push(arr[i]*arr[i])
// }
// console.log(sqauredArr)

//map
//Map will loop through every element of your array and will perform specific operations that you have provided
//Map method will always return you a new array with your results
const num = [1,2,3,4,5]
const squaredNum = num.map(function(n){
    return n*n;
})
console.log(squaredNum)

const transactions = [1000,3000,4000,2000,-898,3800,-4500];

const rs = 80

let transInRupees = transactions.map(function(n){
    return (n/rs).toFixed(0)
})
console.log(transInRupees)

//For Each
//same as map but wont returns anything you should use console.log instead of return
