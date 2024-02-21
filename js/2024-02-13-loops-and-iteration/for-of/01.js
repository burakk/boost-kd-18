const myArr1 = ["x", "y", "z"];

console.log(myArr1);

for (let item of myArr1) {
  console.log(item);
}

const myObj1 = { id: 14, title: "Laptop", price: 56000 };

console.log(myObj1);

/*
for (let key of myObj1) {
  console.log(key);
}

//!!!! for of iterable'lar ile kullanılabilir. Prototipinde iterator metodu olmayan objelerle kullanılamaz.
*/

/*

Object.keys( myObj1 );
Object.values( myObj1 );
Object.entries( myObj1 );


*/

const keysOfMyObj1 = Object.keys(myObj1);
const valuesOfMyObj1 = Object.values(myObj1);
const entriesOfMyObj1 = Object.entries(myObj1);

console.log(keysOfMyObj1, valuesOfMyObj1);

console.log( entriesOfMyObj1 ); // [   ["id", 14], ["title", "laptop"], ["price", 56000]   ]

for( const [key, value] of entriesOfMyObj1){
  console.log( key, value)
}



for( let entry of entriesOfMyObj1){
  const [key, value ] = entry;
  console.log( key, value)
}


for( let entry of entriesOfMyObj1){
  
  console.log( entry[0], entry[1]);
}
