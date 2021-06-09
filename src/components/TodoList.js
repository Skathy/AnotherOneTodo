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

    const [validateAlert, setValidateAlert] = useState([
        { isEmpty: false },
        // { isEngValid: Boolean(todo.text.match('^[A-Za-z0-9]+$')) },
    ])
    const errors = {
        isEngValid: 'sry no habla espaniola! Eng only!',
        isEmpty: 'todo can not be an empty str',
    }

    const displayAlert = () => {
        const triggeredAlerts = validateAlert.filter(
            item => item[Object.keys(item)[1]] === true
        )

        const displayedAlerts = triggeredAlerts.filter(
            item => Object.keys(item)[1] === Object.keys(errors)[0]
        )

        return displayedAlerts.map( item => errors[Object.keys(item)])
    }

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('todos'))) {
            localStorage.setItem('todos', '[]')
        }
        dispatch(getTodos(JSON.parse(localStorage.getItem('todos'))))
    }, [])
    

    const deleteHandler = (id) => {
        const filteredArr = todos.filter( item => item.id !== id)
        dispatch(deleteTodo(filteredArr))
        localStorage.setItem('todos', JSON.stringify(filteredArr))
    }
    
    const checkHandler = (id) => {
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
        if (todo.title.trim() !== '' && displayAlert() == false) {
            setTodo(prev => ({...prev, id: uuid()}))
            dispatch(addTodo(todo))
            localStorage.setItem('todos', JSON.stringify([...todos, todo]))
            setTodo(prev => ({...prev, title: ''}))
        }    
    }

    const inputOnChangeHandler = (e) => {
        if (e.target.value === '') {
            setValidateAlert( prev => [...prev, {isEmpty: true}])
            setTodo((prev) => ({...prev, title: e.target.value}))
        } else {
            setTodo((prev) => ({...prev, title: e.target.value}))
            setValidateAlert( prev => [...prev, {isEmpty: true}])
        }
    }

    

    return (
        <div>
            <div className='input-wrapper'>
                <input
                    className='input'
                    value={todo.title} 
                    placeholder='add todo..'
                    onChange={e => inputOnChangeHandler(e)}
                    type="text"
                    />
                <button className='button' type='button' onClick={addTodoHandler}>add todo</button>
            </div>
            <div>
                {displayAlert().map(alert => (
                    <div>{alert}</div>
                ))}
            </div>
            <div>
                {todos.map( (todo, index) => (
                    <div key={index}>
                        <TodoItem 
                            index={index} 
                            todo={todo}
                            deleteHandler={deleteHandler}
                            checkHandler={checkHandler} 
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