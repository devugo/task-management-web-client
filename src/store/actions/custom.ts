import { READ_STARTER_DATA } from './types';

export const getStarterData = () => {
  const url = 'custom/starter-data';
  return {
    type: READ_STARTER_DATA,
    url,
    api: (apiClient: any) => apiClient.get(url),
  };
};
