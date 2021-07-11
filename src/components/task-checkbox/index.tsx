import './task-checkbox.scss';

import { Checkbox, Tooltip } from 'antd';
import { useState } from 'react';

const TaskCheckbox = () => {
  const [checkValue, setCheckValue] = useState(false);

  const onChange = (e: any): void => {
    setCheckValue(e.target.checked);
  };

  return (
    <div className="task-checkbox">
      <Tooltip title="Complete Task" color="green">
        {/* <input className="checkbox-input" type="checkbox" style={{ color: 'red' }} /> */}
        <Checkbox checked={checkValue} onChange={onChange} />
      </Tooltip>
    </div>
  );
};

export default TaskCheckbox;
