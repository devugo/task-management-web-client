import { SigninType } from '../../types.d';
import { SIGNIN_USER, SIGNUP_USER } from './types';

export const signup = (formData: { email: string; password: string; username: string }) => {
  const url = 'auth/signup';
  return {
    type: SIGNUP_USER,
    url,
    api: (apiClient: any) => apiClient.post(url, formData),
  };
};

export const signin = (formData: SigninType) => {
  const url = 'auth/signin';
  return {
    type: SIGNIN_USER,
    url,
    api: (apiClient: any) => apiClient.post(url, formData),
  };
};
