import { useState, useReducer } from "react"
import { DATA_TASKS } from "../data"
import tasksReducer from "../reducers/TasksReducer";



// 1- bir reducer fonksiyonu yazın
//2- Komponent içinde useReducer hook'unu kullanarak, reducerFunction'ı kullan
export default function Tasks() {

    const [tasks, dispatch] = useReducer(tasksReducer, DATA_TASKS); //  useReducer( reducerFunction, initial-data )

    function handleDelete(id) {
        dispatch({ type: "deleted", id })
    }

    function handleUpdate(id, completed) {
        dispatch({ type: "updated", id, completed })
    }

    function handleAdd(taskContent) {
        dispatch(
            {
                type: "added",
                newTask: { id: crypto.randomUUID(), content: taskContent, completed: false }
            }

        )
    }

    return (
        <>
            <h1>Görevler Uygulaması</h1>
            <Form onAddNewTask={handleAdd} />
            <h2>Görev listesi</h2>

            <ul>
                {tasks.map((t) => {
                    return <TaskItem {...t} onDelete={handleDelete} onUpdate={handleUpdate} />
                }

                )}
            </ul>
        </>
    )
}


function Form({ onAddNewTask }) {
    const [inpTaskContent, setInpTaskContent] = useState("");

    function handleChange(e) {
        setInpTaskContent(e.target.value);

    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); onAddNewTask(inpTaskContent) }}>
            <input type="text" name="inpTaskContent" id="inpTaskContent" value={inpTaskContent} placeholder="Yeni bir görev ekleyin" onChange={handleChange} />
            <button>Ekle</button>
        </form>
    )
}




function TaskItem({ content, id, completed, onDelete, onUpdate }) {
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={(e) => { onUpdate(id, !completed) }} />
            {content}
            <button onClick={(e) => { onDelete(id) }}> sil </button>
        </li>
    )
}