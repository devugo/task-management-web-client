import { ProjectType } from '../../types.d';
import { CREATE_PROJECT, READ_PROJECTS, UPDATE_PROJECT } from './types';

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

export const updateProject = (formData: ProjectType, id: string) => {
  const url = `projects/${id}`;
  return {
    type: UPDATE_PROJECT,
    url,
    api: (apiClient: any) => apiClient.patch(url, formData),
  };
};
