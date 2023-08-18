// primitite -call by value  -  7 types
//string number boolean null undefined symol bigint 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// symbol usage

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);
const bigNumber = 211151n




// master objects and webevents

//non primitive - call by reference

// array objects functions 

const heros = ["shak", "nagraj", "doga"]
let myObj = { 
    name: "hit",
    age: 22,

}

const myFunction = function() {
//console.log("hello");    
}

//console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// stack - all primitive
// heap - non primitive



let myName = "hi"
let anothername = myName
anothername = "chai"

console.log(myName);
console.log(anothername);

let user = {
    email: "afgfh@gmail.com",
    upi: "user@upi"       
}

let usertwo = user

usertwo.email = "b@gmail.com"

console.log(user.email);

console.log(usertwo.email);

