import './task-projects.scss';

import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { projectGroupItems } from '../../constants/projectGroupItems';
import { getLoader } from '../../helpers/functions/getLoader';
import { successCreation } from '../../helpers/functions/responseChecker';
import { showMessage } from '../../helpers/functions/showMessage';
import { getProjects } from '../../store/actions/project';
import { CREATE_PROJECT } from '../../store/actions/types';
import { RootStateType } from '../../types.d';
import ProjectForm from '../project-form';
import SidebarAddNew from '../sidebar-add-new';
import SidebarTitle from '../sidebar-title';
import SingleTaskMainGroup from '../single-task-main-group';

const TaskProjects = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { loader } = useSelector((state: RootStateType) => state);

  const { successData } = getLoader(loader, CREATE_PROJECT);
  const isCreated = successCreation(successData);

  const changeOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (isCreated) {
      showMessage('success', 'Project was successfully', 4);
      handleCancel();
    }
  }, [isCreated]);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <div className="task-projects">
      <SidebarTitle changeOpen={changeOpen} title="Projects" />
      <div className={`task-projects__content${open ? ' open' : ''}`}>
        {projectGroupItems.map((group, index) => (
          <Fragment key={index}>
            <SingleTaskMainGroup bg={false} {...group} />
          </Fragment>
        ))}
        <SidebarAddNew title="Add New" toggleModal={showModal} />
      </div>
      <ProjectForm title="Add Project" modalVisible={modalVisible} handleCancel={handleCancel} />
    </div>
  );
};

export default TaskProjects;
