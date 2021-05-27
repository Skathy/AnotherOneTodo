import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from './../store/todo-list/actions';



export default function AddTodo() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

   function addTodoHandler() {
       dispatch(addTodo({
           title: inputValue
       }))
       setInputValue('')
   }

    return (
        <div>
            <input
            value={inputValue} 
            placeholder='add todo..'
            onChange={e => setInputValue(e.target.value)}
             type="text" />
            <button onClick={addTodoHandler}>add todo</button>
        </div>
    )
}