import { useHistory } from 'react-router';

export default function TodoItem({todo, index, deleteHandler, checkHandler, editer}) {
    const history = useHistory()
    return(
        <div className='todo-item'>
            <input className='form-check-input' type="checkbox" onChange={() => checkHandler(todo.id)} checked={todo.completed}/>
            <label className={todo.completed ? 'form-check-label' : ''} >
                <strong>{index+1}. </strong>{todo.title}
            </label>
            <button className='edit-button' onClick={() => {editer(todo.id)}}>Edit</button>
            <button className='cancel-button' onClick={() => deleteHandler(todo.id)}>&times;</button>
        </div>
    )
}