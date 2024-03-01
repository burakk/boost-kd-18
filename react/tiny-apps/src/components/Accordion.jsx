import { useState } from "react";


export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);



    return (
        <>

            <ul>
                <ListItem isActive={activeIndex === 0} onSetActive={() => { setActiveIndex(0) }} /> {/* 0 */}
                <ListItem isActive={activeIndex === 1} onSetActive={() => { setActiveIndex(1) }} /> {/*  */}

            </ul>
        </>
    )
}


function ListItem({ isActive, onSetActive }) {

    return (
        <li>
            <h3>Item 2</h3>
            <p>özet: Lorem ipsum dolor sit amet.</p>

            {isActive && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati! Itaque adipisci, eligendi labore sapiente similique dolor quod nemo explicabo.</p>}

            {!isActive && <button onClick={(e) => { onSetActive() }} >Detay gör</button>}

        </li>
    )
}


const DATA_PLACES = [
    { id: 14, name: "Tokyo", excerpt: "lorem lorem özet", detail: "bu çok uzun bir detaydır" },
    { id: 16, name: "Paris", excerpt: "lorem lorem özet", detail: "bu çok uzun bir detaydır" },
    { id: 18, name: "Londra", excerpt: "lorem lorem özet", detail: "bu çok uzun bir detaydır" },
    { id: 24, name: "Ankara", excerpt: "lorem lorem özet", detail: "bu çok uzun bir detaydır" },
]

export function AccordionV2({ title }) {
    const [activeIndex, setActiveIndex] = useState(null);


    return (
        <>
            <h2>{title}</h2>
            <ul>
                {DATA_PLACES.map((p) => <AccordionPanel isActive={p.id === activeIndex} id={p.id} name={p.name} onSetActive={setActiveIndex} />)}

            </ul>
        </>
    )
}


function AccordionPanel({ id, name, isActive, onSetActive }) {

    return (
        <li>
            <h3>{name}</h3>
            <p>özet: Lorem ipsum dolor sit amet.</p>

            {isActive && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati! Itaque adipisci, eligendi labore sapiente similique dolor quod nemo explicabo.</p>}

            {!isActive && <button onClick={(e) => { onSetActive(id) }} >Detay gör</button>}

        </li>
    )
}