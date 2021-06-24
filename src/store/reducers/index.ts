import { combineReducers } from 'redux';

import authReducer from './auth';
import loaderReducer from './loader';
import projectReducer from './project';

export const reducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  projects: projectReducer,
});
