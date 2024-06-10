//objects

const tinder=new Object()
console.log(tinder)

tinder.id="123"
tinder.name="mamta"
tinder.isloggedin=false



const regular={
    email:"mamta@gmail",
    fulname:{
        username:{
        firstname:"riya",
        lastname:"kumari"
        }
     
    }
}
console.log(regular.fulname.username.firstname)



const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"

}
//these all are the way to combine one object to other 
const obj3={obj1,obj2}
const obj4=Object.assign(obj1,obj2)
const obj5=Object.assign({},obj1,obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)
const obj6={...obj1,...obj2}
console.log(obj6)

const user=[{
    id:1,
    email:"email@gmail.com"
}
,
{
    id:2,
    name:"mamta"
},{
    id:3,
    name:"sohit"
}
]
console.log(user[2].name)
console.log(tinder)

console.log(Object.keys(tinder))//it will return the keys of object ab yahna pe loop lga skte hai....
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty("isloggedin"))//if you want ot make sure that any property exist or not 


























