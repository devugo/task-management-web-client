import axios from 'axios';

import { ActionType } from '../../types.d';

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/',
  // headers: { Authorization: `Bearer ${'token'}` },
});

type ActionObject = {
  type: ActionType;
  api: (client: any) => {};
  url: string;
};

const apiMiddleware = (store: any) => (next: any) => async (action: ActionObject) => {
  const { api, type } = action;
  console.log(action);
  try {
    next({ type: type.IN_PROGRESS });
    await api(axiosClient);
    next({ type: type.SUCCESS });
  } catch (err) {
    // console.log(err.message);
    console.log(err.response);
    next({ type: type.FAILURE });
  }
  // console.log('customMiddleware', action);
  // console.log('store', store.getState());
  // console.log('next', next);
  // next({ name: 'mike', type: 'new' });
};

export default apiMiddleware;
