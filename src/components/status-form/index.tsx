import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { STATUS } from '../../constants/STATUS';
import { getLoader } from '../../helpers/functions/getLoader';
import { renderServerError } from '../../helpers/functions/renderServerError';
import { successUpdate } from '../../helpers/functions/responseChecker';
import { updateTaskStatus } from '../../store/actions/task';
import { UPDATE_TASK_STATUS } from '../../store/actions/types';
import { RootStateType, ViewTaskType } from '../../types.d';
import Button from '../button';
import RenderIcon from '../icons/RenderIcon';
import Input from '../input';

const emptyFormData: { status: string; title: string } = {
  status: EMPTY_STRING,
  title: EMPTY_STRING,
};

const StatusForm = ({
  modalVisible,
  handleCancel,
  data,
}: {
  modalVisible: boolean;
  handleCancel: () => void;
  data?: ViewTaskType;
}) => {
  const dispatch = useDispatch();

  const { loader } = useSelector((state: RootStateType) => state);

  const [formData, setFormData] = useState(emptyFormData as any);

  // In Progress loading
  const { errorData, progressData, successData } = getLoader(loader, UPDATE_TASK_STATUS);
  const loading = progressData ? true : false;

  // Check if task was created or updated successfully
  const isSuccess = successUpdate(successData);

  const { Option }: { Option: any } = Select;

  const changeSelect = (value: any, key: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const update = (values: ViewTaskType) => {
    if (data) {
      dispatch(updateTaskStatus(values, data.id));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    update(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      handleCancel();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (data) {
      const status = data?.status || EMPTY_STRING;
      const title = data?.title || EMPTY_STRING;
      setFormData({ title, status });
    }
  }, [data]);

  return (
    <Modal footer={null} title="Update Status" visible={modalVisible} onCancel={handleCancel}>
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
          <label>
            <RenderIcon title="mdi mdi-title" /> Title
          </label>
          <Input name="title" id="title" value={formData.title} disabled />
        </div>
        <div className="input-container">
          <label>
            <RenderIcon title="mdi mdi-title" /> Select Status
          </label>
          <Select
            allowClear
            placeholder="Please select"
            value={formData.status}
            onChange={(value) => changeSelect(value, 'status')}
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
          Update {loading && <LoadingOutlined spin />}
        </Button>
      </form>
    </Modal>
  );
};

export default StatusForm;
