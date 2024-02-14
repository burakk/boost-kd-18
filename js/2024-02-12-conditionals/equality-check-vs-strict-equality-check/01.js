// ==  vs ===

//coercion
"abc" + 3;

//coercion
if (3 == "3") {
  //burası çalışır
  console.log("Yeps!!!");
}

// strict equality check
//no coercion
if (3 === "3") {
  //burası çalışmaz
  console.log("Nope!!");
}
