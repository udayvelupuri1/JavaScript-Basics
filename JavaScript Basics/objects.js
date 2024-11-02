var person = {
    firstName : 'Adam',
    secondName : 'Smith',
    age:25,
    ownsCar: false
}
console.log(person)
// dot nptation
console.log(person.age)
// bracket Notation
console.log(person['firstName'])

var cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 102,
    friends : ['Bucky','Iron Man'],
    isAvenger : false,

    address:{
        state : 'New York',
        city : {
            name : 'Uday',
            pincode : 123456
        }
    }
}
cap.isAvenger = true

console.log(cap.friends[1])
console.log(cap.address.city.name)
console.log(cap)
cap.movies = ['avengers','civil war']
console.log(cap)

// we can also add functions inside objects
//delete

delete cap.age
console.log(cap)
