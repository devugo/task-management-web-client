import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getLoader } from '../helpers/functions/getLoader';
import {
  successCreation,
  successDelete,
  successUpdate,
} from '../helpers/functions/responseChecker';
import { showMessage } from '../helpers/functions/showMessage';
import {
  CREATE_LABEL,
  CREATE_PROJECT,
  DELETE_LABEL,
  DELETE_PROJECT,
  UPDATE_LABEL,
  UPDATE_PROJECT,
} from '../store/actions/types';
import { RootStateType } from '../types.d';

const SuccessMessages = () => {
  const { loader } = useSelector((state: RootStateType) => state);

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
  }, [
    isProjectDeleted,
    isProjectUpdated,
    isProjectCreated,
    isLabelDeleted,
    isLabelUpdated,
    isLabelCreated,
  ]);

  return <div></div>;
};

export default SuccessMessages;
