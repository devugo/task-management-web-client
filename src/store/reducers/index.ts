import { combineReducers } from 'redux';

import authReducer from './auth';
import labelReducer from './label';
import loaderReducer from './loader';
import priorityReducer from './priority';
import projectReducer from './project';
import taskReducer from './task';

export const reducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  projects: projectReducer,
  labels: labelReducer,
  tasks: taskReducer,
  priorities: priorityReducer,
});
