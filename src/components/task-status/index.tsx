import './task-status.scss';

import { STATUS } from '../../constants/STATUS';

type StatusType = {
  name: string;
  color: string;
  title: string;
};

const TaskStatus = (props: { title: string }) => {
  const { title } = props;
  const statusObj = STATUS.find((status) => status.name === title) as StatusType;
  const color = statusObj.color;
  const statusTitle = statusObj.title;
  return (
    <div className={`task-status ${color}`}>
      <span>{statusTitle}</span>
    </div>
  );
};

export default TaskStatus;
