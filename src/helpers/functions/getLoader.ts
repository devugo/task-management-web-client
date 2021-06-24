import { ActionType, LoaderType } from '../../types.d';

export const getLoader = (loader: LoaderType[], api: ActionType) => {
  const successData = loader.find((x) => x.type === api.SUCCESS) as LoaderType;
  const errorData = loader.find((x) => x.type === api.FAILURE) as LoaderType;
  const progressData = loader.find((x) => x.type === api.IN_PROGRESS) as LoaderType;

  return { successData, errorData, progressData };
};
