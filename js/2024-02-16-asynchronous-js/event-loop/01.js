/*

//Synchronous - SENKRON


function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

f1();
f2();

*/

// Asynchronous - Asenkron

/*
function testA() {
  console.log("testA");
}

function testB() {
  console.log("testB");
}

testA();

setTimeout(() => {
  console.log("I am the timeout ");
}, 0);

testB();*/

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  f2();
}

main();

function testing() {
  console.log("First line of testing");

  setTimeout(() => {
    console.log("I am from timeout macro task");
  }, 0);

  new Promise((resolve, reject) => {
    resolve("I am the promise micro task");
  })
  .then( (m)=>{ console.log(m)} );

  console.log("Last line of testing");
}

testing();
