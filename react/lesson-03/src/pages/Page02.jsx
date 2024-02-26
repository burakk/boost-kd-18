import { useState } from "react";
import { DATA_FAMOUS_ACTORS } from "../data";
import galleryStyles from "../components/Gallery.module.css"

const Page02 = () => {
    return (
        <section>
            <h1>State: Bir komponent'in hafızası</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat libero facilis doloribus dicta quia, labore nostrum quis voluptate quo impedit.</p>
            <ButtonV1 />
            <ButtonV2 />

            <Gallery data={DATA_FAMOUS_ACTORS} />
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



const Gallery = ({ data }) => {
    const [index, setIndex] = useState(0);
    const isFirstSlide = index === 0;
    const isLastSlide = index === data.length - 1;

    console.log("Ben galeri render ediliyorum", index);

    function handlePrevious() {
        if (isFirstSlide) return;
        setIndex(index - 1);
    }
    function handleNext() {
        if (isLastSlide) return;
        setIndex(index + 1);
    }

    return (
        <div className={galleryStyles.Gallery}>
            <h2>Galeri</h2>
            <p>Toplam {data.length} içinde {index + 1}. gösteriliyor </p>
            <button onClick={handlePrevious} disabled={isFirstSlide}>önceki sanatçı</button>
            <button onClick={handleNext} disabled={isLastSlide}>sonraki sanatçı</button>
            <div>
                <figure>
                    <img src={data[index].src} alt={data[index].name} />

                </figure>
                <h3>{data[index].name}</h3>
                <p>{data[index].descr}</p>
            </div>
        </div>

    )

}


export default Page02;