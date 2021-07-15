import { LabelType } from '../../types.d';
import { CREATE_LABEL, READ_LABELS, UPDATE_LABEL } from './types';

export const getLabels = () => {
  const url = 'labels';
  return {
    type: READ_LABELS,
    url,
    api: (apiClient: any) => apiClient.get(url),
  };
};

export const createLabel = (formData: LabelType) => {
  const url = 'labels';
  return {
    type: CREATE_LABEL,
    url,
    api: (apiClient: any) => apiClient.post(url, formData),
  };
};

export const updateLabel = (formData: LabelType, id: string) => {
  const url = `labels/${id}`;
  return {
    type: UPDATE_LABEL,
    url,
    api: (apiClient: any) => apiClient.patch(url, formData),
  };
};
