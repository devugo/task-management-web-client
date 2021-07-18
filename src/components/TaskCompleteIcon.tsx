import { Tooltip } from 'antd';

import RenderIcon from './RenderIcon';

const TaskCompleteIcon = ({ complete }: { complete: boolean }) => {
  if (!complete) return null;
  return (
    <div className="task-checkbox">
      <Tooltip title="Complete Task" color="green">
        <div className="complete-task-icon">
          <RenderIcon styles={{ color: '#1bc5bd', fontSize: 20 }} title="mdi mdi-check-circle" />
        </div>
      </Tooltip>
    </div>
  );
};

export default TaskCompleteIcon;
