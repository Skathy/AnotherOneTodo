import { useDispatch } from 'react-redux';
import { checked, deleteTodo } from '../store/todo-list/actions';

export default function TodoItem({todo, index}) {
    const dispatch = useDispatch()

    function deleteHandler() {
        dispatch(deleteTodo(todo))
    }
    function checkHandler() {
        dispatch(checked(todo.id))
    }

    
    return(
        <div>
            <input type="checkbox" onChange={checkHandler} checked={todo.complete}/>
            <strong>{index+1}   </strong>
            {todo.title}
            
            <button onClick={deleteHandler}>x</button>
        </div>
    )
}