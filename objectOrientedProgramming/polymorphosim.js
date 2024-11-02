class Animal{
    sound(){
        console.log('Animal make different sounds')
    }
}
class Dog{
    sound(){
        console.log('Dog Barks')
    }
}
class Cat{
    sound(){
        console.log('Cat Mews')
    }
}


let Animal1 = new Animal()
let tommy= new Dog()
let percy = new Cat()
Animal1.sound()
tommy.sound()
percy.sound()