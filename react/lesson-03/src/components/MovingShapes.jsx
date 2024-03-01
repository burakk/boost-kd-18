import { useState } from "react";

export default function MovingShapes({ data }) {

    const [shapesData, setShapesData] = useState(data);

    function moveShapes(type, moveBy = 20) {

        const newShapesData = shapesData.map((s) => {

            if (s.type === type) {
                return { ...s, y: s.y + moveBy }
            }
            return s;

        });

        //rerender
        setShapesData(newShapesData);
    }

    return (
        <div>
            <h2>Hareket eden şekiller</h2>

            <button onClick={(e) => { moveShapes("square", 10) }}>Şekilleri Hareket Ettir</button>
            <div style={{ position: "relative" }}>

                {shapesData.map((s) => <div style={{ position: "absolute", top: s.y, left: s.x, border: "2px solid white", width: 20, height: 20, borderRadius: s.type === "circle" ? "50%" : 0 }}>1</div>)}


            </div>
        </div>
    )
}