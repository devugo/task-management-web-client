import './task-label.scss';

import RenderIcon from '../icons/RenderIcon';

const TaskLabel = (props: { title: string }) => {
  const { title } = props;
  return (
    <div className="task-label">
      <RenderIcon title="mdi mdi-debug-step-over" />
      <span>{title}</span>
    </div>
  );
};

export default TaskLabel;
