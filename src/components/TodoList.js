import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react';  
import { addTodo, getTodos } from './../store/todo-list/actions';



export default function TodoList() {
    const {todos} = useSelector(state => state.todoReducer)

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('todos'))) {
            localStorage.setItem('todos', [])
        }
        dispatch(getTodos(JSON.parse(localStorage.getItem('todos'))))
    }, [])


    const [currentId, setCurrentId] = useState(1)
    const [inputValue, setInputValue] = useState({
        id: 0,
        title: '', 
        completed: false
    })
    const dispatch = useDispatch()

    const [alert, setAlert] = useState({
        isEngValid: Boolean(inputValue.title.match('[A-Za-z0-9,. ]+')),
    })

    const errors = {
        isEngValid: 'sry no habla espaniola! Eng only!'
    }

    const addTodoHandler = () => {
        if (alert.isEngValid) {
            dispatch(
                addTodo({
                    id: currentId,
                    title: inputValue.title,
                    complete: false
                })
            )
            localStorage.setItem('todos',JSON.stringify( todos))
            setCurrentId(prev => prev + 1)
            setInputValue({title: ''})
        }
    }
   
    const inputOnChangeHandler = (e) => {
        setAlert( prev => ({
            ...prev,
            isEngValid: Boolean(e.target.value.match('[A-Za-z0-9,. ]+')),
        }))
        setInputValue(prev => ({...prev, title: e.target.value}))
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
            {todos.map( (todo, index) => (
                <TodoItem 
                    index={index} 
                    key={todo.id} 
                    todo={todo} 
                />)
            )}
            <div className='todo-counter'>
                {todos?.length ? `Todo amount ${todos.length}` : null}
            </div>
        </div>
        
    )
}       