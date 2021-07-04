import { ApiResponseType, ViewTaskType } from '../../types.d';
import { CREATE_TASK, READ_TASKS, UPDATE_TASK } from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.tasks;

const taskReducer = (state = initialState, action: ApiResponseType) => {
  const { type, response } = action;
  const currentState = { ...state };

  switch (type) {
    case READ_TASKS.SUCCESS: {
      const responseData = response.data;
      return { ...currentState, data: responseData, count: responseData.length };
    }
    case CREATE_TASK.SUCCESS: {
      const responseData = response.data;
      return { ...currentState, data: [responseData, ...state.data], count: state.count + 1 };
    }
    case UPDATE_TASK.SUCCESS: {
      const responseData = response.data;
      const data: ViewTaskType[] = currentState.data;
      const updatedIndex = data.findIndex((data) => data.id === responseData.id);
      console.log(updatedIndex);
      if (updatedIndex > -1) {
        data[updatedIndex] = responseData;
      }
      return { ...currentState, data };
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;
