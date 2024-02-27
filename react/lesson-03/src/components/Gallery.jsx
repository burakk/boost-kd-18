import { useState } from "react";

import galleryStyles from "./Gallery.module.css"

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

export default Gallery;