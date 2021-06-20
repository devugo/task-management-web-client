import './task-main-group.scss';

import { Fragment } from 'react';

import { mainGroupItems } from '../../constants/mainGroupItems';
import SingleTaskMainGroup from '../single-task-main-group';

const TaskMainGroup = () => {
  return (
    <div className="task-main-group">
      {mainGroupItems.map((group, index) => (
        <Fragment key={index}>
          <SingleTaskMainGroup bg {...group} />
        </Fragment>
      ))}
    </div>
  );
};

export default TaskMainGroup;
