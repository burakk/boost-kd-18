import { useState } from "react";

export default function TodoList({ data }) {
    const [content, setContent] = useState("");
    const [todosData, setTodosData] = useState(data);

    console.log(todosData);

    function handleContentChange(e) {
        setContent(e.target.value);
    }

    function handleAddTodo(e) {
        e.preventDefault();

        const newTodo = { id: crypto.randomUUID(), content };

        //todosData listesinin kopyasını almak için kullanılabilecekler :
        // 1. spread operator kullanarak -> const newTodosData = [ ...todosData  ];
        // 2. slice metodu kullanarak -> const newTodosData = todosData.slice();
        // 3. concat   metodu ile ->     const newTodosData = [].concat( todosData );

        const newTodosData = [newTodo, ...todosData];

        setTodosData(newTodosData);
    }

    function handleDeleteTodo(id) {
        //id'ye göre filtreleme
        setTodosData(todosData.filter(td => td.id !== id));
    }


    function handleUpdate(id) {
        //alert(id); // 2
        //todosData 
        const selected = todosData.filter((t) => t.id === id); //[ {id:2, completed:false, content:"spor"} ] 

        let newObj = { ...selected[0], completed: !selected[0].completed };

        // {id:2, completed:true, content:"spor"}

        const upadatedTodosData = todosData.map((t) => {

            if (t.id === id) {
                return { ...t, completed: !t.completed }
            }
            return t;
        });

        setTodosData(upadatedTodosData);

    }

    return (
        <div>
            <h2>Yapılacaklar listesi</h2>

            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    name="todoContent"
                    id="todoContent"
                    placeholder="Yapılcak bir iş yazınız..."
                    onChange={handleContentChange}
                    value={content}
                />

                <button>Ekle</button>
            </form>
            <ul>
                {todosData.map((t) => (
                    <li key={t.id}>


                        <input type="checkbox" name="" id="" checked={t.completed} onChange={(e) => { handleUpdate(t.id) }} />


                        {t.content}{" "}
                        <button
                            onClick={(e) => {
                                handleDeleteTodo(t.id);
                            }}
                        >
                            sil
                        </button>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
}
