import AddTaskSection from './AddTaskSection';
import Logout from './Logout';
import TaskPriorities from './TaskPriorities';
import TasksFilters from './TasksFilters';

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
      <Logout />
    </div>
  );
};

export default RightSideBar;
