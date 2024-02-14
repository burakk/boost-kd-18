// * ---- Falsy values ---

/*
""  empty strings are falsy values 
''
false
0
NaN
null
undefined

*/

const userName = "";

if (userName) {
  console.log("????");
}

if (0) {
  console.log("***");
}

if (1 / "a") {
  console.log("-----");
}

console.log(typeof 1 / "abc");


if ( null ) {
  console.log("++++");
}

if ( undefined ) {
  console.log("%%%%%%");
}


if(3){
  console.log("=========")
}



let userInventoryItems = 0;


if( userInventoryItems ){

}