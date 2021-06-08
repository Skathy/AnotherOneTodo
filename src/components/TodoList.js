import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react';  
import { addTodo, getTodos } from './../store/todo-list/actions';
import { v4 as uuid} from 'uuid'


export default function TodoList() {
    const {todos} = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState({
        id: '',
        title: '', 
        completed: false
    })

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('todos'))) {
            localStorage.setItem('todos', '[]')
        }
        dispatch(getTodos(JSON.parse(localStorage.getItem('todos'))))
    }, [])


    const [alert, setAlert] = useState({
        isEngValid: Boolean(inputValue.title.match('[A-Za-z0-9,. ]+')),
    })
    const errors = {
        isEngValid: 'sry no habla espaniola! Eng only!'
    }


    const addTodoHandler = () => {
        if (inputValue.title.trim() !== '' && alert.isEngValid) {
            dispatch(addTodo(inputValue))
            localStorage.setItem('todos', JSON.stringify([...todos, inputValue]))
            setInputValue({title: ''})
        }    
    }
   
    const inputOnChangeHandler = (e) => {
        setAlert( prev => ({
            ...prev,
            isEngValid: Boolean(e.target.value.match('[A-Za-z0-9,. ]+')),
        }))
        setInputValue(prev => ({...prev, id: uuid(), title: e.target.value}))
    }


    

    return (
        <div>
            <div className='input-wrapper'>
                <input
                    className='input'
                    value={inputValue.title} 
                    placeholder='add todo..'
                    onChange={e => inputOnChangeHandler(e)}
                    type="text"
                    />
                <button className='button' type='button' onClick={addTodoHandler}>add todo</button>
                {!alert.isEngValid ? (
                    <div>
                        {Object.keys( errors) === Object.keys(alert) ? null : null} 
                    </div>
                ) : null}
            </div>
            <div>
                {todos.map( (todo, index) => (
                    <div key={index}>
                        <TodoItem 
                            index={index} 
                            todo={todo} 
                        />
                    </div>
                ))}
            </div>
            <div className='todo-counter'>
                {todos?.length ? `Todo amount ${todos.length}` : null}
            </div>
        </div>
        
    )
}       