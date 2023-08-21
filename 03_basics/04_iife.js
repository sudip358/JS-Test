//global scope se poluution nhi chahiye usne bachne k liye iife use karte hai

//named iife
(function chai(){
    console.log(`db connected`);
})();

// to end unction we need semi column in iife like given above




//unnamed iife
// arrow function created problem? 

(  (name) => {
    console.log(`db connected 2 ${name}`);

})('hi')


