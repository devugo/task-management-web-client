import { ApiResponseType } from '../../types.d';
import { CREATE_LABEL, READ_LABELS } from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.labels;

const labelReducer = (state = initialState, action: ApiResponseType) => {
  const { type, response } = action;

  switch (type) {
    case READ_LABELS.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: responseData, count: responseData.length };
    }
    case CREATE_LABEL.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: [...state.data, responseData], count: state.count + 1 };
    }
    default: {
      return state;
    }
  }
};

export default labelReducer;
