import { ApiResponseType } from '../../types.d';
import { READ_PRIORITIES } from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.priorities;

const priorityReducer = (state = initialState, action: ApiResponseType) => {
  const { type, response } = action;

  switch (type) {
    case READ_PRIORITIES.SUCCESS: {
      const responseData = response.data;
      return { ...state, data: responseData, count: responseData.length };
    }
    default: {
      return state;
    }
  }
};

export default priorityReducer;
