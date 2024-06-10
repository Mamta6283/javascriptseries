//data type 
//primtive data  type
//7 types:string ,number,bigint ,boolean,null,undefined,symbol

const score1=200
const scorevalue=100.9
const isloggedin=true
const outside=null //iski type object hoti hai 
let user;

//symbol
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)

const bigNumber=3343433n
console.log(bigNumber)


//reference and non-primitive type
//array ,object ,function

 const heros=["mamta","rani","riya","kumari"]//arrays
let obj = {
    name:"mamta",
    age:14,
    isloggedin:true

}


const myfunction=function(){
    console.log("hello ")
}
myfunction()
console.log(typeof heros)
console.log(typeof obj
)

// stack memory(primitive ,yahan pe copy milta hai) and heap memory(non-primitive,yahn pe refreene milta hai)


//strings:
const name="mamta"
const age=22
console.log(name+"age"+age+"its me")
console.log(`my name is ${name},age${age} its me`)

const gameName= new String ('mamta-rani-sahni')

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-5,2)
console.log(anotherString)

const newStringOne="   mamta  "
console.log(newStringOne)

console.log(newStringOne.trim())


const url="https://mamta.com/mamta%20sahni"

console.log(url.replace('%20','_'))

 console.log(gameName.split('-'))//it will convert into array 


//numbers

const score=400

const balance= new Number(100)
console.log(balance.toString())
console.log(typeof balance)
console.log(balance.toFixed(3))//number ke baad points mein 000 ayega
console.log(score)

const otherNumber=1123.4966

console.log(otherNumber.toPrecision(3))
//retrun the string how many numbers you want to show preciese value and other rest value will round of n

const hundered=10000000
console.log(hundered.toLocaleString()) //it will add , comma in numbers

//maths it will come by default with js library
console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(4.6))//decimal hta dega 

console.log(Math.ceil(5.9))//top wala number choose krega 

console.log(Math.floor(4.9))//niche wala numbr choose karga

console.log(Math.min(4,5,6,7,8))//it will choose min value 

console.log(Math.max(4,2,7,8,9))//it will choose max value

//we all gonna use in mathrandom 

console.log(Math.random())//math ki value hmesha 0-1 men se aygi
console.log(Math.floor(Math.random()*10)+1)

const min=10

const max=20
console.log(Math.floor(Math.random()*(max-min)+1)+ min)
console.log(Math.random()*20+1)





