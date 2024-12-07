// for(let i=0;i<=50;i++){
//     console.log(i);
// }
// for(let i=1;i<=30;i++){
//     if(i%2 !==0)
//         console.log(i)
// }
// for(let i=0;i<=100;i++){
//     if(i%5 ===0)
//         console.log(i)
// }
// for(let i=10;i>=1;i--){
//     console.log(i)
// }
// for(let i=1;i<=70;i++){
//     if(i%7 ===0)
//         console.log(i)
// }
// let sum=0;
// for(let i=1;i<=50;i++){
//     sum +=1;
//     console.log(sum)
// }
// let product =1
// for(let i=1;i<=10;i++){
//     product *=i;
//     console.log(product)
// }
// let num=0
// for(let i=1;i<=20;i++){
//     if(i%2===0)
//     num +=2;
//     console.log(num)
// }
// let sam=0
// for(let i=1;i<=100;i++){
//     if(i%3===0)
//         sam +=i
//     console.log(i)
// }
// for(let i=1;i<=40;i++){
//     if(i%4===0)
//         console.log(i)
// }
// for(let i=1;i<=5;i++){
//     let stars=""
//     for(let j=1;j<=i;j++){
//         stars +="*"
//     }
//     console.log(stars)
// }
// for(let i=1;i<=5;i++){
//     let number=""
//     for(let j=1;j<=i;j++){
//         number+=i
//     }console.log(number)
// }
// for(let i=5;i>=1;i--){
//     let stars ="";
//     for(let j=1;j<=i;j++){
//         stars+="*"
//     }
//     console.log(stars)
// }
// for(let i=1;i<=5;i++){
//     let numbers="";
//     for(let j=1;j<=i;j++){
//         numbers+=j;
//     }
//     console.log(numbers)
// }
// const users = {
//     john10:{
//     id: 1,
//     username:"Mohammed123",
//     name:"Haddad",
//     lastname:"Hadkk",
//     email:"haddmohamine@.com",
//     password:"password345",
//     image:"img",
//     role:"usre",
//     cart:["product1","product2"],
//     orders:["order1","oreder2"],
//     address:{
//         street:"street1",
//         city:"city1",
//     },
//     phonenumber:"+2130553195569",
//     paumertcard:"MasterCard"},

//     Sam:{
//         id: 2,
//     username:"Mohammed456",
//     name:"Haddad10",
//     lastname:"Hadkk10",
//     email:"haddmohamine@.com10",
//     password:"10password345",
//     image:"img10",
//     role:"usre10",
//     cart:["product1","product210"],
//     orders:["order1","oreder210"],
//     address:{
//         street:"street110",
//         city:"city110",
//     },
//     phonenumber:"+213055319556910",
//     paumertcard:"MasterCard10"

//     }
// };
// console.log(users);
// function login(email,password){
//     for (let u in users){
//         if (email<=users [u].email && password<= users[u].password){
//             return users[u];
//         }
//     }
//     return "please create an account";
// }
// console.log(login("haddmohamine@.com","password345"))
// const dog={
//     name:"dog",
//     legs:"4",
//     color:"green",
//     age:"6 Monat",
//     bark:"woof woof",

// }
// console.log(dog)


// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// if (users.skills.includes("HTML")) {
//     console.log(true)
// }




const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
  
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    }
  function averageRating{
    if(averageRating.length===0)
        return="No ratings available"
  }
  console.log(averageRating)
]
