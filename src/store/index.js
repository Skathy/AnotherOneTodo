import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import { createLogger} from 'redux-logger'


export const store = createStore(rootReducer,
                    applyMiddleware(createLogger()))

