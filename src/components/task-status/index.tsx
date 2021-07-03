import './task-status.scss';

import RenderIcon from '../icons/RenderIcon';

type StatusType = {
  name: string;
  color: string;
};

const statuses: StatusType[] = [
  {
    name: 'OPEN',
    color: 'draft',
  },
  {
    name: 'IN_PROGRESS',
    color: 'in-progress',
  },
  {
    name: 'DONE',
    color: 'completed',
  },
];

const TaskStatus = (props: { title: string }) => {
  const { title } = props;
  const statusObj = statuses.find((status) => status.name === title) as StatusType;
  const color = statusObj.color;
  const name = statusObj.name;
  return (
    <div className={`task-status ${color}`}>
      <RenderIcon title="mdi mdi-flag-outline" />
      <span>{name}</span>
    </div>
  );
};

export default TaskStatus;
