import './App.scss'
import {store} from './store'
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux';
import LofiSound from './components/LofiSound';


const App = ()  => {
  return (
    <Provider store={store}>
      <LofiSound />
      <div className='wrapper'>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
