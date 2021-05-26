import TodoItem from './TodoItem'
import {store} from '../store/index'
import { useSelector } from 'react'

// const todos = [
//     {id: 1, title: 'task1', status: false},
//     {id: 2, title: 'task2', status: false},
//     {id: 3, title: 'task3', status: false},
//     {id: 4, title: 'task4', status: false},
// ]

export default function TodoList() {
    const todos = useSelector(state => state.todos)

    return (
        <div>
            {todos.map( todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}       