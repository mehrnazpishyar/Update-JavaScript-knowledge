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

async function startFile(){
    // try{
    //     let message = await loadFile();
    //     console.log(message)
    // }
    // catch(error){
    //     console.log(error)
    // }
}

startFile();

// Result
// if fileLoaded = true  =>  "File loaded"
// if fileLoaded = false =>  "File NOT loaded"


//***********************************************

// cookie

// document.cookie = "firstName =SpongeBob; expires= Sun, 1 January 2030 12:00:00 UTC; path=/" ;
// document.cookie = "lastName = SquarePabts; expires= Sun, 1 January 2000 12:00:00 UTC; path=/" ;
// console.log(document.cookie)

// setCookie("email", "Sponge@gmail.com",365)
// deleteCookie("firstName");
// deleteCookie("lastName");
// deleteCookie("email");

const firstText= document.querySelector("#firstText")
const lastText= document.querySelector("#lastText")
const submitBtn = document.querySelector("#submitBtn")
const cookiesBtn = document.querySelector("#cookiesBtn")

submitBtn.addEventListener("click" , ()=>{
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
})

cookiesBtn.addEventListener("click" , ()=>{
  firstText.value = getCookie("firstName")
  lastText.value = getCookie("lastName")
})

// deleteCookie("firstName");
// deleteCookie("lastName");

// setCookie("firstName", "SpongeBob", 365);
// setCookie("lastName", "SquarePants", 365);

// console.log(getCookie("firstName"))
// console.log(getCookie("lastName"))


// console.log(document.cookie)

function setCookie(name, value, daysTolive){
    const date = new Date();
    date.setTime(date.getTime() + (daysTolive * 24 * 60 *60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}= ${value}; ${expires}; path=/`
}


function deleteCookie(name){
    setCookie(name, null, null)
}

function getCookie(name){
const cDecoded = decodeURIComponent(document.cookie);
const cArray = cDecoded.split("; ")
let result = null;
// console.log(cArray)

cArray.forEach(element => {
    if(element.indexOf(name)==0){
result = element.substring(name.lenght + 1)
    }
})
return result;
}


//***********************************************

x = "The answer is " + 42; // "The answer is 42"

y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
console.log(typeof z);

a = "37" - 7; // 30
b = "37" * 7; // 259

console.log(typeof b);

//////////////////////////////////////

const fishh = ["Lion", "Angel"];

console.log(fish)

console.log(fish[0])

const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

const listA = [1, 2, 3, "a"];
console.log(fish.length);

//////////////////////////////////

const bb = new Boolean(false);
console.log(bb) 
  
//////////////////////////////////

function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
  });

  ///////////////////////////////////////////////

  const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2

///////////////////////////////////////////////////

//Functions

// Constructor
const multiply = new Function("x", "y", "return x * y");

// Declaration
function multiply(x, y) {
  return x * y;
} // No need for semicolon here

// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y;
};
// Expression; the function has its own name
const multiply = function funcName(x, y) {
  return x * y;
};

// Arrow function
const multiply = (x, y) => x * y;

// Method
const obbj = {
  multiply(x, y) {
    return x * y;
  },
};

////////////////////////////////////////////////////

function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  const fnInside = outside(3); // 3
  const result = fnInside(5); // 8
  const result1 = outside(3)(5); // 8

  ///////////////////////////////////////////////////

  function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // Logs 6 (which is 1 + 2 + 3)

  ///////////////////////////////////////////////////

  const foo = ["one", "two", "three"];
  // without destructuring
// const onee = foo[0];
// const twoo = foo[1];
// const threee = foo[2];

// with destructuring


///////////////////////////////////////////////////

//AND operator

const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false


//OR operator

const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat


///////////////////////////////////////////////////

const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

/////////////////////////////////////////

const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

console.log(mySet)  // Set {1, "some text" , "foo"}

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"

//////////////////////////////////////////

// create object with constructor function

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  console.log(typeof Car) // function
  
  const myCar = new Car("Eagle", "Talon TSi", 1993);
  console.log(typeof myCar) // object

  ///////////////////////////////////////////////

  const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
  };
  const Intern = {
    name: "Tyrone",
    age: 21,
    job: "Software Engineer Intern",
  };
  
  function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  // add sayHi function to both objects
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi(); // Hello, my name is Karina
  Intern.sayHi(); // Hello, my name is Tyrone

  ////////////////////////////////////////////////

  // classes

  class Color {
    constructor(r, g, b) {
      this.values = [r, g, b];
    }
    getRed() {
      return this.values[0];
    }
    setRed(value) {
      this.values[0] = value;
    }
  }
  
  const red = new Color(255, 0, 0);
  red.setRed(0);
  console.log(red.getRed()); // 0; of course, it should be called "black" at this stage!

  ////////////////////////////////////////////////

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2