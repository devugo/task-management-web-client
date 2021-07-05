import { CreateTaskType, ViewTaskType } from '../../types.d';
import { CREATE_TASK, DELETE_TASK, READ_TASKS, UPDATE_TASK } from './types';

export const getTasks = () => {
  const url = 'tasks';
  return {
    type: READ_TASKS,
    url,
    api: (apiClient: any) => apiClient.get(url),
  };
};

export const createTask = (formData: CreateTaskType) => {
  const url = 'tasks';
  return {
    type: CREATE_TASK,
    url,
    api: (apiClient: any) => apiClient.post(url, formData),
  };
};

export const updateTask = (formData: ViewTaskType, id: string) => {
  const url = `tasks/${id}`;
  return {
    type: UPDATE_TASK,
    url,
    api: (apiClient: any) => apiClient.patch(url, formData),
  };
};

export const deleteTask = (id: string) => {
  const url = `tasks/${id}`;
  return {
    type: DELETE_TASK,
    url,
    api: (apiClient: any) => apiClient.delete(url),
  };
};
