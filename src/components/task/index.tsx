import './task.scss';

import { ViewTaskType } from '../../types.d';
import TaskCheckbox from '../task-checkbox';
import TaskContent from '../task-content';
import TaskOptionsToggler from '../task-options-toggler/indext';
import TaskStatus from '../task-status';

const Task = (props: ViewTaskType) => {
  const { level, status } = props;
  return (
    <div className="task" style={{ borderColor: level ? level.color : 'white' }}>
      <TaskCheckbox />
      <TaskContent {...props} />

      <TaskOptionsToggler />
      <TaskStatus title={status} />
    </div>
  );
};

export default Task;
