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
    console.log("hellooooo every body")
}
greet();


const hello=()=>{
    console.log("azizam salaaam")
}
hello();


const hello2 = (a,b) => a+b;
console.log(hello(2,3))



