// const person = {
//   name: "mehrnaz",
//   walk() {
//     console.log("hello");
//   },
// };

// person.walk();

// person["name"] = "esmaeil";

//***************************************************

//here walk is function : because my function stored in a variable
// const walk = person.walk;
// console.log(walk);

//***************************************************

//filter method

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);

// console.log(activeJobs)

//***************************************************

//map method

const colors = ["red", "green", "blue"];

// const items = colors.map(color => '<li>' + color + '</li>'
// )

//or

const items = colors.map((color) => ` <li> + ${color} + </li>`);

//***************************************************

//Object distructing

const address = {
  street: "",
  city: "",
  country: "",
};

//  const street = address.street;
//  const city = address.city;
//  const country = address.country;

//insteed of these phrases you can use Object distructing

const { street, city, country } = address;

const { street: st } = address;

// console.log(address)

//***************************************************

//spread operators

const first = [1, 2, 3, "b", "c"];
const second = [4, 5, 6];


//combined in array

const combined = [...first, ...second];
//  console.log(combined)

//result [1, 2, 3, 4, 5, 6]

// how to clone (copy) from array

const clone = [...first];
//  console.log(clone)

//combined in object

const one = { name: "mehrnaz" };

const two = { job: "programmer" };

const combineed = { ...one, ...two };
// console.log(combineed)

// how to clone (copy) from object

const clonee = { ...one };
//  console.log(clonee)

//dar array ma nemitanim ba roye kole arraye amal riazi anjam dahim, baraye in kar ma bayad aval an array ro be addad joda be komak spread operator tabdil konim bad az roye an addad max ya min ya harchize dg migirim 

let number = [1,2,3,4,5,6,7,8,9]
let maximum = Math.max(...number)
// console.log(...number)

let class1 = ["man", "to", "oo"]
let class2 = ["ma", "shoma", "anha"]

// class1.push(...class2)
// console.log(class1)

//result = (6) ['man', 'to', 'oo', 'ma', 'shoma', 'anha']

//***************************************************
// rest parameters = represents an indefinite number of parameters
// (pack arguments into an array)


let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum (a,b,c,d))

function sum (...numbers){
  let total = 0;
  for (let number of numbers){
    total += number
  }
  return total
}

//***************************************************
// Classes

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

const personn = new Person("mosh");

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("mehrnaz","msc");

// console.log(teacher)

//***************************************************

