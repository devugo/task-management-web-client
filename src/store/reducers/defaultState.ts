const entityState = {
  data: [],
  count: 0,
};

export const DEFAULT_STATE = {
  loaders: [],
  auth: {
    accessToken: null,
    username: '',
    email: '',
    loggedIn: false,
  },
  projects: entityState,
  labels: entityState,
  tasks: entityState,
  priorities: entityState,
};
