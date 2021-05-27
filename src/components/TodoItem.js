import { useDispatch } from 'react-redux';
import { checked, deleteTodo } from '../store/todo-list/actions';
import { useState } from 'react';

export default function TodoItem({todo, index}) {
    const [complete, setComplete] = useState(false)
    const dispatch = useDispatch()


    function deleteHandler() {
        dispatch(deleteTodo(todo))
    }
    function checkHandler() {
        setComplete(!complete)
    }

    
    return(
        <div>
            <input type="checkbox" onChange={checkHandler} checked={complete}/>
            <strong>{index+1}   </strong>
            {todo.title}
            
            <button onClick={deleteHandler}>x</button>
        </div>
    )
}