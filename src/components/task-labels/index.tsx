import './task-labels.scss';

import { Fragment, useState } from 'react';

import { labelGroupItems } from '../../constants/labelGroupItems';
import SidebarTitle from '../sidebar-title';
import SingleTaskMainGroup from '../single-task-main-group';

const TaskLabels = () => {
  const [open, setOpen] = useState(false);

  const changeOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="task-labels">
      <SidebarTitle changeOpen={changeOpen} title="Labels" />
      <div className={`task-labels__content${open ? ' open' : ''}`}>
        {labelGroupItems.map((group, index) => (
          <Fragment key={index}>
            <SingleTaskMainGroup bg={false} {...group} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaskLabels;
