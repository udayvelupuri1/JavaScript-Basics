let myObj = {}

console.log(myObj)

let person1 = {
    name :'Adam',
    age : 25
}
console.log(person1)
console.log(person1.hasOwnProperty('name'))

//constructer fn

function Person(){
    this.name = _name
    this.age = _age
}

let person2 = new Person('Steve',90)
console.log(person2)