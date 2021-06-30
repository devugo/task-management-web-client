export type ActionType = {
  IN_PROGRESS: string;
  SUCCESS: string;
  FAILURE: string;
};

export type SignupType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SigninType = {
  email: string;
  password: string;
};

export type ApiResponseType = { type: string; response: any };
export type AuthType = { accessToken: string; username: string; email: string; loggedIn: boolean };

export type ProjectType = {
  id?: string;
  title: string;
  description: string;
  color: string;
};

export type LabelType = {
  id?: string;
  title: string;
  color: string;
};

export type LevelType = {
  id?: string;
  title: string;
  color: string;
};

export type TaskType = {
  id?: string;
  title: string;
  description: string;
  labels: string[] | LabelType[];
  project: string | ProjectType;
  level: string | LevelType;
};

export type RootStateType = {
  loader: ApiResponseType[];
  auth: AuthType;
  projects: { data: ProjectType[]; count: number };
  labels: { data: LabelType[]; count: number };
  priorities: { data: LevelType[]; count: number };
};
