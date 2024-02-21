const myObj1 = { id: 0, title: "laptop", price: 12000 };

const copyOfMyObj1 = { ...myObj1 };

console.log(myObj1 === copyOfMyObj1);




// overwriting 

const modifiedCopy = {  ...myObj1, price:15000    };

console.log( modifiedCopy );


//adding new  keys while copying

const extendedCopy = { ...myObj1, stockCount:100 };

console.log( extendedCopy );
