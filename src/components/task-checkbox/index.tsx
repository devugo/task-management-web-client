import './task-checkbox.scss';

import { Tooltip } from 'antd';

const TaskCheckbox = () => {
  return (
    <div className="task-checkbox">
      <Tooltip title="Complete Task" color="green">
        <input className="checkbox-input" type="checkbox" />
      </Tooltip>
    </div>
  );
};

export default TaskCheckbox;
