import './App.css'
import {store} from './store/index'
import TodoList from "./components/TodoList";
import AddTodo from './components/AddTodo';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <div>
          <AddTodo />
          <TodoList />
          {/* {console.log(store.getState())} */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
