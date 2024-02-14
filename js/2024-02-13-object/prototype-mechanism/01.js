const user1 = {
    id:17,
    isRegistered:false,
    sayId:function(){ console.log( this.id )}
} 


user1.id;
user1.sayId();


user1["id"];
user1["sayId"]();

console.log( user1.toString() );

console.log( user1 );



//prototype chain

console.log( user1.__proto__ );

console.log( Object.getPrototypeOf(user1) ); // Bir objenin prototipine bakmak için en crossbowser yöntemi


console.log( user1.__proto__.__proto__ );



const nD = new Date();

console.log( nD.__proto__.__proto__.__proto__ );


console.log( user1.hasOwnProperty("id")  );



const myName = "Burak";


console.log( myName.__proto__.__proto__.__proto__ );


