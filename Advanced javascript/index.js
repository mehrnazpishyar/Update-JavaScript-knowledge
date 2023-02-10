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
console.log(curriedSum(2)(3)(6))