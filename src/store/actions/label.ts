import { LabelType } from '../../types.d';
import { CREATE_LABEL, READ_LABELS } from './types';

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
