import { deleteHelper } from '../../helpers/functions/deleteHelper';
import { ApiResponseType, ProjectType } from '../../types.d';
import { CREATE_PROJECT, DELETE_PROJECT, READ_PROJECTS, UPDATE_PROJECT } from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.projects;

const projectReducer = (state = initialState, action: ApiResponseType) => {
  const { type, response } = action;
  const currentState = { ...state };

  switch (type) {
    case READ_PROJECTS.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: responseData, count: responseData.length, loaded: true };
    }
    case CREATE_PROJECT.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: [...state.data, responseData], count: state.count + 1 };
    }
    case UPDATE_PROJECT.SUCCESS: {
      const responseData = response.data;
      const data: ProjectType[] = currentState.data;
      const updatedIndex = data.findIndex((data) => data.id === responseData.id);
      if (updatedIndex > -1) {
        data[updatedIndex] = responseData;
      }
      return { ...currentState, data };
    }
    case DELETE_PROJECT.SUCCESS: {
      const filteredData = deleteHelper(currentState.data);
      if (filteredData) {
        return { ...currentState, data: filteredData, count: currentState.count - 1 };
      }
      return currentState;
    }
    default: {
      return state;
    }
  }
};

export default projectReducer;
