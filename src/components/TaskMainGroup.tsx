import { Fragment } from 'react';

import { mainGroupItems } from '../constants/mainGroupItems';
import SingleTaskMainGroup from './SingleTaskMainGrup';

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
