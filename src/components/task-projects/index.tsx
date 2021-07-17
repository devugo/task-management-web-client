import './task-projects.scss';

import { LoadingOutlined } from '@ant-design/icons';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ICONS } from '../../constants/ICONS';
import { getLoader } from '../../helpers/functions/getLoader';
import { successCreation } from '../../helpers/functions/responseChecker';
import { getProjects } from '../../store/actions/project';
import { CREATE_PROJECT, READ_PROJECTS } from '../../store/actions/types';
import { RootStateType } from '../../types.d';
import ProjectForm from '../project-form';
import SidebarAddNew from '../sidebar-add-new';
import SidebarTitle from '../sidebar-title';
import SingleTaskMainGroup from '../single-task-main-group';

const TaskProjects = ({
  changeOpenSide,
  openSide,
}: {
  changeOpenSide: (current: string) => void;
  openSide: string;
}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const { loader, projects } = useSelector((state: RootStateType) => state);
  const projectData = projects.data;

  // READING
  const readProjectLoaders = getLoader(loader, READ_PROJECTS);
  const { progressData } = readProjectLoaders;
  const fetching = progressData ? true : false;
  // CREATING
  const { successData } = getLoader(loader, CREATE_PROJECT);
  const isCreated = successCreation(successData);

  const changeOpen = (): void => {
    changeOpenSide('projects');
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (isCreated) {
      handleCancel();
    }
  }, [isCreated]);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <div className="task-projects">
      <SidebarTitle changeOpen={changeOpen} title="Projects" />
      <div className={`task-projects__content${openSide === 'projects' ? ' open' : ''}`}>
        {fetching ? (
          <div className="center">
            <LoadingOutlined spin />
          </div>
        ) : (
          projectData.map((group, index) => {
            return (
              <Fragment key={index}>
                <SingleTaskMainGroup
                  link={`/tasks?project=${group.id}`}
                  icon={ICONS.project}
                  bg={false}
                  {...group}
                />
              </Fragment>
            );
          })
        )}

        <SidebarAddNew title="Add New" toggleModal={showModal} />
      </div>
      <ProjectForm title="Add Project" modalVisible={modalVisible} handleCancel={handleCancel} />
    </div>
  );
};

export default TaskProjects;
