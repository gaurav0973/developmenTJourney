/*
1. Installation
- Install TypeScript => npm install -g typescript
- check version => tsc -v or tsc --version

2. To Compile TypeScript file
- tsc intro.ts
- This will generate intro.js file

3. compile in latest ES
- tsc --init
- change "target": "es2016" to "esnext" or "es2020"

4. To watch file for changes
- tsc --watch intro.ts

5. To run TypeScript file directly without compiling
- npm install -g ts-node
- ts-node intro.ts

*/

// number type
let a:number = 10
let b:number = 20
console.log("Sum is:", a + b)

// string type
let firstName:string = "Gaurav"
let lastName:string = "Maurya"
console.log("Full Name is:", firstName + " " + lastName)


// boolean type
let isLoggedIn:boolean = true
console.log("Is User Logged In:", isLoggedIn)

// any type
let randomValue:any = 10
console.log("Random Value:", randomValue)
randomValue = "Hello"
console.log("Random Value:", randomValue)

// array type
let numbersArray:number[] = [1, 2, 3, 4, 5]
console.log("Numbers Array:", numbersArray)

let stringArray:Array<string> = ["one", "two", "three"]
console.log("String Array:", stringArray)

// tuple type
let userTuple:[number, string, boolean] = [1, "Gaurav", true]
console.log("User Tuple:", userTuple)

// enum type
enum Color {
    Red,
    Green,
    Blue
}   
let favoriteColor:Color = Color.Green
console.log("Favorite Color:", favoriteColor)


// void type
function greetUser():void {
    console.log("Hello, User!")
}
greetUser()

// null and undefined types
let u:undefined = undefined
let n:null = null
console.log("Undefined Value:", u)
console.log("Null Value:", n)

// never type
function throwError(message:string):never {
    throw new Error(message)
}
// Uncommenting the below line will throw an error
// throwError("This is a never type function")


// object type
let userObject:object = { id: 1, name: "Gaurav" }
console.log("User Object:", userObject)


// type assertion
let someValue:any = "This is a string"
let strLength:number = (someValue as string).length
console.log("String Length:", strLength)

// union type
let multiType:string | number
multiType = "Hello"
console.log("Multi Type as String:", multiType)
multiType = 100
console.log("Multi Type as Number:", multiType)


// intersection type
type Person = { name: string }
type Employee = { employeeId: number }
type Staff = Person & Employee
let staffMember:Staff = { name: "Gaurav", employeeId: 123 }
console.log("Staff Member:", staffMember)


// literal type
let direction: "up" | "down" | "left" | "right"
direction = "up"
console.log("Direction:", direction)
direction = "left"
console.log("Direction:", direction)
// Uncommenting the below line will throw an error
// direction = "forward"


// function with typed parameters and return type
function addNumbers(x:number, y:number):number {
    return x + y
}
console.log("Addition Result:", addNumbers(5, 10))
// arrow function with types
const multiplyNumbers = (x:number, y:number):number => x * y
console.log("Multiplication Result:", multiplyNumbers(5, 10))

