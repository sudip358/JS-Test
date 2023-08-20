
// singleton object
//const tinderUser = new Object()  

// non single ton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedin = false


//console.log(tinderUser);


//objects inside obhect
const regularUser = {
    email: "agmail.com",
    fullname: {
        firstname: "hi",
        lastname:"bye"
    }
}

//console.log((regularUser.fullname.firstname));

//future reference optional chaining


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}

//const returnedTarget = Object.assign(target, source);

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// 90% of time we willuse this syntax

console.log(obj3);


const users = [
    {
        id: 1,
        email: "hdfgf@gmail.com"
    },
    {
        id: 2,
        email: "fcs@gmail.com"
    }    

]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));


console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProp(tinderUser));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign



