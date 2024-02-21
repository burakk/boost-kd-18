const isRainy = true;

const iWillBeThereInAnHour = new Promise((resolve, reject) => {
  if (!isRainy) {
    resolve("her zaman dakik bir insanımdır...");
  } else {
    reject("Yağmurun azizliğine uğradık");
  }
});

iWillBeThereInAnHour.then(
  //resolve durumunda çağrılacak
  (message) => {
    console.log(message);
  },

  //reject durumunda çağrılacak
  (message) => {
    console.log(message);
  }
);

iWillBeThereInAnHour
  .then(
    //resolve durumunda çağrılacak
    (message) => {
      console.log(message);
    }
  )
  .catch((message) => {
    console.log(message);
  }); //reject ve promise sırasında oluşan hata neticesinde çalışır

const iWillReadTheFile = new Promise((resolve, reject) => {
  //resolve("File has been read");
  /*
  setTimeout(() => {
    reject("File has been read");
  }, 5000);
  */

  reject("There was an error reading the file");
});



// RETURNING A PROMISE OBJECT

function readFile( url ){

  //read the file from the system
  const ok=true;

  return new Promise( (resolve, reject)=>{ 

    //settimeout ile bir gecikme efekti yapıyoruz
    setTimeout( ()=>{
      if( ok ){
        resolve("File has been read");
      }
  
      reject("There was an error");
    }, 3000   )
   

  } );

}


readFile("peoplet.txt")
.then( (result)=>{
  console.log(result)
}  )
.catch(  (err)=>{ console.log(err)} )



