const obj = {
    name : "Gaurav",
    age : 22,
    greet : function() {
        console.log("Hello, " + this.name);
    }
}
// console.log(obj);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, " + this.name);
    }
}
const person1 = new Person("Gaurav", 22);
console.log(person1);


// inheritance using classes
class Customer extends Person {
    constructor(name, age, account) {
        super(name, age); // calling parent class constructor
        this.account = account;
    }
    greet() {
        console.log("Hello, " + this.name);
        console.log("Your account number is: " + this.account);
    }
}
const customer1 = new Customer("Gaurav", 22, "C12345");
console.log(customer1);
