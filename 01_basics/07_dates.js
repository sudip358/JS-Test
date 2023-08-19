// dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

// months in javascript starts from 0

let myTimeStamp =Date.now()

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(`${newDate.getDay()} and time`);


newDate.toLocaleString('default, {
   weekday: "long",

    )