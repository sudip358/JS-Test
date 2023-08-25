// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){}
    //console.log(element);
}






for (let i = 1; i < 10; i++) {
//    console.log(`outer loop: ${i}`);
    
    for (let j = 1; j < 10; j++) {
 //   console.log(`inner loop: ${j} inner loop ${i}`);
  //  console.log(i + '*' + j + ' = ' + i*j );
    }

    
}




// let myArray = ["flash", "bat", "sup"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }



// break continue

for (let index = 1; index <= 20; index++){
     if (index == 5){
        console.log(`detected 5`);
        continue
     } 


    console.log(`value of i is ${index}`);;
   
}
