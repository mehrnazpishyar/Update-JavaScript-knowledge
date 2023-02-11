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

function sum(a,b,c) {
    return a+b+c
}

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum = curry(sum)
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

const array = [1,2,3]

array.length = 0
// console.log(array)

//Result
//array = []

//****************************************

const numm = "1.01"

const result = +numm

// console.log(typeof result)
// 1.01

//Or

+"1.01" 
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
    "aval" : 1,
    "dovom" : 2
}

delete store.aval
// console.log(store)

const lists = [1,2]

delete lists[0]
// console.log(lists)

const {aval , ...rest} = store;

// console.log(rest)


//****************************************

const numbers = [1,1,2,3,5,5,1]

const uniqueNumbers = [...new Set(numbers)]

// console.log(uniqueNumbers)

// [1,2,3,5]

//****************************************

const num = +1

// console.log(typeof num)

