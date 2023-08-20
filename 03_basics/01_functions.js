function sayMyname(){
    console.log("S");
    console.log("U"); 
}

//sayMyname()


// function addTwoNumber(num1, num2){
//    console.log(num1 + num2);
// }

// const result = addTwoNumber(3, 5)

// console.log(result);



function addTwoNumber(num1, num2){
 //   let result = num1 + num2
//    return result

      return num1 + num2 
 }
 
 const result = addTwoNumber(3, 5)
 
 //console.log(result);




//  function loginUserMessage(username){
//     if(username === undefined){
//         console.log("enter username");
//     }
//     return`${username} just logged in`
//  }

//  //function loginUserMessage(username: any): String
// //console.log(loginUserMessage("hi"))

// console.log(loginUserMessage())




// exclamatory sign before username ! true ko false me convert karta hai false ko true me

function loginUserMessage(username){
    if(!username){
        console.log("enter username");
        return
    }
    return`${username} just logged in`
 }

 //function loginUserMessage(username: any): String
//console.log(loginUserMessage("hi"))

console.log(loginUserMessage())





