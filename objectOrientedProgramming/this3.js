'use strict'
// console.log(this)

// function displayThis(){
//     console.log(this)
// }
// displayThis()

// let myObj = {
//     name : 'Uday',
//     age : 22,
//     myFn1 : function(){
//         console.log(this)
//     }
// }
// myObj.myFn1()

let myObj2 = {
    name : 'Uday',
    age : 22,

    myFn2 : function(){
        function myFn3(){
            console.log(this)
        }
        myFn3()
    }
}
myObj2.myFn2()