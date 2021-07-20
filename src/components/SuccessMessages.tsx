import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getLoader } from '../helpers/functions/getLoader';
import {
  successCreation,
  successDelete,
  successUpdate,
} from '../helpers/functions/responseChecker';
import { showMessage } from '../helpers/functions/showMessage';
// import { signOut } from '../store/actions/auth';
import {
  CREATE_LABEL,
  CREATE_PROJECT,
  CREATE_TASK,
  DELETE_LABEL,
  DELETE_PROJECT,
  DELETE_TASK,
  RESCHEDULE_TASK,
  UPDATE_LABEL,
  UPDATE_PROJECT,
  UPDATE_TASK,
  UPDATE_TASK_STATUS,
} from '../store/actions/types';
import { RootStateType } from '../types.d';

const SuccessMessages = () => {
  const { loader } = useSelector((state: RootStateType) => state);

  // Check when token expires and log user out
  // let isNotAuth = false;
  // const singleLoader = loader[0];
  // if (singleLoader) {
  //   isNotAuth = singleLoader?.response?.status === 401;
  // }

  // DELETE PROJECT Loader
  const { successData: deleteProjectSuccessData } = getLoader(loader, DELETE_PROJECT);
  const isProjectDeleted = successDelete(deleteProjectSuccessData);
  // UPDATE PROJECT Loader
  const { successData: updateProjectSuccessData } = getLoader(loader, UPDATE_PROJECT);
  const isProjectUpdated = successUpdate(updateProjectSuccessData);
  // CREATE PROJECT Loader
  const { successData: createProjectSuccessData } = getLoader(loader, CREATE_PROJECT);
  const isProjectCreated = successCreation(createProjectSuccessData);

  // DELETE PROJECT Loader
  const { successData: deleteLabelSuccessData } = getLoader(loader, DELETE_LABEL);
  const isLabelDeleted = successDelete(deleteLabelSuccessData);
  // UPDATE PROJECT Loader
  const { successData: updateLabelSuccessData } = getLoader(loader, UPDATE_LABEL);
  const isLabelUpdated = successUpdate(updateLabelSuccessData);
  // CREATE PROJECT Loader
  const { successData: createLabelSuccessData } = getLoader(loader, CREATE_LABEL);
  const isLabelCreated = successCreation(createLabelSuccessData);

  // DELETE TASK Loader
  const { successData: deleteTaskSuccessData } = getLoader(loader, DELETE_TASK);
  const isTaskDeleted = successDelete(deleteTaskSuccessData);
  // UPDATE TASK Loader
  const { successData: updateTaskSuccessData } = getLoader(loader, UPDATE_TASK);
  const isTaskUpdated = successUpdate(updateTaskSuccessData);
  // CREATE TASK Loader
  const { successData: createTaskSuccessData } = getLoader(loader, CREATE_TASK);
  const isTaskCreated = successCreation(createTaskSuccessData);
  // RESCHEDULE TASK Loader
  const { successData: rescheduleTaskSuccessData } = getLoader(loader, RESCHEDULE_TASK);
  const isTaskRescheduled = successUpdate(rescheduleTaskSuccessData);
  // UPDATE TASK STATUS Loader
  const { successData: uodateTaskStatusSuccessData } = getLoader(loader, UPDATE_TASK_STATUS);
  const isTaskStatusUpdated = successUpdate(uodateTaskStatusSuccessData);

  useEffect(() => {
    if (isProjectDeleted) {
      showMessage('success', 'Project was deleted successfully', 4);
    }
    if (isProjectUpdated) {
      showMessage('success', 'Project was updated successfully', 4);
    }
    if (isProjectCreated) {
      showMessage('success', 'Project was created successfully', 4);
    }

    if (isLabelDeleted) {
      showMessage('success', 'Label was deleted successfully', 4);
    }
    if (isLabelUpdated) {
      showMessage('success', 'Label was updated successfully', 4);
    }
    if (isLabelCreated) {
      showMessage('success', 'Label was created successfully', 4);
    }

    if (isTaskDeleted) {
      showMessage('success', 'Task was deleted successfully', 4);
    }
    if (isTaskUpdated) {
      showMessage('success', 'Task was updated successfully', 4);
    }
    if (isTaskCreated) {
      showMessage('success', 'Task was created successfully', 4);
    }
    if (isTaskRescheduled) {
      showMessage('success', 'Task was rescheduled created successfully', 4);
    }
    if (isTaskStatusUpdated) {
      showMessage('success', 'Task status was updated successfully', 4);
    }
  }, [
    isProjectDeleted,
    isProjectUpdated,
    isProjectCreated,
    isLabelDeleted,
    isLabelUpdated,
    isLabelCreated,
    isTaskDeleted,
    isTaskUpdated,
    isTaskCreated,
    isTaskRescheduled,
    isTaskStatusUpdated,
  ]);

  return <div></div>;
};

export default SuccessMessages;
