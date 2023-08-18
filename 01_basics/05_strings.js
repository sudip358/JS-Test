const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`my name is ${name} n repocount is ${repoCount}`);

const gameName = new String ('hitesh-hc-ac')

console.log(gameName[0]);
console.log(gameName.__proto__);


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);

console.log(newStringOne.trim());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


const url = "https://abc.com/hit%20c"
console.log(url.replace('%20','_' ))

console.log(url.includes('hit'))


console.log(gameName.split('-',2));

//learn string here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

