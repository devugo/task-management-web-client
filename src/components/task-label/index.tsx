import './task-label.scss';

import RenderIcon from '../icons/RenderIcon';

const TaskLabel = (props: { title: string; color: string }) => {
  const { title, color } = props;
  return (
    <div
      className="task-label"
      style={{ color: color ? color : 'inherit', borderColor: color ? color : 'inherit' }}
    >
      <RenderIcon title="mdi mdi-debug-step-over" />
      <span>{title}</span>
    </div>
  );
};

export default TaskLabel;
