function test(paremeter1, parameter2, parameter3) {
  //statement1
  //statement2
}

//invoking or callin a function
const argument1 = "a";
const argument2 = "b";
const argument3 = "c";

test(argument1, argument2, argument3);

function add(n1, n2) {
  return n1 + n2;
}

const result1 = add(3 + 5); //NaN

console.log(add(3, 5), result1);

function test2() {
  //implicit return undefined
}

console.log(test2());

// USING DEFAULT PARAMETERS
function greet(userName, greetingWord = "Selam") {
  return `${greetingWord}, ${userName}`;
}

console.log(greet("Burak", "Merhaba"));
