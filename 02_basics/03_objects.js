const mySym = Symbol("key1")

const JsUser = {
    "name": "Sudip",
    "full name": "sudi tem",
    mySym: "mykey1",
 // symbol is always defined in square bracket / mySym ko square bracket me dalo   
    age: "19"
}

// console.log(JsUser.name)
// always access properties by dot but there are cases where you wil  need to follow following pattern

// console.log(JsUser["full name"])


// symbol is always defined in square bracket

// overwrite values
//freeze to value
JsUser.email = "sudip@b.com"
//Object.freeze(JsUser)
//freeze to value

JsUser.email = "sudip@acom"
// console.log(JsUser);


//function ko treat as variable

JsUser.greeting = function(){
    console.log("hello");
}

JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






