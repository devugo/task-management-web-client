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
const SIGNOUT_USER = compose(ACTION_NAME.SIGNOUT_USER);

const READ_PROJECTS = compose(ACTION_NAME.READ_PROJECTS);
const CREATE_PROJECT = compose(ACTION_NAME.CREATE_PROJECT);
const UPDATE_PROJECT = compose(ACTION_NAME.UPDATE_PROJECT);
const DELETE_PROJECT = compose(ACTION_NAME.DELETE_PROJECT);

const CREATE_LABEL = compose(ACTION_NAME.CREATE_LABEL);
const READ_LABELS = compose(ACTION_NAME.READ_LABELS);
const UPDATE_LABEL = compose(ACTION_NAME.UPDATE_LABEL);
const DELETE_LABEL = compose(ACTION_NAME.DELETE_LABEL);

const CREATE_TASK = compose(ACTION_NAME.CREATE_TASK);
const READ_TASKS = compose(ACTION_NAME.READ_TASKS);
const UPDATE_TASK = compose(ACTION_NAME.UPDATE_TASK);
const UPDATE_TASK_STATUS = compose(ACTION_NAME.UPDATE_TASK_STATUS);
const DELETE_TASK = compose(ACTION_NAME.DELETE_TASK);
const RESCHEDULE_TASK = compose(ACTION_NAME.RESCHEDULE_TASK);

const READ_PRIORITIES = compose(ACTION_NAME.READ_PRIORITIES);

export {
  CREATE_LABEL,
  CREATE_PROJECT,
  CREATE_TASK,
  DELETE_LABEL,
  DELETE_PROJECT,
  DELETE_TASK,
  KEEP_AUTH_USER,
  READ_LABELS,
  READ_PRIORITIES,
  READ_PROJECTS,
  READ_TASKS,
  RESCHEDULE_TASK,
  SIGNIN_USER,
  SIGNOUT_USER,
  SIGNUP_USER,
  UPDATE_LABEL,
  UPDATE_PROJECT,
  UPDATE_TASK,
  UPDATE_TASK_STATUS,
};
