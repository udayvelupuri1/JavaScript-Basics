//you have to check for even numbers in an array and put them in separate atrray

let numbers = [1,2,20,35,12,17,6]
let evenArray = []
for(let i =0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evenArray.push(numbers[i])
    }
}
//console.log(evenArray)

//filter Method

let even = numbers.filter(function(n){
    return n%2 == 0
})
console.log(even)

const transactions = [1000,3000,4000,2000,-898,3800,-4500];
const positive = transactions.filter(function(n){
    return n>0
})
console.log(positive)