import { useState } from "react";
import { DATA_FAMOUS_ACTORS } from "../data";

import Gallery from "../components/Gallery";

const Page02 = () => {
    return (
        <section>
            <h1>State: Bir komponent'in hafızası</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat libero facilis doloribus dicta quia, labore nostrum quis voluptate quo impedit.</p>
            <ButtonV1 />
            <ButtonV2 />

            <ButtonV3 />
            <Gallery data={DATA_FAMOUS_ACTORS} />


            <FormUserMessage />
        </section>
    )
}




//rendering - rerendering
const ButtonV1 = () => {
    let counter = 0;
    console.log("Ben render ediliyorum");
    function handleClick() {
        //alert("Hello");
        counter++;
        console.log(counter);

    }
    return <button onClick={handleClick}>{counter}</button>;
}


const ButtonV2 = () => {
    //[statefulValue, setterFunction ] = useState(initialValue)
    console.log("Ben V2 render ediliyorum");
    const [counter, setCounter] = useState(0); //returns an array consisting of a stateful value and a setter function

    function handleClick() {
        //alert("Hello");

        setCounter(counter + 1); //rerender talep eder.

    }

    return <button onClick={handleClick}>{counter}</button>;

}


const ButtonV3 = () => {

    const [counter, setCounter] = useState(0);
    const [rand, setRandom] = useState(Math.random());

    function handleClick(e) {

        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);

        alert(counter);

        setTimeout(() => { alert(counter) }, 3000)

        //rerender triggers
    }

    return (
        <button type="button" onClick={handleClick}>Sayaç Arttır: {counter}</button>
    )
}





export function FormUserMessage() {

    console.log("Ben kullanıcı mesaj formu render ediliyorum")
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);


    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleMessageSubmit(e) {
        e.preventDefault();
        sendMessage(message);
        setIsSent(true);
    }

    if (isSent) {
        return <p>Mesajınız yola çıktı...</p>
    }


    return (
        <form onSubmit={handleMessageSubmit}>
            <h1>Hello User Message Form</h1>

            <textarea onChange={handleMessageChange} name="userMessage" id="inpUserMessage" value={message}></textarea>
            Mesajınız: {message}
            <button type="submit">Gönder</button>
        </form>
    );
}






function sendMessage(message) {

    alert(message);
}




export default Page02;