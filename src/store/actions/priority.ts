import { READ_PRIORITIES } from './types';

export const getPriorities = () => {
  const url = 'levels';
  return {
    type: READ_PRIORITIES,
    url,
    api: (apiClient: any) => apiClient.get(url),
  };
};
