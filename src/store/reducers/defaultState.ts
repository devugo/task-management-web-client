import { EMPTY_STRING } from '../../constants/EMPTY_STRING';

const entityState = {
  data: [],
  count: 0,
};

export const DEFAULT_STATE = {
  loaders: [],
  auth: {
    accessToken: null,
    username: EMPTY_STRING,
    email: EMPTY_STRING,
    loggedIn: false,
  },
  projects: entityState,
  labels: entityState,
  tasks: { ...entityState, summary: null },
  priorities: entityState,
};
