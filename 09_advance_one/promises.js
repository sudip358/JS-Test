const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log('promise consumed');
});


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2 is complete');
        resolve();
    }, 1000)
}).then(function(){
    console.log('async task 2 consumed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 3 is complete');
        resolve({username: "chai", email: "chai@gmail.com"});
    }, 1000)
})

promiseThree.then(function(){
    
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "chai", email: "chai@gmail.com"});
        } else {
            reject("something went wrong");
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
})

console.log(username);