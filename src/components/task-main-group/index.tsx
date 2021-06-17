import './style.scss';

import { Fragment } from 'react';

import SingleTaskMainGroup from '../single-task-main-group';

const mainGroupItems = [
  {
    icon: 'mdi mdi-home-edit-outline',
    title: 'Home',
  },
  {
    icon: 'mdi mdi-calendar-today',
    title: 'Today',
  },
  {
    icon: 'mdi mdi-debug-step-over',
    title: 'Overdue',
  },
  {
    icon: 'mdi mdi-ufo-outline',
    title: 'Upcoming',
  },
];

const TaskMainGroup = () => {
  return (
    <div className="task-main-group">
      {mainGroupItems.map((group, index) => (
        <Fragment key={index}>
          <SingleTaskMainGroup {...group} />
        </Fragment>
      ))}
    </div>
  );
};

export default TaskMainGroup;
