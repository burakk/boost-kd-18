/* variable declaration without initializing */
var userName;

/* declaration and initializing */
var userId = 12;

//////// JS IS A WEAKLY TYPED LANGUAGE  //////////

/*  assigning a new value to a variable */
userId = "Burak"; //değeişkenlerini başlatırken type yazmak zorunluluğu yok, deklare ettiğiniz değişkeninize dinamik olarak farklı tipler atayabilirsiniz...

console.log(userId);

/* can be redaclared with the same identifer name  ( via var)*/
var lastSeen = "two hours ago";

var lastSeen = "three hour ago";

var totalScore = 2000;

/* reassignmet is ok */
totalScore = 3000;

/* reassignmet is ok */
totalScore = 4000;




/*   global scope  */

{
  /* block scope */
  var blockInner = "I am block inner...";
}

console.log(blockInner);


/*
1- declaration without initializing   -ok
2- declaration with the same identifer name -ok
3- reassignment -ok 
4- block scoped or not - (var is not block scoped )
*/
