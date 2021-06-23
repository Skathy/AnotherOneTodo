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
                <button className='edit-button' onClick={() => {editer(todo.id, todo)}}></button>
                <button className='cancel-button' onClick={() => deleteHandler(todo.id)}></button>  {/*&times;*/}
            </div>
            { edit === todo.id ? (
                <div className='edit-field'>
                    <input
                        className='edit-input' 
                        type="text"
                        onChange={e => editInputHandler(e)}
                        value={editText.title}
                    />
                    <button className='edit-submit' onClick={() => submitEdit(todo.id)}></button>
                </div>
            ) : null}
        </div>
    )
}

export default TodoItem