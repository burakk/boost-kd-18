import { useState } from "react";

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState("");
    const [status, setStatus] = useState() //typing, submitting, success
    const [error, setError] = useState(null);


    async function handleSubmit(e) {

        e.preventDefault();
        //submitting
        setStatus("submitting");
        try {
            const result = await checkAnswer(userAnswer);
            //success
            setStatus("success");

        } catch (err) {
            //error

            setError(err);
            setStatus("typing");
        }


    }

    if (status === "success") {
        return <p>Tebrikler, kazandınız</p>
    }

    return (
        <div>
            <h2>Bir quiz daha...</h2>
            <p>
                Türkiye'nin en kalabalık şehrini yazınız.
            </p>
            <form onSubmit={handleSubmit}>
                <textarea onChange={(e) => { setUserAnswer(e.target.value) }} name="" id="" cols="30" rows="10" placeholder="Cevabınızı yazınız..." value={userAnswer}></textarea>
                <button type="submit" disabled={userAnswer.length < 2 || status === "submitting"}>Gönder</button>
            </form>


            {error && <p>{error}</p>}

        </div>

    )
}



function checkAnswer(userAnswer) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (userAnswer.toLocaleLowerCase("tr") === "istanbul") {
                resolve("Kazandız");
            }

            reject("Hatalı cavap")

        }, 3000);


    })



}