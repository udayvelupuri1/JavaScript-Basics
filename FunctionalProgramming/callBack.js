function printFirstName(firstname,cb){
    console.log(firstname)
   cb('Rogers')
}
printFirstName('Steeve',printLastName) //callback
function printLastName(lastname){
    console.log(lastname)
}

const isEven = (n)=>{
    return n%2 == 0
}

let printRes = (evenFn,num)=>{
    const isNumEven = evenFn(num)

    console.log(`The number ${num} is an Even Number ${isNumEven}`)
}
printRes(isEven,167)
