import './right-sidebar.scss';

import AddTaskSection from '../add-task-section';
import TaskPriorities from '../task-priorities';
import TasksFilters from '../tasks-filters';

const RightSideBar = ({
  showModal,
  setModalTitle,
  searchFilter,
  setModalData,
}: {
  showModal: () => void;
  setModalTitle: (x: string) => void;
  searchFilter?: (value: { search: string; status: string }) => void;
  setModalData: (data: any) => void;
}) => {
  return (
    <div className="right-sidebar">
      <TaskPriorities />
      {searchFilter && <TasksFilters searchFilter={searchFilter} />}
      <AddTaskSection
        showModal={showModal}
        setModalData={setModalData}
        setModalTitle={setModalTitle}
      />
    </div>
  );
};

export default RightSideBar;
