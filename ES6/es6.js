

const person = {
    name:'mehrnaz',
    walk() {
        console.log("hello")
    },
}

person.walk()


person["name"] = 'esmaeil'

//***************************************************


//here walk is function : because my function stored in a variable
const walk = person.walk;
console.log(walk)


//***************************************************

//filter method

const jobs = [
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false},
]

const activeJobs = jobs.filter(job => job.isActive)

// console.log(activeJobs)

//***************************************************

//map method

const colors = ['red' , 'green' , 'blue'];

// const items = colors.map(color => '<li>' + color + '</li>'
// )

//or 

const items = colors.map(color =>` <li> + ${color} + </li>`
)

//***************************************************

//Object distructing

 const address = {
    street:"",
    city:"",
    country: ""
 }

//  const street = address.street;
//  const city = address.city;
//  const country = address.country;

 //insteed of these phrases you can use Object distructing

 const {street, city, country} = address

const {street:st} = address

// console.log(address)

//***************************************************

