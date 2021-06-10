import './App.css'
import {store} from './store/index'
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux';
import LofiSound from './components/LofiSound';


function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
          <LofiSound />
          <TodoList />
      </div>
    </Provider>
  );
}

export default App;
