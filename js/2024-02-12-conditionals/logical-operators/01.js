// and &&
console.log(true && true);

console.log(false && true);

// truthy && truthy
console.log(3 && 4);

// falsy && truthy
console.log(0 && 1);

// falsy && truthy
console.log("" && 4);

//örnek
let error = true;
error && console.log("There was an error");

if ("" && 4) {
  console.log("******");
}

// or ||

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

// truthy && truthy
console.log("abc" || 3);

// falsy || truthy
console.log(0 || 1);

// !
const isRainy = false;

console.log( !'' ); // logs true
console.log( !3) ; // logs false

if( !isRainy ){
    console.log("Happy days...")
}