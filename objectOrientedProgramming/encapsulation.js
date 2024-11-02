function person(_name,_age){
    var name = _name
    this.age = _age

    this.getName = function(){
        return name
    }
}

let p1 = new person('Adam',25)
p1.name = 'Steve'
console.log(p1.getName())