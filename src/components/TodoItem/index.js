import React  from 'react'
import './styles.scss'
import CustomInput from '../customInput'
import CustomCheckbox from './../customCheckbox';

const TodoItem = ({todo, index, deleteHandler, checkHandler, editer, edit, editText, editInputHandler, submitEdit}) => {


    return(
        <div className='todo-item-wrapper'>
            <div className='todo-item'>
                <CustomCheckbox
                    className='form-input-checkbox'
                    onChange={() => checkHandler(todo.id)}
                    checked={todo.completed} 
                />  
                <label className={todo.completed ? 'form-check-label' : 'form-label'} >
                    <strong>{index+1}. </strong>{todo.title}
                </label>
                <button className='edit-button' onClick={() => {editer(todo.id, todo)}}></button>
                <button className='cancel-button' onClick={() => deleteHandler(todo.id)}></button>
            </div>
            { edit === todo.id ? (
                <div className='edit-field'>
                    <CustomInput
                        className='edit-input'
                        type='text'
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