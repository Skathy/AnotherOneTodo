import './App.css'

import TodoList from "./components/TodoList";
import AddTodo from './components/AddTodo';
import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'

// const store = createStore(rootReducer)

function App() {
  return (
    <div className='wrapper'>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
