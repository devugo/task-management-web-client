import './task-projects.scss';

import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { projectGroupItems } from '../../constants/projectGroupItems';
import { getProjects } from '../../store/actions/project';
import SidebarTitle from '../sidebar-title';
import SingleTaskMainGroup from '../single-task-main-group';

const TaskProjects = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const changeOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

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
      </div>
    </div>
  );
};

export default TaskProjects;
