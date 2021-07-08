import { CreateTaskType, ViewTaskType } from '../../types.d';
import {
  CREATE_TASK,
  DELETE_TASK,
  READ_TASKS,
  RESCHEDULE_TASK,
  UPDATE_TASK,
  UPDATE_TASK_STATUS,
} from './types';

export const getTasks = (type = '') => {
  const url = `tasks/${type}`;
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

export const updateTaskStatus = (formData: { status: string }, id: string) => {
  const url = `tasks/${id}/status`;
  return {
    type: UPDATE_TASK_STATUS,
    url,
    api: (apiClient: any) => apiClient.patch(url, formData),
  };
};

export const rescheduleTask = (formData: { date: moment.Moment }, id: string) => {
  const url = `tasks/${id}/reschedule`;
  return {
    type: RESCHEDULE_TASK,
    url,
    api: (apiClient: any) => apiClient.patch(url, formData),
  };
};
