
const Jsuser = {
    name:"Jayesh",
    "full name":"JayeshPrabhu",
    age:18,
    location:"Honnaavar",
    email:"jayesh.google.com",
    isLoggedIn:false,
    isLoggedInDayes:["Monday","Saturday"]
}

console.log(Jsuser.isLoggedInDayes[1]);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);

Jsuser.email="Jayesh@chatgpt.com";
Object.freeze(Jsuser)
Jsuser.email="Jayesh@nike.com";

console.log(Jsuser);

