import { Alert, Input, Select } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { EMPTY_STRING } from '../constants/EMPTY_STRING';
import { STATUS } from '../constants/STATUS';
import { getLoader } from '../helpers/functions/getLoader';
import { renderServerError } from '../helpers/functions/renderServerError';
import { READ_TASKS } from '../store/actions/types';
import { RootStateType } from '../types.d';
import Button from './Button';

const emptyFormData: { search: string; status: string } = {
  search: EMPTY_STRING,
  status: EMPTY_STRING,
};

const TasksFilters = ({
  searchFilter,
}: {
  searchFilter: (value: { search: string; status: string }) => void;
}) => {
  const { loader } = useSelector((state: RootStateType) => state);
  const [formData, setFormData] = useState(emptyFormData as any);

  // In Progress loading
  const { progressData, errorData } = getLoader(loader, READ_TASKS);
  const loading = progressData ? true : false;
  const { Option }: { Option: any } = Select;

  const changeInput = (value: any, key: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    searchFilter(formData);
  };

  return (
    <div className="tasks-filters">
      <h4>Filter</h4>
      <form onSubmit={handleSubmit} className="devugo-form">
        {renderServerError(errorData).length > 0 && (
          <div className="server-message mb-2 mt-2">
            <Alert
              message="Error"
              description={renderServerError(errorData)}
              type="error"
              showIcon
            />
          </div>
        )}
        <div className="input-container">
          <Input
            name="search"
            onChange={(e: any) => changeInput(e.target.value, 'search')}
            id="search"
            value={formData.search}
            placeholder="Search...."
          />
        </div>
        <div className="input-container">
          <Select
            allowClear
            placeholder="Select a status"
            onChange={(value) => changeInput(value, 'status')}
            id="status"
            showArrow={false}
          >
            {STATUS.map((status, index) => (
              <Option key={index} value={status.name}>
                {status.title}
              </Option>
            ))}
          </Select>
        </div>

        <Button disabled={loading} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default TasksFilters;
