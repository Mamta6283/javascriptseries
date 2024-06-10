//singleton  jab literlas use hota hai to singleton nhi banta hai
//agr consturtor ke to sath to single ton banta hai


//object literals
const mysym=Symbol("key1")

let obj={
     name:"mamta",
     myname:"sohit",
     [mysym]:"mykey",
     age:21,
     myage:22,
     isloggedin:true,
     lastdays:["monday","saturday"]


}

console.log(obj.name,obj.myage)
console.log(obj["name"]) //behind the scene key ko as string liya jata hai 
console.log(obj)
console.log(`hello this is myname ${obj.name}`)
console.log(typeof obj.mysym)//you cannot use in this way
console.log(obj[mysym])

// console.log(obj.age=23)
// console.log(Object.freeze(obj)) //new key ko edit kar skte ho

obj.greeting=function(){
    console.log("hello 23 age")
}
console.log(obj.greeting)//it will send only reference

console.log(obj.greeting())

obj.greetingone=function(){
    console.log(`hello this is ${this.name}`)
}

console.log(obj.greetingone())