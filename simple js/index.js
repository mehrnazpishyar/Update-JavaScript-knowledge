// console.log("hellooooo");

const person = {
    name: "mehrnaz",
    age: 33,
    color: "green"
}

// console.log(person);

const value = `hello ${person["age"]}`

// console.log(value);

const isEven = 10%2 === 0 ? true : false

// console.log(isEven);

// console.log(Boolean(-1));

let value2 = [1,2,3,4];

// for (i=1 ; i< value2.length ; i++){
// console.log(i)
// }

let arrayNew = ["salam", 15, "mehrnaz", 33]

// for(let x of arrayNew ){
//     console.log(x)
// }

function greet() {
    // console.log("hellooooo every body")
}
greet();


const hello=()=>{
    // console.log("azizam salaaam")
}
hello();


const hello2 = (a,b) => a+b;
// console.log(hello(2,3))

//---------------------------------------------------

// document.getElementById("btn").onclick = function(){
//     document.getElementById("write").innerHTML=document.getElementById("text").value
// }

//----------------------------------------------
const btnn= document.getElementById("btnn").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox")
    
    if (myCheckBox.checked) {
        console.log("you are submited!")
    }
    else {
        console.log("you are Not submited!")  
    }
}

//*********************************************
//nested functions

startProgram();

function startProgram() {
    let userName = "mehrnaz";
    let age = 33
    happyBirthday(userName, age)
}


function happyBirthday(userName, age) {
    // console.log("happy birthday", userName)
    // console.log("you are", age)  
}

//***************************************

//inheritance

class Animal {
    alive = true;
    eat(){
        console.log(`this ${this.name} is eating`)
    }

    sleep(){
        console.log(`this ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`this ${this.name} is running`)
    }

}


class Fish extends Animal {
    name = "fish";

    swim(){
        console.log(`this ${this.name} is swimming`)
    }

}

class Hawk extends Animal {
    name = "hawk";

    fly(){
        console.log(`this ${this.name} is flying`)
    }

}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// console.log(rabbit.alive)

//*************************************************

//how to pass calss to function as arguments

class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car ("mustang" , 2023 , "red");
const car2 = new Car ("ferari" , 2020 , "blue");
const car3 = new Car ("lambo" , 2021 , "yellow");

changeColor(car3, "gold")
displayInfo(car3);

function displayInfo (car){
    // console.log(car.year)
    // console.log(car.color)
    // console.log(car.model)
}


function changeColor (car, color){
car.color = color
}

//result = 
//2021
//gold
//lambo

//***********************************************

//error = object with a description of something went wrong

//throw = executes a user-defined error

try{
// let x = window.prompt("Enter a #")
x= Number(x);
if (isNaN(x)) throw "That wasn't a number!"
if (x == "") throw "That was empty!"

// console.log(`${x} is a number`)
}
catch(error) {
// console.log(error)
}

// Result
// if x = 5  => 5 is a number
// if x = "m" => That wasn't a number!

//***********************************************

// promise = object that encapsulates the result of an asynchronous operation
//           let asynchronous methods return values like synchronous methods
//           "I promise to return something in the future"
//           the STATE is 'pending' then: 'fulfilled' or 'rejected'


const promise = new Promise((resolve, reject) =>{

    let fileLoaded = true;

    if (fileLoaded){
        resolve("File loaded")
    }else{
        reject("File NOT loaded")
    }
});

// promise.then(value => console.log(value))
//        .catch(error => console.log(error))

// Result
// if fileLoaded = true  =>  "File loaded"
// if fileLoaded = false =>  "File NOT loaded"



const wait = time => new Promise(resolve => {
    setTimeout(resolve , time)
})

// wait(3000).then(() => console.log("Thanks for waiting"))


//***********************************************

// async = makes a function return a Promise
// await = makes an async function wait for a Promise

async function loadFile() {

    let fileLoaded = true;

    if (fileLoaded){
        return "File loaded"
    } else {
        throw "File NOT loaded"
    }
}

async function startFile(){
    try{
        let message = await loadFile();
        console.log(message)
    }
    catch(error){
        console.log(error)
    }
}

startFile();

// Result
// if fileLoaded = true  =>  "File loaded"
// if fileLoaded = false =>  "File NOT loaded"





