import './right-sidebar.scss';

import AddTaskSection from '../add-task-section';
import TaskPriorities from '../task-priorities';

const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <TaskPriorities />
      <AddTaskSection />
    </div>
  );
};

export default RightSideBar;
