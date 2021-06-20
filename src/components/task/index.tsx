import './task.scss';

import TaskCheckbox from '../task-checkbox';
import TaskContent from '../task-content';
import TaskOptionsToggler from '../task-options-toggler/indext';
import TaskStatus from '../task-status';

const Task = (props: { title: string; description: string; borderColor?: string }) => {
  const { title, description, borderColor } = props;

  return (
    <div className="task" style={{ borderColor }}>
      <TaskCheckbox />
      <TaskContent title={title} description={description} />

      <TaskOptionsToggler />
      <TaskStatus title="In Progress" />
    </div>
  );
};

export default Task;
