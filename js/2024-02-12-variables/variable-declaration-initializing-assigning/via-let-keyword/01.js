/*

SyntaxError: Cannot declare a let variable twice: 'userId'

let userId = 12;

let userId = 14;


*/

/* variable declaration without initializing */
let userName;

let userBasketTotal = 5250;

userBasketTotal = 3250;

{
  let blockInner = 545; /* let is block scoped */
}

console.log(blockInner);

/*
1- declaration without initializing   -ok
2- declaration with the same identifer name -not allowed
3- reassignment -ok 
4- block scoped or not - (let is block scoped )
*/
