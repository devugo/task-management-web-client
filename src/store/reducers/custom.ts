import { ApiResponseType } from '../../types.d';
// import store from '..';
import { READ_STARTER_DATA } from '../actions/types';
// import { DEFAULT_STATE } from './defaultState';

const initialState = { labels: [], projects: [], levels: [] };

const customReducer = (state = initialState, action: ApiResponseType) => {
  const { type } = action;

  switch (type) {
    case READ_STARTER_DATA.SUCCESS: {
      // console.log('Switching....');
      // const responseData = response.data;
      // console.log(responseData);
      // store.dispatch({ type: READ_LABELS.SUCCESS, data: { data: responseData.labels } });
      // store.dispatch({
      //   type: READ_LABELS.SUCCESS,
      //   response: { ...state,
      //     labels: [data: responseData.labels, count: responseData.labels.length, loaded: true },
      // });
      return state;
      // return { ...state, data: responseData, count: responseData.length, loaded: true };
    }
    default: {
      return state;
    }
  }
};

export default customReducer;
