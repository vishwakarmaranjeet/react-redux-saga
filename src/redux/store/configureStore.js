import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas/configure-saga';
const sagaMiddleware = createSagaMiddleware();

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('[Middleware Dispatching]', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState())
            return result;
        };
    };
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const middleware = [sagaMiddleware];
  const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(logger, ...middleware)));
  //sagaMiddleware.run();
  // return createStore(
  //   rootReducer,
  //   initialState,
  //   composeEnhancer(applyMiddleware(logger, ...middleware))
  // );
  sagaMiddleware.run(rootSaga);
  return store;
}