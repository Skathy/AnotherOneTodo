import './App.css'
import {store} from './store/index'
import TodoList from "./components/TodoList";
import AddTodo from './components/AddTodo';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
          <AddTodo />
          <TodoList />
      </div>
    </Provider>
  );
}

export default App;
