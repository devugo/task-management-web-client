import { Fragment } from 'react';

import { ICONS } from '../constants/ICONS';
import { ViewTaskType } from '../types.d';
import RenderIcon from './RenderIcon';
import TaskDate from './TaskDate';
import TaskLabel from './TaskLabel';
import TaskProject from './TaskProject';
import TaskStatus from './TaskStatus';

const TaskContent = (props: ViewTaskType) => {
  const { title, description, project, level, labels, date, status } = props;

  return (
    <div className="task-content">
      <div className="task-content__text">
        <h4 className="task-title">{title}</h4>
        <p className="task-description">{description}</p>
      </div>
      <div className="task-content__tags">
        <div className="task-groups">
          <div className="task-groups-one">
            <TaskDate date={date!} />
            {project && <TaskProject item={project} />}
            {level && <RenderIcon styles={{ color: level.color }} title={ICONS.priority} />}
          </div>
          {labels && (
            <div className="task-groups-two">
              {labels.map((label, index) => (
                <Fragment key={index}>
                  <TaskLabel title={label.title} color={label.color} id={label.id} />
                </Fragment>
              ))}
            </div>
          )}
        </div>
        <TaskStatus title={status} />
      </div>
    </div>
  );
};

export default TaskContent;
