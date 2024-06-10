const marvalHeros=["thor","ironman","spiderman"]

const dcHeros=["superman","falsh","batman"]
console.log(marvalHeros)
console.log(dcHeros)

// marvalHeros.push(dcHeros)//ismein array ke ander array ajayega
// console.log(marvalHeros[3][1])

console.log(marvalHeros.concat(dcHeros))
// console.log(marvalHeros)

console.log(...marvalHeros,...dcHeros)//it just converted into string

const value=[...marvalHeros,...dcHeros]//this is spread operator
console.log(value)

//array mein convert krana

const arr=[1,2,3,[4,5,6],3,[5,5,7],8]//jab array ke ander array ho

const realArr=arr.flat(Infinity) //ye ekk array mein convert kar deta hai
console.log(realArr)

console.log(Array.isArray("mamta"))//it will show false this is string
console.log(Array.from("mamta")) //it will convert into array

console.log(Array.from({name:"mamta"}))//it will show empty array interesting 

let score=100
let score1=200
let score2=300

console.log(Array.of(score2,score,score1)) //it will convert into array.....//






























