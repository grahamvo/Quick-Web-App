import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

export default function configureStore() {
    const store = createStoreWithMiddleware(reducers);

    return store;
}
