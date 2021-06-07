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
        <div className='todo-wrapper'>
            <input className='form-check-input' type="checkbox" onChange={checkHandler} checked={todo.complete}/>
            <label className={todo.complete ? 'form-check-label' : ''} >
                <strong>{index+1}. </strong>{todo.title}
            </label>
            
            <button className='cancel-button' onClick={deleteHandler}>&times;</button>
        </div>
    )
}