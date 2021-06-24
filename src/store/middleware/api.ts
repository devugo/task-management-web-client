import axios from 'axios';

import { retrieveFromStorage } from '../../helpers/functions/localStorage';
import { ActionType } from '../../types.d';

type ActionObject = {
  type: ActionType;
  api: (client: any) => {};
  url: string;
};

const apiMiddleware = (store: any) => (next: any) => async (action: ActionObject) => {
  const GET_TOKEN = retrieveFromStorage('token');

  const axiosClient: any = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: { Authorization: `Bearer ${GET_TOKEN}` },
  });
  const { api, type } = action;
  next({ type: type.IN_PROGRESS, response: null });

  const promise = api(axiosClient) as any;
  promise
    .then((response: any) => {
      next({ type: type.SUCCESS, response: response });
    })
    .catch((error: any) => {
      next({ type: type.FAILURE, response: error.response });
    });
};

export default apiMiddleware;
