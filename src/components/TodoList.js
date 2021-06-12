import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react';  
import { addTodo, getTodos, checked, deleteTodo } from './../store/todo-list/actions';
import { v4 as uuid } from 'uuid'



export default function TodoList() {
    const {todos} = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [todo, setTodo] = useState({
        id: uuid(),
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
        isEngValid: Boolean(todo.title.match('[A-Za-z0-9,. ]+')),
    })
    const errors = {
        isEngValid: 'sry no habla espaniola! Eng only!'
    }

    const deleteHandler = (id) => {
        const filteredArr = todos.filter( item => item.id !== id)
        dispatch(deleteTodo(filteredArr))
        localStorage.setItem('todos', JSON.stringify(filteredArr))
    }
    
    function checkHandler(id) {
        const checkedArr = todos.map( item => {
            if (item.id === id) {
               return {...item, completed: !item.completed}
            } else {
                return item
            } 
        })
        dispatch(checked(checkedArr))
        localStorage.setItem('todos', JSON.stringify(checkedArr))
    }

    const addTodoHandler = () => {
        if (todo.title.trim() !== '') {
            setTodo(prev => ({...prev, id: uuid()}))
            dispatch(addTodo(todo))
            localStorage.setItem('todos', JSON.stringify([...todos, todo]))
            setTodo(prev => ({...prev, title: ''}))
        }    
    }

    const inputOnChangeHandler = (e) => {
            setTodo((prev) => ({...prev, title: e.target.value}))
    }
    const editHandler = (id) => {
        const editedArr = todos.map( item => {
            if (item.id === id) {
               return {...item, title: todo.title}
            } else {
                return item
            } 
        })
        dispatch(checked(editedArr))
        localStorage.setItem('todos', JSON.stringify(editedArr))
        setTodo(prev => ({...prev, title: ''}))
    }

    return (
            <div>
                <div className='input-wrapper'>
                    <input
                        className='input'
                        value={todo.title} 
                        placeholder='ADD TODO..'
                        onChange={e => inputOnChangeHandler(e)}
                        type="text"
                        />
                    <button className='button-input' type='button' onClick={addTodoHandler}>ADD</button>
                    {!alert.isEngValid ? (
                        <div>
                            {Object.keys( errors) === Object.keys(alert) ? null : null} 
                        </div>
                    ) : null}
                </div>
                <div className='todo-wrapper'>
                    {todos.map( (todo, index) => (
                            <TodoItem
                                key={index} 
                                index={index} 
                                todo={todo}
                                deleteHandler={deleteHandler}
                                checkHandler={checkHandler}
                                editer={editHandler}
                            />
                    ))}
                </div>
                <div className='todo-counter'>
                    {todos?.length ? `TODO AMOUNT: ${todos.length}` : null}
                </div>
            </div>  
    )
}       