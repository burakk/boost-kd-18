const isUserAllowed = false;

let message;



if( isUserAllowed ){
  message =  "Merhaba";
}else{
  message = "Üzgünüz";
}

console.log( message );


/*  TERNARY OPERATOR */

// expression ? "expression true"  : "expression false";


message = isUserAllowed ? "Merhaba" : "Üzgünüz";

console.log( message  );


console.log( isUserAllowed ? "Merhaba" : "Üzgünüz" );



//3 < 5 && "asd" ? "deneme" : "test" ? 3 : 5;