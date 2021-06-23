import { READ_PROJECTS } from './types';

export const getProjects = () => {
  const url = 'projects';
  return {
    type: READ_PROJECTS,
    url,
    api: (apiClient: any) => apiClient.get(url),
  };
};
