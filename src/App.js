import './App.css'
import {store} from './store/index'
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
          <TodoList />
      </div>
    </Provider>
  );
}

export default App;
