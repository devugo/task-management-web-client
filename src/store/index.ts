import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { middleware } from './middleware';
import testReducer from './reducers/test';

const store = createStore(testReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
