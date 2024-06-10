let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)//is object

// let myCreateDate=new Date(2023,2,23,5,3) //months start with 0 and first months 
// let myCreateDate=new Date("2023-01,23")
// console.log(myCreateDate.getTime())
// console.log(myCreateDate)

// let myTimeStamp=Date.now()
// console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

console.log(newDate.toLocaleString('defalut',{
    weekday:"long"
}))//customized define
