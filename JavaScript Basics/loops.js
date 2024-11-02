//for loop
var a ="Hello"
for(var i=0;i<10;i++){
    console.log(a)
}
var arr = []
var num = [1,2,3]
for(var i=0;i<num.length;i++){
    arr.push(num[i]*num[i])
}
console.log(arr)

//while loop
var t = 8;
while(t <=10){
    console.log(t)
    t++;
}
//do while loop
var p = 11
var n = 10
do{
    console.log(p)
    p++
}while(p<=n)

//for in loop

var colors = {
    primary : 'Blue',
    secondary : 'Red',
    third : 'Green'
}

for(var color in colors){
    console.log(color + '-> ' +colors[color])
}

var numbers = [1,2,3,5,5,67,6]
for(var i in numbers){
    console.log(i + ' -> ' + numbers[i])
}

//for off loop

var scores = [50,67,23,56]

for(var score of scores){
    console.log(score)
}
for(var [index,number] of numbers.entries()){
    console.log(index + '-> '+number)
}

var str = 'udaykumar'
for(var c of str){
    console.log(c)
}
