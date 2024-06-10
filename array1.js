//array

let arr=["mamta","rani","sohit","sahni"]
console.log(arr)

//shallow copy :when we do copy operation then it will do shallow copy it will change in original copy 
//deep copy they do not share the same reference

const myarr=[8,4,2,7,7,6,6,0,9,0]
console.log(myarr)

const myarr1=new Array(1,2,3)
console.log(myarr1)

//array methods 

console.log(myarr.push(1))//ending se

console.log(myarr.pop(1))//ending se delete krega

console.log(myarr1.unshift(9))//start mein shift krega
 console.log(myarr1.shift()) //starting se hi

 console.log(myarr.includes(9))//it will return value in true false

 console.log(myarr1.indexOf(9))

 console.log(myarr.join()) //bind kreke string mein convert kr diya hai 
 console.log(myarr)
 console.log(myarr1)

 //slice and splice

 console.log("a",myarr)
 console.log(myarr.slice(1,3))
 console.log(myarr.splice(1,3))//original mein bhi change kar dega cut kar dega
 console.log(myarr)

 console.log(arr.slice(1,3))

 console.log(arr.splice(1,3))
