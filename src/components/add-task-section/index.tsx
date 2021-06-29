import './add-task-section.scss';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getLoader } from '../../helpers/functions/getLoader';
import { successCreation } from '../../helpers/functions/responseChecker';
import { showMessage } from '../../helpers/functions/showMessage';
import { CREATE_TASK } from '../../store/actions/types';
import { RootStateType } from '../../types.d';
import RenderIcon from '../icons/RenderIcon';
import TaskForm from '../task-form';

const AddTaskSection = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { loader } = useSelector((state: RootStateType) => state);

  // CREATING
  const { successData } = getLoader(loader, CREATE_TASK);
  const isCreated = successCreation(successData);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (isCreated) {
      showMessage('success', 'Task was successfully', 4);
      handleCancel();
    }
  }, [isCreated]);

  return (
    <>
      <div className="add-task-section" onClick={showModal}>
        <RenderIcon styles={{ fontSize: 20 }} title="mdi mdi-text-box-plus-outline" />
        <p>New Task</p>
      </div>
      <TaskForm title="Add Task" modalVisible={modalVisible} handleCancel={handleCancel} />
    </>
  );
};

export default AddTaskSection;
