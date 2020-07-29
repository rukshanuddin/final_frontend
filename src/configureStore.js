
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import thunk from "redux-thunk";
import history from './history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), 
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), thunk
      ),
    ),
  )

  return store
}