function Person(_name,_age){
    this.name = _name
    this.age = _age
}

Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}


let Person1 = new Person('Adam',25)
let Person2 = new Person('Steeve',30)
console.log(person1)
console.log(person2)