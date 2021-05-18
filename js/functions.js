// Now we will create a new function with the name myFunc, when we create a new function is with the keyword function

function myFunc(){
    console.log("Hello, I'm a function");
}

// Once declared a function we need call it
myFunc();

// functions with parameters

function sayHello( name="world" ){ // in case when the function is called but the parameter isn't put, for default will take world
    console.log(`Hello, my name is ${name}`);// here use template literal for concatenate strings
}

sayHello("Jason");

// functions with return

function sum( x, y ){
    return x + y;
}

let result = sum(5, 4);

console.log( result );


// arrow functions, it is the way to declare functions and avoid the keyword this

const response = ( x, y )=>{
    return x - y;
}

console.log( response( 100, 43 ) );
// The arrow functions are anonymous function because they don't have name only in case de above example

// for example when we use a function and needs other function like parameter we can use arrow function, in other languages is called "lambda"

//we will cretae an example for understand how to use arrow functions

const example = document.querySelector("#example");

// The second parameter is a function, we can use arrow function
example.addEventListener('click', ()=>{
    example.innerHTML = "Other text";
}); 


