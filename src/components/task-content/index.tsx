import './task-content.scss';

import RenderIcon from '../icons/RenderIcon';
import TaskDate from '../task-date';
import TaskLabel from '../task-label';
import TaskProject from '../task-project';

const TaskContent = (props: { title: string; description: string }) => {
  const { title, description } = props;
  return (
    <div className="task-content">
      <div className="task-content__text">
        <h4 className="task-title">{title}</h4>
        <p className="task-description">{description}</p>
      </div>
      <div className="task-content__tags">
        <div className="task-groups">
          <div className="task-groups-one">
            <TaskDate />
            <TaskProject />
            <RenderIcon styles={{ color: 'red' }} title="mdi mdi-flag-outline" />
          </div>
          <div className="task-groups-two">
            <TaskLabel title="My label" />
            <TaskLabel title="Label 1" />
            <TaskLabel title="Label 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskContent;
