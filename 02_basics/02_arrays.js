const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["suprman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


const all_Heros = marvel_heros.concat(dc_heros)
 console.log(all_Heros);


 // alternate to above method - use spread method - kach k glass ko drop kar dijiye

 const all_new_heroes = [...marvel_heros, ...dc_heros]
 // console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6],7, [6, 7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("hitesj"))
console.log(Array.from("hitesj"))
console.log(Array.from({name: "hitesj"})) // interesting case interview quesiton


let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3));










