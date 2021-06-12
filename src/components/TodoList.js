import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react';  
import { addTodo, getTodos, checked, deleteTodo, editTodo } from './../store/todo-list/actions';
import { v4 as uuid } from 'uuid'



export default function TodoList() {
    const [edit, setEdit] = useState(null)
    const [editText, setEditText] = useState(null)
    const {todos} = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [todo, setTodo] = useState({
        id: uuid(),
        title: '', 
        completed: false
    })

    const [validateAlert, setValidateAlert] = useState([
        { isEmpty: false },
        { isEngValid: Boolean(todo.title.match('^[A-Za-z0-9]+$')) },
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
    const editInputHandler = (e) => {
        setEditText(prev => ({...prev, title: e.target.value}))
    }
    const editHandler = (id, todo) => {
        setEditText(todo)
        setEdit(id)
    }

    const submitEditing = (id) => {
        const editedArr = todos.map(item => {
            if (item.id === id) {
                return {...item, title: editText.title}
            } else {
                return item
            }
        })
        dispatch(editTodo(editedArr))
        localStorage.setItem('todos', JSON.stringify(editedArr))
        setEditText(null)
        setEdit(null)
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
                                edit={edit}
                                editText={editText}
                                setEditText={setEditText}
                                editInputHandler={editInputHandler}
                                submitEdit={submitEditing}
                            />
                    ))}
                </div>
                <div className='todo-counter'>
                    {todos?.length ? `TODO AMOUNT: ${todos.length}` : null}
                </div>
            </div>  
    )
}       