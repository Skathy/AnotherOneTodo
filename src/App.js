import './App.css'
import {store} from './store/index'
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux';
import LofiSound from './components/LofiSound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Editer from './components/Editer';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='wrapper'>
          <Switch>
            <Route exact path='/'>
              <TodoList />
            </Route>
            <Route path='/edit'>
              <Editer />
            </Route>
            
            <LofiSound />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
