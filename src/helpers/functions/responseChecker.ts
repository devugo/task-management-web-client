import { ApiResponseType } from '../../types.d';

export const successCreation = (data: ApiResponseType): boolean => {
  return data?.response?.status === 201;
};
