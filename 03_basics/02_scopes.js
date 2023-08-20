
//var c = 300
let a= 300

if (true){
    let a = 20
    const b = 20
//    console.log("INNER: ", a);
//    var c = 30
}

console.log(a);
//console.log(b);
//console.log(c);

// avoid writing var

//if k andar local scope


// scope within scope

//nested scope

function one(){
    const username = "hit"

    function two(){
        const website = "utube"
        console.log(username);

}

//console.log(website);
two()

}

one()


// video on closure on english channel


if (true){
    const username = "hit"
    if (username === "hit"){
        const website = "utube"
        console.log(username + website);
    }
  //  console.log(website);
}

// console.log(username);



// ++++++++++++++++++++ Intersting ++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = Function(num){
    return num + 2
}



//video no 22




























