let arr = ['Hi','I',,'am','Uday']
// let a = arr[1]
// let b = arr[2]
// console.log(a)
// console.log(b)
let [a,b,c,d,e] = arr
//console.log(c)

//destructuring objects

let myObj = {
    name : 'Adam',
    age : 25,
    gender : 'M',
    address : {
        country : 'England',
        City : 'london'
    }
}

let {f,g,h} = myObj
//console.log(f,g,h) undefined 3 times
let {name :n,age:t,gender:m,address:{country}} = myObj // use same object variables
console.log(n)
console.log(t)
console.log(m)
console.log(country)


