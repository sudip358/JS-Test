//const coding = ["js", "rb", "py"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item

// })

// console.log(values);

// for each value retun jnhi karta hai
// aisa jaruraui nhi ki array se jo value li hai wo print hi krana hai


//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter(  (num) => {
//     return num > 4                              
// })

// dont forget the return/ return nhi likhenge to empt array jayega
// { } upar arrow function k bad curly bracket start ho gaya
// matlab scope start ho gaya isliye return likhna compulsory hai


// console.log(newNums);

//filter k andar callback function - each access karenge givene conditon of fitler num > 4


// const newNums = []

// myNums.forEach( (num) => {
//     if (num) {
//         newNums.push(num)
        
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter(  (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

// scope open kiya to return use kare

console.log(userBooks);