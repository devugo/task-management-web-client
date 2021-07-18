import { deleteHelper } from '../../helpers/functions/deleteHelper';
import { ApiResponseType, ViewTaskType } from '../../types.d';
import {
  CREATE_TASK,
  DELETE_TASK,
  READ_TASKS,
  RESCHEDULE_TASK,
  UPDATE_TASK,
  UPDATE_TASK_STATUS,
} from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.tasks;

const taskReducer = (state = initialState, action: ApiResponseType) => {
  const { type, response } = action;
  const currentState = { ...state };

  switch (type) {
    case READ_TASKS.SUCCESS: {
      const responseData = response.data.tasks;
      const responseCount = response.data.count;
      return { ...currentState, data: responseData, count: responseCount };
    }
    case CREATE_TASK.SUCCESS: {
      const responseData = response.data;
      return { ...currentState, data: [responseData, ...state.data], count: state.count + 1 };
    }
    case UPDATE_TASK.SUCCESS: {
      const responseData = response.data;
      const data: ViewTaskType[] = currentState.data;
      const updatedIndex = data.findIndex((data) => data.id === responseData.id);
      if (updatedIndex > -1) {
        data[updatedIndex] = responseData;
      }
      return { ...currentState, data };
    }
    case DELETE_TASK.SUCCESS: {
      const filteredData = deleteHelper(currentState.data);
      if (filteredData) {
        return { ...currentState, data: filteredData, count: currentState.count - 1 };
      }
      return currentState;
    }
    case UPDATE_TASK_STATUS.SUCCESS: {
      const responseData = response.data;
      const data: ViewTaskType[] = currentState.data;
      const updatedIndex = data.findIndex((data) => data.id === responseData.id);
      if (updatedIndex > -1) {
        data[updatedIndex] = responseData;
      }
      return { ...currentState, data };
    }

    case RESCHEDULE_TASK.SUCCESS: {
      const responseData = response.data;
      const data: ViewTaskType[] = currentState.data;
      const updatedIndex = data.findIndex((data) => data.id === responseData.id);
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
