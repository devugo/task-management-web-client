import './task-projects.scss';

import { Fragment, useState } from 'react';

import { projectGroupItems } from '../../constants/projectGroupItems';
import SidebarTitle from '../sidebar-title';
import SingleTaskMainGroup from '../single-task-main-group';

const TaskProjects = () => {
  const [open, setOpen] = useState(false);

  const changeOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="task-projects">
      <SidebarTitle changeOpen={changeOpen} title="Project" />
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
