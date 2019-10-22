

/* Lesson One *
// Variables
let myName  = "Mehadi Hasan Shimul"     //String
let myAge   = 25                        //Number
let array   = [12 , 23 , 45 , 90]       //Array
let object  = {name: "Shimul",age: 25}  //Object
let function= (x) => return x * 2       //Function 
let eucated = true                      //Boolian

console.log(`My name is ${myName}. My age is ${myAge}.`)

*/


/* Lesson Two *
// Function (Function works like a verb)
// Function Definition
function doubleMe(x){
    return x * 2
}

// Function Definition
function greet(name , age){
    console.log(`My name is ${name}. My age is ${age}. My double age is ${doubleMe(age)}.`)
}

// Call the function
greet("Hasan" , 25)

*/


/* Lesson Three *
// Object
let man = {
    // Property
    name    : {
        firstName   : "Mehadi Hasan",
        lastName    : "Shimul"
    },
    age     : 25,
    favColor: "Green",
    // Method
    greet(){
        console.log(`I am ${this.name.firstName} ${this.name.lastName}. I am ${this.age} years old. My favorite color is ${this.favColor}.`)
    }
}

// man.greet()
// console.log(man.name.lastName)

// Call a function by an Event
function greet(){
    console.log(`I am ${man.name.firstName} ${man.name.lastName}. I am ${man.age} years old. My favorite color is ${man.favColor}.`)
}
document.addEventListener("click" , greet)

*/


/* Lesson Four *
// Arrays
let name = "Shimul"                     // String
let number = 7.7                        // Number
let marks = [86 , 84 , 80 , 94 , 95]    // Number Array
let colors = ["Green" , "Red" , "Blue"] // String Array
let favs = [{"color":"Green" , "sport":"Cricket"} , {"color":"Red" , "sport":"Football"} , {"color":"Blue" , "sport":"Cricket"}]                    // Object Array


// Method push(), toFixed(), toUpperCase(), splice(index , item) 
console.log(colors)
colors.push("White")
console.log(colors)
colors.splice(1 , 1)
console.log(colors)

console.log(name.toUpperCase())
console.log(number.toFixed())

// Access Array Value
console.log(colors[0])
console.log(favs[2].sport)

*/


/* Lesson Five *
// If statement ( 0 is false & 1 or more is true. == , >= , <= , > , < , !=)
let number = 10

if(number){
    console.log(`Congrates! This is Number ${number}`)
} else {
    console.log("Sorry")
}

// While loop
let myNumber = 1
while(myNumber <= 10){
    document.write(`This Number is ${myNumber}.<br />`)
    myNumber++
}

*/


/* Lesson Six *
// Higher Order Function
// 1. Function accept a function as an argument (addEventListener)
function hello(){
    document.write(`Hello! <br />`)
}
document.addEventListener("click" , hello)

// 2. Function that returns a function
function creatMultiplier(multiplier){
    return function(x){
        return x * multiplier
    }
}

let doubleMe = creatMultiplier(2)
let tripleMe = creatMultiplier(3)

document.write(doubleMe(12))

// Core higher order functions[.forEach() , .map() , .filter()]
let color = ["Green" , "Red" , "Blue"]

function something(color){
    document.write(`${color} is a good color. <br />`)
}
color.forEach(something)

*/


/* Lesson Seven *
// Returning Vs Mutating
let pets = [
    {
        name: "Lion",
        species: "Dog",
        age: 2
    },
    {
        name: "Jony",
        species: "Cat",
        age: 5
    },
    {
        name: "Tiger",
        species: "Dog",
        age: 3
    }
]

function nameOnly(x){
    return x.name
}

function dogOnly(x){
    return x.species == "Dog"     // Returns true or false
}

function onlyBabies(x){
    return x.age < 3              // Returns true or false
}

console.log(pets.filter(dogOnly).filter(onlyBabies).map(nameOnly))

*/


/* Lesson Eight *
// Scope & Context

// 1. Scope (Variables)
// Inner code can go outside for variable
// Outside code can't go inside for variable
// let uses block scope
// var uses function scope

// 2. Context (Object)
// The "this" keyword points towords the object that is "Executing" the current function.
// function has a method ".call(object)"
let shimul = {
    firstName : "Mehadi Hasan",
    lastName  : "Shimul"
}

function name(){
    console.log("My name is " + this.firstName + " " + this.lastName + ".")
}
// Function is accessing object by .call() method
name.call(shimul)

*/


/* Lesson Nine *
// Miscellaneous

// 1. Anonymous function
document.addEventListener("click" , function(){
    console.log("Thanks for the Click.")
})

// 2. Arrow function
let array = [12 , 23 , 34 , 50]

let doubleTheArray = array.map( x => x * 2 )
console.log(doubleTheArray)

// 3. Function Hoisting
// We must call the function variable under the variable

// 4. Template Literals
let myName  = "Mehadi Hasan Shimul"     //String
let myAge   = 25                        //Number

console.log(`My name is ${myName}. My age is ${myAge}.`)

// 5. Semicolons
// Using Semicolons is a good practice but if the code is organised, we do not need to use semicolons after each line.

*/


/* Lesson Ten *
// To Do App
// document.getElementById()
// e.preventDefault()
// x.insertAdjacentHTML("beforeend" , html_code)
// x.value
// x.focus()
// x.parentElement.remove()

let formInput = document.getElementById("formInput")
let textValue = document.getElementById("textValue")
let items = document.getElementById("items")

formInput.addEventListener("submit" , (e) => {
    e.preventDefault()    
    creatItem(textValue.value)
})

function creatItem(x){
    let item = `<li>${x} <button onclick="deleteItem(this)">Delete</button> </li>`
    items.insertAdjacentHTML("beforeend" , item)
    textValue.value = ""
    textValue.focus()
}
function deleteItem(x){
    x.parentElement.remove()
}

*/