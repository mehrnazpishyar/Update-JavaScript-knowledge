

const person = {
    name:'mehrnaz',
    walk() {
        console.log("hello")
    },
}

person.walk()



person["name"] = 'esmaeil'

// console.log(person)


//here walk is function : because my function stored in a variable
const walk = person.walk;
console.log(walk)



