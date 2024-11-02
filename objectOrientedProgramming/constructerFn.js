// let car1 = {
//     name : 'X4',
//     company : 'BMW',
//     color : 'Red'
// }

// let car2 = {
//     name : 'S-class',
//     company : 'BddMW',
//     color : 'ddRed'
// }

function createCar(_name,_company,_color){
    this.name = _name
    this.company = _company
    this.color = _color

    this.drive = function(){
        console.log(`I am Driving this ${this.name}`)
    }

}

let car1 = new createCar('X4','BMW','Red')
let car2 = new createCar('XT4','BMTTW','NGGd')
console.log(car1)
console.log(car2)
car1.drive()