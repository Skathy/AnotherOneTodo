import './App.scss'
import {store} from './store'
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux';
import LofiSound from './components/LofiSound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = ()  => {
  return (
    <Provider store={store}>
      <LofiSound />
      <Router>
        <Switch>
          <Route path='/'>
            <div className='wrapper'>
                  <TodoList />
            </div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
