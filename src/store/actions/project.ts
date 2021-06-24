import { ProjectType } from '../../types.d';
import { CREATE_PROJECT, READ_PROJECTS } from './types';

export const getProjects = () => {
  const url = 'projects';
  return {
    type: READ_PROJECTS,
    url,
    api: (apiClient: any) => apiClient.get(url),
  };
};

export const createProject = (formData: ProjectType) => {
  const url = 'projects';
  return {
    type: CREATE_PROJECT,
    url,
    api: (apiClient: any) => apiClient.post(url, formData),
  };
};
