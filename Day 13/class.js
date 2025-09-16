//Function using let and const & scope difference
function testScope() {
  if (true) {
    let x = 10;      // block-scoped
    const y = 20;    // block-scoped
    console.log(x);  // ✅ 10
    console.log(y);  // ✅ 20
  }
  // console.log(x); // ❌ ReferenceError: x is not defined
  // console.log(y); // ❌ ReferenceError: y is not defined
}
testScope();

//Re-declaring let and const
let a = 5;
let a = 10;   // ❌ SyntaxError: Identifier 'a' has already been declared

const b = 15;
const b = 20; // ❌ SyntaxError: Identifier 'b' has already been declared


//Destructure object
const user = { name: "Alice", age: 25, location: "NYC" };
const { name, age, location } = user;
console.log(name);     // "Alice"
console.log(age);      // 25
console.log(location); // "NYC"

//Swap values with array destructuring
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

//Function destructuring parameters
function printUser({ name, age, location }) {
  console.log(`Name: ${name}, Age: ${age}, Location: ${location}`);
}
const userObj = { name: "Bob", age: 28, location: "LA" };
printUser(userObj);
// Output: Name: Bob, Age: 28, Location: LA

//Format string with template literals
const name = "John", age = 30;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// Output: Hello, my name is John and I am 30 years old.


//Multi-line string
const poem = `
Roses are red,
Violets are blue,
Template literals
Make coding easier too!
`;

console.log(poem);
