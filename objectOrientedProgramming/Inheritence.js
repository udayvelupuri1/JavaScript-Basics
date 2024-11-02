class Person{
    constructor(_name,_age){
        this.name = _name
        this.age = _age
    }
    //Method Inheritence is also Possible
    welcome(){
        console.log(`Welcome ${this.name}`)

    }
}
class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age)
        this.classStrength = _classStrength
    }
    test(){
        super.welcome()
    }

}
class Student extends Person{
    constructor(_name,_age,_cgpa){
        super(_name,_age)
        this.cgpa = _cgpa
    }

}

let Person1 = new Person('Adam', 20)
let Teacher1 = new Teacher('Mark',40,70)

console.log(Teacher1)
Teacher1.test()

