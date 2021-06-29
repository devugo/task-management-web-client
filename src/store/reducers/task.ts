import { ApiResponseType } from '../../types.d';
import { CREATE_TASK, READ_TASKS } from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.tasks;

const taskReducer = (state = initialState, action: ApiResponseType) => {
  const { type, response } = action;

  switch (type) {
    case READ_TASKS.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: responseData, count: responseData.length };
    }
    case CREATE_TASK.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: [responseData, ...state.data], count: state.count + 1 };
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;
