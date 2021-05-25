export default function TodoItem({todo}) {
    return(
        <div>
            <input type="checkbox" checked={todo.status}/>
            {todo.title}
            <button>x</button>
        </div>
    )
}