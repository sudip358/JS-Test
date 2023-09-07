const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('async task is complete');
        resolve();
        //resolved is imp to cosume promise /resolve matlab 1 sec band then function ka time aa gaya chalene
        // resolve chalega to then chalega / resolve is trigger for then
    }, 1000);
})

promiseOne.then(function(){
    console.log('promise consumed');
})

// promise 2 example
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2 is complete');
        resolve();        
    }, 1000);
}).then(function(){
    console.log('async 2 resolved');
})
// promise 3 how to pass data to then using resolve
const promiseThree = new Promise(function(resolve, reject){
     setTimeout(function(){
         console.log('async task 3 is complete');
         resolve({username: "chai", email: "chai@gmail.com"})
     }, 1000);   
})

promiseThree.then(function(user){
    console.log(user);
})


// promise 4

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "chai", pass: "123"})
        } else {
            reject('something went wrong')
        }
        
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("finally"))



// promise 5 aisa nhi ki hamesh .then.catch se hi handle hoga 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", pass: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
        
    }, 1000);
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }     
}

consumePromiseFive();


// promise 6

// async function getallUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("error");
//     }
// }
//getallUsers();


//alternate method

fetch("https://api.github.com/users/hiteshchoudhary")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))