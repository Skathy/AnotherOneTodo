import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from './../store/todo-list/actions';



export default function AddTodo() {
    const [inputValue, setInputValue] = useState({id: 0,title: '', completed: false})
    const dispatch = useDispatch()

   function addTodoHandler() {
       dispatch(addTodo({
           id: inputValue.id,
           title: inputValue.title,
           completed: false
       }))
       setInputValue({id: 1, title: '', completed: false})
   }

    return (
        <div>
            <input
            value={inputValue.title} 
            placeholder='add todo..'
            onChange={e => setInputValue(prev => ({...prev.title, title: e.target.value}))}
             type="text" />
            <button onClick={addTodoHandler}>add todo</button>
        </div>
    )
}