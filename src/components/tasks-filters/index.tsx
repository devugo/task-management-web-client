import './tasks-filters.scss';

import { LoadingOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { getLoader } from '../../helpers/functions/getLoader';
import { renderServerError } from '../../helpers/functions/renderServerError';
import { READ_TASKS } from '../../store/actions/types';
// import { renderServerError } from '../../helpers/functions/renderServerError';
import { RootStateType } from '../../types.d';
import Button from '../button';
// import Button from '../button';
import Input from '../input';

const emptyFormData: { search: string } = {
  search: EMPTY_STRING,
};

const TasksFilters = ({ searchFilter }: { searchFilter: (value: string) => void }) => {
  const { loader } = useSelector((state: RootStateType) => state);
  const [formData, setFormData] = useState(emptyFormData as any);

  // In Progress loading
  const { progressData, errorData } = getLoader(loader, READ_TASKS);
  const loading = progressData ? true : false;

  const changeInput = (value: any, key: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    searchFilter(formData.search);
  };

  return (
    <div className="tasks-filters">
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
        <div className="inputs-group">
          <div className="input-container">
            <Input
              name="search"
              onChange={(e: any) => changeInput(e.target.value, 'search')}
              id="search"
              value={formData.search}
              placeholder="Search...."
            />

            <Button disabled={loading} type="submit">
              Search {loading && <LoadingOutlined spin />}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TasksFilters;
