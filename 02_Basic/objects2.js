const tinderUser = new Object();

 tinderUser.id ="123abc"
 tinderUser.name="Jammy"
 tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userName:{
            firstname:"jayesh",
            lastname:"prabhu"
        }
    }
}

//console.log(regularUser.fullname.userName);


const obj1={1:"a",2:"b"}
const obj2={33:"c",4:"d"}

//const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// const obj3 ={...obj1,...obj2}
// console.log(obj3);

const user =[
    {
        id:1,
        email:"jauyesh"
    },
      {
        id:1,
        email:"jauyesh"
    },
      {
        id:1,
        email:"jauyesh"
    },
      {
        id:1,
        email:"jauyesh"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.has);
