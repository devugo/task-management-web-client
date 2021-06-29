import { ACTION_NAME } from '../../constants/ACTION_NAME';
import { ACTION_STATUS } from '../../constants/ACTION_STATUS';
import { ActionType } from '../../types.d';

const compose = (action: string): ActionType => {
  return {
    IN_PROGRESS: `${ACTION_STATUS.IN_PROGRESS}@${action}`,
    SUCCESS: `${ACTION_STATUS.SUCCESS}@${action}`,
    FAILURE: `${ACTION_STATUS.FAILURE}@${action}`,
  };
};

const SIGNUP_USER = compose(ACTION_NAME.SIGNUP_USER);
const SIGNIN_USER = compose(ACTION_NAME.SIGNIN_USER);
const KEEP_AUTH_USER = compose(ACTION_NAME.KEEP_AUTH_USER);

const READ_PROJECTS = compose(ACTION_NAME.READ_PROJECTS);
const CREATE_PROJECT = compose(ACTION_NAME.CREATE_PROJECT);

const CREATE_LABEL = compose(ACTION_NAME.CREATE_LABEL);
const READ_LABELS = compose(ACTION_NAME.READ_LABELS);

const CREATE_TASK = compose(ACTION_NAME.CREATE_TASK);
const READ_TASKS = compose(ACTION_NAME.READ_TASKS);

export {
  CREATE_LABEL,
  CREATE_PROJECT,
  CREATE_TASK,
  KEEP_AUTH_USER,
  READ_LABELS,
  READ_PROJECTS,
  READ_TASKS,
  SIGNIN_USER,
  SIGNUP_USER,
};
