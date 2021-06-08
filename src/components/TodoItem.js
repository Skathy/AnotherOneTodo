
export default function TodoItem({todo, index, deleteHandler, checkHandler}) {
    return(
        <div className='todo-wrapper'>
            <input className='form-check-input' type="checkbox" onChange={() => checkHandler(todo.id)} checked={todo.completed}/>
            <label className={todo.completed ? 'form-check-label' : ''} >
                <strong>{index+1}. </strong>{todo.title}
            </label>
            
            <button className='cancel-button' onClick={() => deleteHandler(todo.id)}>&times;</button>
        </div>
    )
}