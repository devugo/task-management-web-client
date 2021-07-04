import './right-sidebar.scss';

import AddTaskSection from '../add-task-section';
import TaskPriorities from '../task-priorities';

const RightSideBar = ({
  showModal,
  setModalTitle,
}: {
  showModal: () => void;
  setModalTitle: (x: string) => void;
}) => {
  return (
    <div className="right-sidebar">
      <TaskPriorities />
      <AddTaskSection showModal={showModal} setModalTitle={setModalTitle} />
    </div>
  );
};

export default RightSideBar;
