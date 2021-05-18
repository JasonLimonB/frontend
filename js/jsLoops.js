// In js the loops it is the same like others languages, we have for, while and do while
console.log("For");
for( let i =0; i < 10; i++ ){
    console.log(i);
}


console.log("While");
let count = 0;

while( count < 10 ){
    console.log(count);
    count++;
}

console.log("Do While");
let number = 0;

do{
    console.log(number);
    number++;
}while( number < 10 );

// empty  values

let name;

console.log(name); // will be undefined

let lastname = "";
console.log(lastname);

// we have conditionals in js:
let age = 35;
if(age >= 18){
    console.log("You are adult");
}else {
    console.log("You are child")
}


let option = 1;

switch(option){
    case 1:
        console.log("Pizza");
        break;
    case 2: 
        console.log("Tacos");
        break;
    default:
        break;
}