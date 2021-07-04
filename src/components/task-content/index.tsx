import './task-content.scss';

import React, { Fragment } from 'react';

import { ICONS } from '../../constants/ICONS';
import { ViewTaskType } from '../../types.d';
import RenderIcon from '../icons/RenderIcon';
import TaskDate from '../task-date';
import TaskLabel from '../task-label';
import TaskProject from '../task-project';

const TaskContent = (props: ViewTaskType) => {
  const { title, description, project, level, labels, created_at } = props;

  return (
    <div className="task-content">
      <div className="task-content__text">
        <h4 className="task-title">{title}</h4>
        <p className="task-description">{description}</p>
      </div>
      <div className="task-content__tags">
        <div className="task-groups">
          <div className="task-groups-one">
            <TaskDate date={created_at!} />
            {project && <TaskProject item={project} />}
            {level && <RenderIcon styles={{ color: level.color }} title={ICONS.priority} />}
          </div>
          {labels && (
            <div className="task-groups-two">
              {labels.map((label, index) => (
                <Fragment key={index}>
                  <TaskLabel title={label.title} color={label.color} />
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskContent;
