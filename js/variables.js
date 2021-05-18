// how to declare a variable?
// we can use var, let and const

var name = "Jason"; // var is deprecated because its scope is global and that is risk
console.log(name);

let lastname = "Limon"; // let has a scope block, for example when defined a function the scope is only for the function
console.log(lastname);

const age = 25; /// if we use const we will indicate a variable doesn't change the value while our program is running
console.log(age);


// In javascript exist arithmetic operators like + - /  * and %
console.log(5 + 4);
console.log(5 - 4);
console.log(10 / 2);
console.log(8 * 8);
console.log(8 % 8);

// In JavaScript doesn't exist a strong type variables for example we can't define:  String name in other words we can do this:

let toy = "Simba toy";
console.log(toy);
toy = 28;
console.log(toy);

// why happened this?
// because in js we don't have strong type variables but if we want to know type:

let hello = "hello world";
console.log( typeof hello );

// we have many types in js like  string, number, boolean etc

