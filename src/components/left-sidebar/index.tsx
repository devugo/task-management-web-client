import './style.scss';

import TaskMainGroup from '../task-main-group';
import TaskProjects from '../task-projects';

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <TaskMainGroup />
      <TaskProjects />
    </div>
  );
};

export default LeftSideBar;
