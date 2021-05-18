// fisrt data structure is Arrays

// Remember Js has dynamic variables for this reason we can do de following:

let miArr = [ "Jason", 25, true, "Arraglo" ];
// we will use a for and print the values
for( let i=0; i < miArr.length; i++ ){
    console.log(miArr[i]);
}

// we have other option and how to print out array
console.log("------->Foreach");
miArr.forEach( data =>console.log(data) );

// Now we will undertand the Objects => in JS if we want declare an object is:

const user = {
    name: "Jason",
    age: 25
}
// is similary like a JSON  and we want print 
console.log(user);
// or 
console.log(user.name);
console.log(user.age);

console.table(user);

// in js when you see {} that's means is an object
