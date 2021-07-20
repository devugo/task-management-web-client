import { ViewTaskType } from '../types.d';
import TaskCompleteIcon from './TaskCompleteIcon';
import TaskContent from './TaskContent';
import TaskOptionsToggler from './TaskOptionsToggler';
import TaskStatus from './TaskStatus';

const Task = ({
  data,
  showModal,
  setModalTitle,
  setModalData,
  showStatusModal,
  showRescheduleModal,
  animationDelay,
}: {
  data: ViewTaskType;
  showModal: () => void;
  setModalTitle: (title: string) => void;
  setModalData: (data: any) => void;
  showStatusModal: () => void;
  showRescheduleModal: () => void;
  animationDelay: number;
}) => {
  const { level, status } = data;
  return (
    <div
      className="task"
      style={{ borderColor: level ? level.color : 'white', animationDelay: `${animationDelay}s` }}
    >
      <TaskCompleteIcon complete={status === 'DONE'} />
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
