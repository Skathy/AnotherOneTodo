import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import { createLogger} from 'redux-logger'

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : []

export const store = createStore(rootReducer, persistedState,
                    applyMiddleware(createLogger()))

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})