import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/todo-list/actions';

export default function TodoItem({todo}) {
    const dispatch = useDispatch()
    function deleteHandler() {
        dispatch(deleteTodo(todo))
    }
    return(
        <div>
            <input type="checkbox" checked={todo.status}/>
            {todo.title}
            <button onClick={deleteHandler}>x</button>
        </div>
    )
}