// console.log("hellooooo");

const person = {
  name: "mehrnaz",
  age: 33,
  color: "green",
};

// console.log(person);

const value = `hello ${person["age"]}`;

// console.log(value);

const isEven = 10 % 2 === 0 ? true : false;

// console.log(isEven);

// console.log(Boolean(-1));

let value2 = [1, 2, 3, 4];

// for (i=1 ; i< value2.length ; i++){
// console.log(i)
// }

let arrayNew = ["salam", 15, "mehrnaz", 33];

// for(let x of arrayNew ){
//     console.log(x)
// }

function greet() {
  // console.log("hellooooo every body")
}
greet();

const hello = () => {
  // console.log("azizam salaaam")
};
hello();

const hello2 = (a, b) => a + b;
// console.log(hello(2,3))

//---------------------------------------------------

// document.getElementById("btn").onclick = function(){
//     document.getElementById("write").innerHTML=document.getElementById("text").value
// }

//----------------------------------------------
//checkbox option

const btnn = (document.getElementById("btnn").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");

  if (myCheckBox.checked) {
    console.log("you are submited!");
  } else {
    console.log("you are Not submited!");
  }
});

//*********************************************
//nested functions

startProgram();

function startProgram() {
  let userName = "mehrnaz";
  let age = 33;
  happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
  // console.log("happy birthday", userName)
  // console.log("you are", age)
}

//***************************************

//inheritance

class Animal {
  alive = true;
  eat() {
    console.log(`this ${this.name} is eating`);
  }

  sleep() {
    console.log(`this ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`this ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`this ${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  name = "hawk";

  fly() {
    console.log(`this ${this.name} is flying`);
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

const car1 = new Car("mustang", 2023, "red");
const car2 = new Car("ferari", 2020, "blue");
const car3 = new Car("lambo", 2021, "yellow");

changeColor(car3, "gold");
displayInfo(car3);

function displayInfo(car) {
  // console.log(car.year)
  // console.log(car.color)
  // console.log(car.model)
}

function changeColor(car, color) {
  car.color = color;
}

//result =
//2021
//gold
//lambo

//***********************************************

//error = object with a description of something went wrong

//throw = executes a user-defined error

try {
  // let x = window.prompt("Enter a #")
  x = Number(x);
  if (isNaN(x)) throw "That wasn't a number!";
  if (x == "") throw "That was empty!";

  // console.log(`${x} is a number`)
} catch (error) {
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

const promise = new Promise((resolve, reject) => {
  let fileLoaded = true;

  if (fileLoaded) {
    resolve("File loaded");
  } else {
    reject("File NOT loaded");
  }
});

// promise.then(value => console.log(value))
//        .catch(error => console.log(error))

// Result
// if fileLoaded = true  =>  "File loaded"
// if fileLoaded = false =>  "File NOT loaded"

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

// wait(3000).then(() => console.log("Thanks for waiting"))

//***********************************************

// async = makes a function return a Promise
// await = makes an async function wait for a Promise

async function loadFile() {
  let fileLoaded = true;

  if (fileLoaded) {
    return "File loaded";
  } else {
    throw "File NOT loaded";
  }
}
// async = makes a function return a Promise
// await = makes an async function wait for a Promise

async function loadFile() {
  let fileLoaded = true;

  if (fileLoaded) {
    return "File loaded";
  } else {
    throw "File NOT loaded";
  }
}

async function startFile() {
  try {
    let message = await loadFile();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

startFile();

// Result
// if fileLoaded = true  =>  "File loaded"
// if fileLoaded = false =>  "File NOT loaded"

async function startFile() {
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

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookiesBtn = document.querySelector("#cookiesBtn");

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});

cookiesBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});

// deleteCookie("firstName");
// deleteCookie("lastName");

// setCookie("firstName", "SpongeBob", 365);
// setCookie("lastName", "SquarePants", 365);

// console.log(getCookie("firstName"))
// console.log(getCookie("lastName"))

// console.log(document.cookie)

function setCookie(name, value, daysTolive) {
  const date = new Date();
  date.setTime(date.getTime() + daysTolive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}= ${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;
  // console.log(cArray)

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.lenght + 1);
    }
  });
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

console.log(fish);

console.log(fish[0]);

const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

const listA = [1, 2, 3, "a"];
console.log(fish.length);

//////////////////////////////////

const bb = new Boolean(false);
console.log(bb);

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

//closure

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

//nested function

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

const { one, two, three } = foo;
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

//map method

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

//create object with Set()

const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

console.log(mySet); // Set {1, "some text" , "foo"}

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

console.log(typeof Car); // function

const myCar = new Car("Eagle", "Talon TSi", 1993);
console.log(typeof myCar); // object

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

//apply method
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

//////////////////////////////////////////

// entries method

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'

///////////////////////////////

// every method

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

////////////////////////////////

//nested function
// let a = 10

// function outer(){
//     let b = 20

//     function inner(){
//         let c = 30
//         console.log(a , b , c)
//     }

//     inner()
// }

// outer()

// ****************************************
//closure

// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer()
// outer()

//result
// 1
// 1

// if we want counter add one should write this :

// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()

//result
// 1
// 2

//****************************************
//curing function

function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(6))

//****************************************
// Async & Await

// async function func() {
//     console.log('async function');
//     return Promise.resolve(1);
// }

// func().then(function(result){
//     console.log(result)
// })

//a promise
// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('promise resolved')}, 4000)
// });

//async function
// async function asyncFunc (){
//     wait until the promise resolves
//     try {
//         let result = await promise;
//         console.log(result);
//         console.log("hello")
//     } catch (error) {
//         console.log(error)
//     }

// }

//calling the async function
// asyncFunc()

//result
// after 4 second show 'promise resolved' in console.log
// then print "hello"

//****************************************
//javascript tricks

const array = [1, 2, 3];

array.length = 0;
// console.log(array)

//Result
//array = []

//****************************************

const numm = "1.01";

const resultt =
  +numm +
  // console.log(typeof resultt)
  // 1.01

  //Or

  "1.01";
//1.01

//****************************************

// optional chaining

// const store = {
//     technology : [{
//         name: "macBook Pro",
//         getPrice:() => ({ main:1000 , discount : 900}),
//     }],
//     foods: [{}]
// }

// if (store.foods.length > 0){
//     if (store.foods[0] !== undefined){
//         if(typeof store.foods[0].getPrice === "function"){
//             store.foods[0].getPrice()
//         }
//     }
// }

// console.log(store)

// store.foods?.[0].getPrice?.()

//****************************************

const store = {
  aval: 1,
  dovom: 2,
};

delete store.aval;
// console.log(store)

const lists = [1, 2];

delete lists[0];
// console.log(lists)

const { aval, ...rest } = store;

// console.log(rest)

//****************************************

const numbersaa = [1, 1, 2, 3, 5, 5, 1];

const uniqueNumbers = [...new Set(numbersaa)];

// console.log(uniqueNumbers)

// [1,2,3,5]

//****************************************

const num = +1;

// console.log(typeof num)

//****************************************

// if we want delete all falsy value like undefined or null

const values = ["ali", "", 7, false, undefined, null];

const pureDate = values.filter(Boolean);
// console.log(pureDate)

// ['ali', 7]

//****************************************

//switch case == object

// const dayNumber = new Date().getDay();

// let day;

// switch (dayNumber){
//     case 0:
//         day = "sunday";
//         break;
//         case 1 :
//             day = "monday";
//             break;
//         case 2 :
//             day = "tuesday";
//             break;
//         case 3 :
//             day = "wednsday";
//             break;
//         case 4 :
//             day = "thursday";
//             break;
//         case 5 :
//             day = "friday";
//             break;
//         case 6 :
//             day = "saturday";
//             break;
// }

// console.log(dayNumber)

//ORRRR

const dayNumber = new Date().getDay();

const days = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednsday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

const day = days[dayNumber];

// console.log(dayNumber)

// 6

// ***************************************

const isVowel = (letter) => {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    return true;
  }
  return false;
};

// console.log(isVowel("a"))

// ORRRR

const isVowell = (letter) => ["a", "e", "i", "o", "u"].includes(letter);

//***************************************

const aFunction = (value) => {
  if (value !== null && value !== undefined && value !== 0 && value !== NaN) {
    //do something
  }
};

// ORRRR

const aFunctionn = (value) => {
  if (!!value) {
    //do something
  }
};

//***************************************

const number = [1, 2, 3, 4];
const squared = number.map((number) => number * 2);

// console.log(squared)

// [2, 4, 6, 8]

//***************************************

//reduce

const numberss = [1, 2, 3, 4, 5];
const total = numberss.reduce((total, num) => total + num, 0);
// console.log(total)

//andddd

const adadha = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];
const flattendArray = adadha.reduce(
  (accumulator, item) => [...accumulator, ...item],
  []
);

// console.log(flattendArray)

//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//***************************************

const add = (x) => x + x;

function addition(num = 2, val = add(num)) {
  // console.log(num , val)
}

addition(3);

// 3 6

// *****************************************

let x = 1;

// console.log(typeof typeof x)

//string

//*****************************************

const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
map.set("d", 7);
map.set("e", 9);

// console.log(map.get("c"));
// console.log(map.size);

// 3 5

//*****************************************
//clouser

// function sum(x) {
//     return function(y){
//         return x + y
//     };
// }

// let add5 = sum(5)
// // console.log(add5)
// let resultt = add5(10)
// // console.log(resultt)

// // 15

//*****************************************

function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    //   console.log(num);
  }
  num++;
  return checkNumber;
}

var numberr = numberGenerator();
numberr();

// 2

//*****************************************

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    //   console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// mozila

//*****************************************

if (Math.random() > 0.5) {
  var xx = 1;
} else {
  var xx = 2;
}
//   console.log(xx);

// 2

//*****************************************

if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
//   console.log(x);

// ReferenceError: x is not defined

//*****************************************

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    //   console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// mozila

//*****************************************

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// console.log();

//   console.log(add5(2));
//   console.log(add10(2));

// 7 12

//*****************************************

//nested fanction

// function outer() {
//   let outside = "Outside";
//   function inner() {
//     let inside = "Inside";
//     console.log(inside);
//     console.log(outside);
//   }
//   console.log(outside);
//   inner();
// }
// outer();

// Outside
// Inside
// Outside

// function outer() {
//   let outside = "Outside";
//   function inner() {
//     let inside = "Inside";
//     console.log(inside);
//     console.log(outside);
//   }
//   return inner;
// }
// let myFuncc = outer();
// myFuncc();

// Inside
// Outside

function check() {
  let scope = "local";

  return scope;
}
// console.log(scope)

const addd = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

addd();
addd();
addd();
addd();
addd();
addd();
addd();
// console.log(addd());

// 8

//*****************************************

var aaa = true + true + true * 3;
// console.log(aaa)

//*****************************************

const calc = {
  total: 0,
  add: function (num) {
    this.total += num;
    return this;
  },
  sub: function (num) {
    this.total -= num;
    return this;
  },
  mul: function (num) {
    this.total *= num;
    return this;
  },
};

// console.log(calc.add(10).sub(5).mul(10).total)

//50

//*****************************************

// const str = "jayesh";

// function foo(str){
//   if(str.length<2){
//     return str;
//   }
//   return foo(str.slice(1))+str[0]
// }

// const resulttt = foo(str);
// console.log(resulttt)

//hseyaj

//*****************************************

const arr1 = [1, 2, 3];
const arr2 = arr1.reverse();
arr2.push(4);

// console.log(arr1)
// console.log(arr2)

// [3, 2, 1, 4]
// [3, 2, 1, 4]

//*****************************************

const aa = null;
// console.log(typeof(aa))

//*****************************************

const bbb = Boolean(null);

// console.log(bbb)

//false

//*****************************************

// const str = "hello";
// let resultChar = ""
// let maxCount = 1
// const obj = {}
// console.log(obj)

// for (let char of str){
//   console.log(char)
//   console.log(obj[char])
// if (obj[char]) {
// console.log(char)
// obj[char] += 1
// if(obj[char] > maxCount){
//   maxCount = obj[char]
//   resultChar =char
// }
// } else {
// obj[char] = 1
// }
// }

// console.log(resultChar)

//*****************************************

function Person(name) {
  this.name;
}
Person.prototype.country = "iran";

function Child(name) {
  Person.call(this, name);
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;

const baby = new Child("Baby");

// console.log(baby.name)
// console.log(baby.country)

//*****************************************

// let arr = ["JC" , {name: "VK"}, "JC" , {name:"VK"}];

// const res = arr.filter((item, index, array) =>{
//   if (array.indexOf(item) === index) {
//     return true
//   } else {
//     return false
//   }
// })

// console.log(res)

//['JC', {name: 'VK'}, {name: 'VK'}]

//*****************************************
const nums = [1, 2, 3, 2, 4, 3];
const res = nums.filter((num, i, arr) => {
  //  console.log(
  //   // a. Item
  //   // num,
  //   // b. Index
  //   i,
  //   // arr,
  //   // c. indexOf
  //   arr.indexOf(num),
  //   // d. Condition
  //   arr.indexOf(num) === i,
  //  );

  return arr.indexOf(num) === i; //duplicates are where the index doesn’t match the indexOf
});

//  console.log(res)

//[1, 2, 3, 4]

//*****************************************

// const age = 24;
// const key = "age"

const persoon = {
  name: "mehrnaz",
  age: 33,
};

const { property } = persoon;
// console.log(persoon.name)
// console.log(persoon.age)

// for (const key in persoon ){
//   console.log(persoon[key])
// }

// console.log(Object.keys(persoon))
// console.log(Object.values(persoon))

const arrr = ["hello", "age", 33];

// arrr.map((item)=>console.log(item))
//*****************************************

const objecttt = {
  name: "mehrnaz",
  age: 32,
  job: "programer",
};

const { name, age, job } = objecttt;

// console.log(name)
// mehrnaz

//*****************************************

const success = "{email} logged-in";

const user = "jc@gmail.com";

let display = success.replace("{email}", user);

//  console.log(display)

// jc@gmail.com logged-in

//*****************************************

// filter method

function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

// -----------------------------------

const fruits = ["apple", "banana", "grapes", "mango", "orange"];


 // filter array items based on search criteria (query)

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

//*****************************************

const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); //'one' will delete from array
  }
}); // one // two // four

// console.log(words); // ['two', 'three', 'four']

//*****************************************

const aaa = ["Wind", "Water", "Fire"];
aaa.join(); // 'Wind,Water,Fire'
aaa.join(", "); // 'Wind, Water, Fire'
aaa.join(" + "); // 'Wind + Water + Fire'
aaa.join(""); // 'WindWaterFire'
 

////////////////////////////////////////////

const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
  const myCarr = [myHonda, 2, "cherry condition", "purchased 1997"];
  console.log(myCarr)
  const newCar = myCarr.slice(0, 2);

  console.log(newCar)

  console.log("myCar[0].color =", myCarr[0].color);

  ////////////////////////////////////////////

  // Multiple condition checkin

  if (
    value === 1 ||
    value === "one" ||
    value === 2 ||
    value === "two"
  ) {
    // Execute some code
  }

  // Shorthand 

  if([1 ,'one' , 2 , 'two'].includes(value)){
     // Execute some code
  }

////////////////////////////////////////////////

// join & sort method

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

////////////////////////////////////////////

// Splice method

//Remove 0 (zero) elements before index 2, and insert "drum"
splice(2, 0, "drum");

//Remove 1 element at index 3
splice(3, 1)

//Remove 1 element at index 2, and insert "trumpet"
splice(2, 1, "trumpet")

//Remove 2 elements, starting from index 2
splice(2, 2)

//Remove 1 element from index -2
splice(-2, 1)

//Remove all elements, starting from index 2
splice(2)

///////////////////////////////////////////////////
// Creating an async function from an AsyncFunction() constructor

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // prints 30 after 4 seconds
});
////////////////////////////////////////////////

//isNaN

isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// Strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true: Number("123ABC") is NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

// Dates
isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
isNaN(new Date().toString()); // true; the string representation of a Date object cannot be parsed as a number


//////////////////////////////////////////////

Math.E
// Euler's number and the base of natural logarithms; approximately 2.718.

Math.LN2
// Natural logarithm of 2; approximately 0.693.

Math.LN10
// Natural logarithm of 10; approximately 2.303.

Math.LOG2E
// Base-2 logarithm of E; approximately 1.443.

Math.LOG10E
// Base-10 logarithm of E; approximately 0.434.

Math.PI
// Ratio of a circle's circumference to its diameter; approximately 3.14159.

Math.SQRT1_2
// Square root of ½; approximately 0.707.

Math.SQRT2
// Square root of 2; approximately 1.414.

// Static methods
Math.abs()
// Returns the absolute value of x.

Math.acos()
// Returns the arccosine of x.

Math.acosh()
// Returns the hyperbolic arccosine of x.

Math.asin()
// Returns the arcsine of x.

Math.asinh()
// Returns the hyperbolic arcsine of a number.

Math.atan()
// Returns the arctangent of x.

Math.atanh()
// Returns the hyperbolic arctangent of x.

Math.atan2()
// Returns the arctangent of the quotient of its arguments.

Math.cbrt()
// Returns the cube root of x.

Math.ceil()
// Returns the smallest integer greater than or equal to x.

Math.clz32()
// Returns the number of leading zero bits of the 32-bit integer x.

Math.cos()
// Returns the cosine of x.

Math.cosh()
// Returns the hyperbolic cosine of x.

Math.exp()
// Returns ex, where x is the argument, and e is Euler's number (2.718…, the base of the natural logarithm).

Math.expm1()
// Returns subtracting 1 from exp(x).

Math.floor()
// Returns the largest integer less than or equal to x.

Math.fround()
// Returns the nearest single precision float representation of x.

Math.hypot()
// Returns the square root of the sum of squares of its arguments.

Math.imul()
// Returns the result of the 32-bit integer multiplication of x and y.

Math.log()
// Returns the natural logarithm (㏒e; also, ㏑) of x.

Math.log1p()
// Returns the natural logarithm (㏒e; also ㏑) of 1 + x for the number x.

Math.log10()
// Returns the base-10 logarithm of x.

Math.log2()
// Returns the base-2 logarithm of x.

Math.max()
// Returns the largest of zero or more numbers.

Math.min()
// Returns the smallest of zero or more numbers.

Math.pow()
// Returns base x to the exponent power y (that is, xy).

Math.random()
// Returns a pseudo-random number between 0 and 1.

Math.round()
// Returns the value of the number x rounded to the nearest integer.

Math.sign()
// Returns the sign of the x, indicating whether x is positive, negative, or zero.

Math.sin()
// Returns the sine of x.

Math.sinh()
// Returns the hyperbolic sine of x.

Math.sqrt()
// Returns the positive square root of x.

Math.tan()
// Returns the tangent of x.

Math.tanh()
// Returns the hyperbolic tangent of x.

Math.trunc()
// Returns the integer portion of x, removing any fractional digits.

////////////////////////////////////////////

// copy all of object in other object with ...spread operator not just poiner of object

// const personn = {
//     name :"max" 
  
//   }
  
// const secondPerson = personn

// personn.name = "mehrnaz"

//  console.log(secondPerson)


const personn = {
  name :"max"  
}

const secondPerson = {
 ...personn
}

personn.name = "mehrnaz" // { name : "max"}

console.log(secondPerson)

//////////////////////////////////////////////////

let xx = [3,3]
let yy= xx[0] + xx[1]
//6

/////////////////////////////////////////////

var str = true

console.log(str + 0);
console.log(str + "xyz");
console.log(str + true)
console.log(str + false)

// 1 truexyz 2 1


///////////////////////////////////////////////////

var output = (function(x){
  delete x;
  return x ;
}) (0);

// 0

////////////////////////////////////////////////

const array1= [1,2,3,4,5];
const array2 = [1,2,3,8,9]

const ress = array1.filter((num) => {
  return array2.includes(num);
})

console.log(ress)

// 1,2,3

///////////////////////////////////////////////

const numberr = "9816231529845612";

const last = numberr.slice(-4);
const resulttt=last.padStart(number.length, "*");

console.log(resulttt)

// *************5612

//////////////////////////////////////////////

const numbersss = [1,2,3,4,5,6];
const [y] = numbersss;

console.log(y) 
// 1

////////////////////////////////////////////////


let players = [
  {name:"vk" , role:"batsman"},
  {name:"hp" , role:"all-rounder"},
  {name:"rj" , role:"all-rounder"},
]

let resultttt = players.some((player) => {
  return player.role === "batsman"
})

console.log(resultttt) // true

////////////////////////////////////////////////

function getNumber(){
  return 2,4,5
}

var numberr = getNumber();

console.log(numberr) // 5

////////////////////////////////////////////////

// Some example Splice method

splice(2, 0, "drum");

splice(3, 1)

splice(2, 1, "trumpet")

splice(2, 2)

splice(-2, 1)

splice(2)

////////////////////////////////////////////////

//example of entries method

const objj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(objj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2

////////////////////////////////////////////////

function mul(x){
  return function (y){
    return [
      x*y,
      function (z){
        return x*y + z
      }
    ]
  }
}

console.log(mul(2)(3)(0))  //6
console.log(mul (2)(3)[1](4)) //10

////////////////////////////////////////////////

let arr =["eat", "tea", "dna", "and"]
let objjj = {}

for (let word of arr) {
    let key = word.split("").sort().join("")
    if(objjj[key]){
        objjj[key]=[...objjj[key], word]
    }else {
        objjj[key]=[word]
    }
}

console.log(Object.values(objjj)) // [["eat", "tea"], ["dna", "and"]]

////////////////////////////////////////////////
const stringg = "mehrnaz pishyar"
const arrayy = stringg.split("")

const resss=arrayy.map((word)=> {
    return word[0].toUpperCase() + word.slice(1)
})

const output = resss.join("")

console.log(output)

////////////////////////////////////////////////

const hof = (callBack1, callBack2) => {
  callBack1()
  setTimeout(callBack2, 1000)
  console.log("three")
}

const callBack1= () => {
  console.log("one")
}

const callBack2 = () => {
  console.log("two")
}

hof(callBack1, callBack2)

// one three two

////////////////////////////////////////////////

const numss = new Set();
numss.add(1);
numss.add(2);
numss.add(3);
numss.add(1);

numss.delete(1)

console.log(numss.has(1))
console.log(numss.size)

// false 2

////////////////////////////////////////////////

const aarayy= [1,2,3,4,5]

const aaa = aarayy.at(1)
const b = aarayy.at(-1)

console.log(aaa) // 2
console.log(b) // 5

////////////////////////////////////////////////

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1')); //true

console.log(object1.hasOwnProperty('toString')); //false

console.log(object1.hasOwnProperty('hasOwnProperty')); //false

//////////////////////////////////////////////////

Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true