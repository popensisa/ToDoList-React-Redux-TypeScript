import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import { todoReducer } from './reducers/todoReducer'

export const store = createStore(todoReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof todoReducer>