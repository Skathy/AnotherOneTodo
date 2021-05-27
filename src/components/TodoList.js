import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'


export default function TodoList() {
    const {todos} = useSelector(state => state.todoReducer)

    return (
        <div>
            {todos.map( todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}       