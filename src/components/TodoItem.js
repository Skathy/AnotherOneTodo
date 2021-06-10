
import { Link } from 'react-router-dom';
export default function TodoItem({todo, index, deleteHandler, checkHandler, editHandler}) {
    return(
        <div className='todo-item'>
            <input className='form-check-input' type="checkbox" onChange={() => checkHandler(todo.id)} checked={todo.completed}/>
            <label className={todo.completed ? 'form-check-label' : ''} >
                <strong>{index+1}. </strong>{todo.title}
            </label>
            {/* <button className='edit-button' onClick={() => editHandler()}>Edit</button> */}
            <Link to='/edit'>Edit</Link>
            <button className='cancel-button' onClick={() => deleteHandler(todo.id)}>&times;</button>
        </div>
    )
}