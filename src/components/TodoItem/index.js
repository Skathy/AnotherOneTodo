import React  from 'react'
import './styles.scss'

const TodoItem = ({todo, index, deleteHandler, checkHandler, editer, edit, editText, editInputHandler, submitEdit}) => {

    return(
        <div className='todo-item-wrapper'>
            <div className='todo-item'>
                <input className='form-check-input' type="checkbox" onChange={() => checkHandler(todo.id)} checked={todo.completed}/>
                <label className={todo.completed ? 'form-check-label' : ''} >
                    <strong>{index+1}. </strong>{todo.title}
                </label>
                <button className='edit-button' onClick={() => {editer(todo.id, todo)}}>Edit</button>
                <button className='cancel-button' onClick={() => deleteHandler(todo.id)}>&times;</button>
            </div>
            { edit === todo.id ? (
                <div className='todo-item'>
                    <input 
                        type="text"
                        onChange={e => editInputHandler(e)}
                        placeholder={editText.title}
                    />
                    <button className='edit-button' onClick={() => submitEdit(todo.id)}>Edit</button>
                </div>
            ) : null}
        </div>
    )
}

export default TodoItem