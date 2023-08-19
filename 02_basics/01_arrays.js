// array 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [0, 1, 2, 3, 4]


//const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr2["1"]);


// shallow copy - share same reference point - jo b change karunga original copy me change hoga
// deep copy -    do not share same reference point

//myArr.push(6)
//myArr.push(7)
//myArr.pop()


//myArr.unshift(10)

//console.log(myArr.includes(10));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)
console.log("C", myArr);

console.log(myn2);