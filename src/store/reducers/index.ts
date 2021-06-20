import { combineReducers } from 'redux';

import loaderReducer from './loader';

export const reducer = combineReducers({
  loader: loaderReducer,
});
