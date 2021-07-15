import { ApiResponseType, LabelType } from '../../types.d';
import { CREATE_LABEL, READ_LABELS, UPDATE_LABEL } from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.labels;

const labelReducer = (state = initialState, action: ApiResponseType) => {
  const { type, response } = action;
  const currentState = { ...state };

  switch (type) {
    case READ_LABELS.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: responseData, count: responseData.length };
    }
    case CREATE_LABEL.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: [...state.data, responseData], count: state.count + 1 };
    }
    case UPDATE_LABEL.SUCCESS: {
      const responseData = response.data;
      const data: LabelType[] = currentState.data;
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

export default labelReducer;
