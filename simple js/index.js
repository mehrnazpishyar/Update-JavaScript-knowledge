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

console.log(rabbit.alive)