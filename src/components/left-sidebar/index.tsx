import './left-sidebar.scss';

import TaskLabels from '../task-labels';
import TaskMainGroup from '../task-main-group';
import TaskProjects from '../task-projects';

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <TaskMainGroup />
      <TaskProjects />
      <TaskLabels />
    </div>
  );
};

export default LeftSideBar;
