// We will declarate a class with the name Dog

class Dog{
    constructor( name ){
        this.name = name;
    }

    // adding method get 
    get food(){
        console.log("Food");
    }
}

// This way it is how to instance a class
const rufo = new Dog("Rufo");
// Now we will print the name of my object Dog
console.log(rufo.name);

rufo.food;