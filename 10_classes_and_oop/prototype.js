// let myNanme = "chai"
// console.log(myNanme.truelength);




let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpirderPower: function(){
   //    console.log (`spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
//    console.log("hitesh is present in all object");
}

Array.prototype.heyHitesh = function(){
//    console.log("hitesh says hello");
}

//heroPower.hitesh()
//myHeros.heyHitesh()
//heroPower.heyHitesh()





const User = {
    name: "chai",
    email: "chai@gmail.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS ASSIGNMWENT',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(this.trim().length);
}

anotherUsername.trueLength()