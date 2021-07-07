import './task.scss';

import { ViewTaskType } from '../../types.d';
import TaskCheckbox from '../task-checkbox';
import TaskContent from '../task-content';
import TaskOptionsToggler from '../task-options-toggler/indext';
import TaskStatus from '../task-status';

const Task = ({
  data,
  showModal,
  setModalTitle,
  setModalData,
  showStatusModal,
  showRescheduleModal,
}: {
  data: ViewTaskType;
  showModal: () => void;
  setModalTitle: (title: string) => void;
  setModalData: (data: any) => void;
  showStatusModal: () => void;
  showRescheduleModal: () => void;
}) => {
  const { level, status } = data;
  return (
    <div className="task" style={{ borderColor: level ? level.color : 'white' }}>
      <TaskCheckbox />
      <TaskContent {...data} />

      <TaskOptionsToggler
        data={data}
        showModal={showModal}
        setModalTitle={setModalTitle}
        setModalData={setModalData}
        showStatusModal={showStatusModal}
        showRescheduleModal={showRescheduleModal}
      />
      <TaskStatus title={status} />
    </div>
  );
};

export default Task;
