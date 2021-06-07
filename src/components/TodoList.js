import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import AddTodo from './AddTodo';
import { useDispatch } from 'react-redux';
import { getTodos } from '../store/todo-list/actions';


export default function TodoList() {
    const {todos} = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()

    useEffect(() => {
       JSON.parse(localStorage.getItem('todos'))
        ? dispatch(
        getTodos(
            JSON.parse(localStorage.getItem('todos'))
                )
            )
        : localStorage.setItem('todos', JSON.stringify(todos))
    }, [])

    return (
        <div>
            <div>
                <AddTodo todos={todos}/>
            </div>
            {todos.map( (todo, index) => <TodoItem index={index} key={todo.id} todo={todo} />)}
            <div className='todo-counter'>
                {todos?.length ? `Todo amount ${todos.length}` : null}
            </div>
        </div>
        
    )
}       