import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import mySaga from '../saga'

const composeEnhancers =
   (process.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })) ||
   compose

const sagaMiddleware = createSagaMiddleware()

function configureStore() {
   const middlewares = [sagaMiddleware]
   const enhancers = applyMiddleware(...middlewares)
   const store = createStore(reducers, composeEnhancers(enhancers))
   sagaMiddleware.run(mySaga)

   return store
}

export default configureStore
