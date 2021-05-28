import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from './../store/todo-list/actions';



export default function AddTodo() {
    const [currentId, setCurrentId] = useState(1)
    const [inputValue, setInputValue] = useState({id: 0,title: '', completed: false})
    const dispatch = useDispatch()

   function addTodoHandler() {
       if (inputValue.title !== '') {
           if (inputValue.title.match("[A-Za-z0-9,. ]+")) {
                dispatch(addTodo({
                    id: currentId,
                    title: inputValue.title,
                    complete: false
                }))
                setCurrentId(currentId + 1)
                setInputValue({title: ''})
           } else {
               alert('sry, only english is allowed')
           }     
       } else {
           alert('todo can`t be an empty string or foreign words')
       }
       
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