import { ApiResponseType } from '../../types.d';
import { CREATE_PROJECT, READ_PROJECTS } from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.projects;

const projectReducer = (state = initialState, action: ApiResponseType) => {
  const { type, response } = action;

  switch (type) {
    case READ_PROJECTS.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: responseData, count: responseData.length };
    }
    case CREATE_PROJECT.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: [...state.data, responseData], count: state.count + 1 };
    }
    default: {
      return state;
    }
  }
};

export default projectReducer;
