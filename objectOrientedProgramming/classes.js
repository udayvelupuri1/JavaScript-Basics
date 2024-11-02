class Person {
    constructor(_name,_age){
        this.name = _name
        this.age = _age
    }
    welcome(){
        console.log(`Welcome to javascript and ${this.name}`)
    }
}
let Person1 = new Person('Uday',22)
let Person2 = new Person('Ucvcday',2452)
let Person3 = new Person('Udasdffy',2245)
console.log(Person1)
console.log(Person2)
console.log(Person3)
Person1.welcome()