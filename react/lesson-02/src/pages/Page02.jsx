const Page02 = () => {
    return (
        <section>
            <h1>Pure functions - Saf Fonksiyonlar</h1>
            <MyAwesomeRecipe guestCount={2} />
            <MyAwesomeRecipe guestCount={2} />
            <MyAwesomeRecipe guestCount={2} />
            <MyAwesomeRecipe guestCount={2} />
            <MyAwesomeRecipe guestCount={2} />
            <MyAwesomeRecipe guestCount={2} />
            <MyAwesomeRecipe guestCount={2} />


            <TeaGathering />

        </section>
    )
}



export default Page02;






// pure function 

/* aynı argümanla çağrıldığı zaman her seferinde aynı sonucu verir */
/* kendisinden önce gelen bir değeri değiştirmemeli */
/* sadece kendi işine odaklanması */
function double(num) {

    return 2 * num;

}


double(2) // 2 -> 4;

double(3) // 3 -> 6;


/* impure double function */
function double2(num) {

    console.log(num); //side effect
    return 2 * num;

}


let counter = 0;


//impure function
function incrementCounter() {
    return counter++;
}

console.log(incrementCounter());
console.log(incrementCounter());


//pure component function 
function MyAwesomeRecipe({ guestCount = 1 }) {
    return (
        <div>
            <h1>{guestCount} kişilik sütlü çay tarifi</h1>
            <ul>
                <li>{guestCount / 2} çorba kaşığı çay</li>
                <li>{guestCount / 2}Bir fincan süt</li>
            </ul>
        </div>
    )
}




let guestCount = 0;



function TeaGathering() {
    console.log("Çay toplantısı render ediliyor...")
    return (

        <div>
            <h1>Çay toplantısı</h1>
            <ImpureCup />
            <ImpureCup />
            <ImpureCup />

            <PureCup guestId={1} />
            <PureCup guestId={2} />
            <PureCup guestId={3} />
        </div>
    )


}

function ImpureCup() {
    guestCount += 1;
    return <p> {guestCount}.konuk için bardak</p>
}

function PureCup({ guestId }) {

    return <p> {guestId}.konuk için bardak</p>
}