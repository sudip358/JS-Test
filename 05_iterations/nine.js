const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function name(acc, currval) {
    
//     console.log((`acc: ${acc} and currval: ${currval} `));
    
//     return acc + currval
// },0)

//acummulator value suggested in row 8 after comma


// const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)
// console.log(myTotal);


const shoppingcart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
    
//add all to cart

const priceToPay = shoppingcart.reduce( (acc,item) => acc + item.price,0)

console.log(priceToPay);