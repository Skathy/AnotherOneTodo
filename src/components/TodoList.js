import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import AddTodo from './AddTodo';


export default function TodoList() {
    const {todos} = useSelector(state => state.todoReducer)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
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