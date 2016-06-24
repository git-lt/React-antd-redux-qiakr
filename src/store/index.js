import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from './middlewares/promiseMiddleware'
import afterApiMiddleware from './middlewares/afterApiMiddleware'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import { routerReducer,routerMiddleware } from 'react-router-redux'

import reducers from './reducers'

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
})

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']}),
  afterApiMiddleware,
  loggerMiddleware,
  routerMiddleware(browserHistory)
)(createStore);


export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
