// const fs = require("fs");
// fs.writeFileSync("hello.txt","hello nodejs");

// let person ={
//     'name':"node",
//     'language':'javascript'
// }

// const copyperson =  {...person}
// console.log(copyperson);

// const hobbies = ['sports','cooking'];
// for(let hobby of hobbies)
// console.log(hobby);

// console.log(hobbies.map(hobby => "hobby:"+hobby));

// const copyhobbies = [...hobbies];
// console.log(copyhobbies);

// const func = (...args)=> args;
// console.log(func(1,2,3,4));



const person={'name':'node','age':30};
const printName = ({name,age})=>console.log(name,age);
printName(person);

let {name,age} = person;
console.log(name+":"+age);

const hobbies = ['sports', 'cooking','teaching','reading'];
let [h1,h2,...h] = hobbies;
console.log(h1,h2,h);