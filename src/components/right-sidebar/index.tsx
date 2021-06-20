import './right-sidebar.scss';

import TaskPriorities from '../task-priorities';

const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <TaskPriorities />
    </div>
  );
};

export default RightSideBar;
