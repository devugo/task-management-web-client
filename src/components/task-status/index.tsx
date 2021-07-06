import './task-status.scss';

import { STATUS } from '../../constants/STATUS';
import RenderIcon from '../icons/RenderIcon';

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
      <RenderIcon title="mdi mdi-flag-outline" />
      <span>{statusTitle}</span>
    </div>
  );
};

export default TaskStatus;
