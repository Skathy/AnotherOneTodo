import './App.css'
import {store} from './store/index'
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux';
import LofiSound from './components/LofiSound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Editer from './components/Editer';


function App() {
  return (
    <Provider store={store}>
      {/* <LofiSound /> */}
      <Router>
        <Switch>
          <Route path='/'>
            <div className='wrapper'>
                  <TodoList />
                  {/* <Editer /> */}
            </div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
