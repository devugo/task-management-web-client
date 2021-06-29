import { TaskType } from '../../types.d';
import { CREATE_TASK, READ_TASKS } from './types';

export const getTasks = () => {
  const url = 'tasks';
  return {
    type: READ_TASKS,
    url,
    api: (apiClient: any) => apiClient.get(url),
  };
};

export const createTask = (formData: TaskType) => {
  const url = 'tasks';
  return {
    type: CREATE_TASK,
    url,
    api: (apiClient: any) => apiClient.post(url, formData),
  };
};
