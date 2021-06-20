import './task-priorities.scss';

import { Fragment, useState } from 'react';

import { prioritiesGroupItems } from '../../constants/prioritiesGroupItems';
import SidebarTitle from '../sidebar-title';
import SingleTaskMainGroup from '../single-task-main-group';

const TaskPriorities = () => {
  const [open, setOpen] = useState(true);

  const changeOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="task-priorities">
      <SidebarTitle changeOpen={changeOpen} title="Priorities" />
      <div className={`task-priorities__content${open ? ' open' : ''}`}>
        {prioritiesGroupItems.map((group, index) => (
          <Fragment key={index}>
            <SingleTaskMainGroup bg={false} {...group} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaskPriorities;
