import { useState } from "react";

export default function TodoList({ data }) {
    const [content, setContent] = useState("");
    const [todosData, setTodosData] = useState(data);

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
                {  todosData.map((todoData) => (
                    <li key={todoData.id}>
                        {todoData.content}{" "}
                        <button
                            onClick={(e) => {
                                handleDeleteTodo(todoData.id);
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
