import './task-date.scss';

import RenderIcon from '../icons/RenderIcon';

const TaskDate = () => {
  return (
    <div className="task-date">
      <RenderIcon title="mdi mdi-calendar-today" />
      <span>12 Jun</span>
    </div>
  );
};

export default TaskDate;
