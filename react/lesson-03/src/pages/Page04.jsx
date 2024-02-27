import { useState } from "react";
import TodoList from "../components/TodoList";
import { DATA_TODOS } from "../data";

export default function Page04() {

    return (
        <section>
            <h2>Komponent state'i içerisindeki diziyi güncellemek</h2>

            <InspiringPeople />

            <TodoList data={DATA_TODOS} />
        </section>
    )



}


// [ "Deneme", "Test"]
//[ {id:"asaal-sdfffd-gfgf", name:"Deneme"}, {id:"afdfgf-fgfg-dffdf", name:"Test"} ]

function InspiringPeople() {
    const [inspiringInp, setInspiringInp] = useState("");
    const [data, setData] = useState([]);

    console.log(data)
    function handleSubmit(e) {
        e.preventDefault();

        //inspiringInp -> deneme
        //const newData = [...data, inspiringInp];
        const newData = data.slice();
        newData.push({ id: crypto.randomUUID(), name: inspiringInp });

        setData(newData);
        setInspiringInp("");


    }


    function handleDelete(id) {
        const filteredData = data.filter((d) => id !== d.id);
        setData(filteredData);
    }


    return (
        <div>
            <h3>İlham veren insanlar</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" name="inspiringInp" value={inspiringInp} onChange={(e) => { setInspiringInp(e.target.value) }} />

                <button>Ekle</button>
            </form>

            <ul>
                {data.map((d) => <li key={d.id}>{d.name} <button onClick={(e) => { handleDelete(d.id) }}>Sil</button></li>)}
            </ul>

        </div>
    )
}








//metod -> pop, push, shift, unshift ...

//mo mutation methods slice 