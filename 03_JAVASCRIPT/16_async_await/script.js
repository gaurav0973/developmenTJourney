
async function hello(){
    return "Hello World";
}


// const respone = hello();
// console.log(respone); // Promise { 'Hello World' }
// respone.then(data => console.log(data)); // Hello World


// fetch("https://api.github.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data));


const responce = await fetch("https://api.github.com/users");
const users = await responce.json();
console.log(users);