import './App.css'
import {store} from './store/index'
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux';
import swbackground from './media/Pixel-Art-Pixel-Jeff-Звездные-Войны-фэндомы-5845472.gif'


function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'
        style={
          {
            
          }
        }
      >
          <TodoList />
      </div>
    </Provider>
  );
}

export default App;
