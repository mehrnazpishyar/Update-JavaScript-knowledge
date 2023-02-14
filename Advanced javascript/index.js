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

const result =
  +numm +
  // console.log(typeof result)
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

const numbers = [1, 1, 2, 3, 5, 5, 1];

const uniqueNumbers = [...new Set(numbers)];

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

var a = true + true + true * 3;
// console.log(a)

//*****************************************

const calc = {
  total: 0,
  add: function (num){
    this.total += num;
    return this
  },
  sub: function (num){
    this.total -= num;
    return this
  },
  mul: function (num){
    this.total *= num;
    return this
  },

}

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


const arr1 = [1,2,3]
const arr2 = arr1.reverse()
arr2.push(4)

// console.log(arr1)
// console.log(arr2)

// [3, 2, 1, 4]
// [3, 2, 1, 4]


//*****************************************

const aa = null
// console.log(typeof(aa))

//*****************************************

const bb = Boolean(null)

// console.log(bb)

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

function Person (name) {
  this.name;
}
Person.prototype.country ="iran"

function Child(name){
  Person.call(this, name)
}

Child.prototype = Object.create(Person.prototype)
Child.prototype.constructor = Child

const baby = new Child("Baby")

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

const persoon ={
  name:"mehrnaz",
  age :33
}

const { property } = persoon
// console.log(persoon.name)
// console.log(persoon.age)

// for (const key in persoon ){
//   console.log(persoon[key])
// }

// console.log(Object.keys(persoon))
// console.log(Object.values(persoon))

const arrr = ["hello", "age" , 33]

// arrr.map((item)=>console.log(item))
//*****************************************

const objecttt = {
  name: "mehrnaz",
  age : 32,
  job: "programer"
}

const {name , age , job} = objecttt

console.log(name)
 // mehrnaz 

 //*****************************************
 