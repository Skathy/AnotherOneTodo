import TodoItem from '../TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react';  
import { addTodo, getTodos, checked, deleteTodo, editTodo } from '../../store/todo-list/actions';
import CustomInput from '../customInput';
import { v4 as uuid } from 'uuid'
import './styles.scss'



const TodoList = () => {
    const [edit, setEdit] = useState(null)
    const [editText, setEditText] = useState(null)
    const [errId, setErrId] = useState(null)
    const {todos} = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [todo, setTodo] = useState({
        id: uuid(),
        title: '', 
        completed: false
    })

    const [validateAlert, setValidateAlert] = useState([
        { isEmpty: false },
        { isEngValid: false },
    ])
    const errors = {
        isEmpty: 'todo can not be an empty str',
        isEngValid: 'SLISH! PO ANGLISKY GOVORI!',
    }

    const displayAlert = () => {

        const triggeredAlerts = validateAlert.filter(
            (item) => item[Object.keys(item)] === true
        )

        const displayedAlerts = triggeredAlerts.filter(
            item => Object.keys(item) == Object.keys(errors)[errId]
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
        if (displayAlert() == false ) {
            setTodo(prev => ({...prev, id: uuid()}))
            dispatch(addTodo(todo))
            localStorage.setItem('todos', JSON.stringify([...todos, todo]))
            setTodo(prev => ({...prev, title: ''}))
        } else {
            setErrId(null)
            setTodo(prev => ({...prev, title: ''}))
        }
    }

    const inputOnChangeHandler = (e) => {
        if (e.target.value.trim() === '') {
            setValidateAlert([{isEmpty: true}])
            setErrId(0)
            setTodo((prev) => ({...prev, title: e.target.value}))
        } else if (e.target.value.match('^[a-zA-Z0-9 ,.!?`;:\'\"\|]*$')){
            setValidateAlert([{isEmpty: false}, {isEngValid: false}])
            setTodo((prev) => ({...prev, title: e.target.value}))
        } else {
            setValidateAlert([{isEngValid: true}])
            setErrId(1)
            setTodo((prev) => ({...prev, title: e.target.value}))
        }
    }
    const editInputHandler = (e) => {
        if (e.target.value.trim() === '') {
            setValidateAlert([{isEmpty: true}])
            setErrId(0)
            setEditText(prev => ({...prev, title: e.target.value}))
        } else if (e.target.value.match('^[a-zA-Z0-9 ,.!?`;:\'\"\|]*$')) {
            setValidateAlert([{isEmpty: false}, {isEngValid: false}])
            setEditText(prev => ({...prev, title: e.target.value}))
        } else {
            setValidateAlert([{isEngValid: true}])
            setErrId(1)
            setEditText((prev) => ({...prev, title: e.target.value}))
        }
    }
    const editHandler = (id, todo) => {
        setEditText(todo)
        setEdit(id)
    }

    const submitEditing = (id) => {
        if ( displayAlert() == false ) {
                const editedArr = todos.map(item => {
                    if (item.id === id) {
                        return {...item, title: editText.title}
                    } else {
                        return item
                    }
                })
                dispatch(editTodo(editedArr))
                localStorage.setItem('todos', JSON.stringify(editedArr))
                setEditText('')
                setEdit(null)
        } else {
            // console.log(editText)
            setEditText('')
        }
    }

    return (
            <div>
                <div className='input-wrapper'>
                    <CustomInput
                        className='input'
                        value={todo.title} 
                        placeholder=' ADD TODO..'
                        onChange={e => inputOnChangeHandler(e)}
                        type="text"
                    />
                    <button className='button-input' type='button' onClick={addTodoHandler}>ADD</button>

                </div>
                <div className='todo-wrapper'>
                { displayAlert().length? displayAlert().map( (alert, index) => (
                    <div className='alert' key={index}>{alert}</div>
                )): null}
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
                                displayAlert={displayAlert}
                            />
                    ))}
                </div>
                <div className='todo-counter'>
                    {todos?.length ? `TODO AMOUNT: ${todos.length}` : null}
                </div>
            </div>  
    )
}

export default TodoList