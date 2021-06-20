import { saveToStorage } from '../../helpers/functions/localStorage';
import { SIGNIN_USER } from '../actions/types';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.auth;

const authReducer = (state = initialState, action: { type: string; response: any }) => {
  const { type, response } = action;

  switch (type) {
    case SIGNIN_USER.SUCCESS: {
      const responseData = response.data;
      saveToStorage('token', responseData.accessToken);
      return responseData;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
