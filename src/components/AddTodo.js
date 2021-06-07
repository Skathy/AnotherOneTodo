import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from './../store/todo-list/actions';



export default function AddTodo({todos}) {

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
            setCurrentId(prev => (prev + 1))
            setInputValue({title: ''})
        }
    }
    localStorage.setItem('todos', JSON.stringify(todos))
   
    const inputOnChangeHandler = (e) => {
        setAlert( prev => ({
            ...prev,
            isEngValid: Boolean(e.target.value.match('[A-Za-z0-9,. ]+')),
        }))
        setInputValue(prev => ({...prev, title: e.target.value}))
    }

    return (
        <div>
            <input
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
    )
}