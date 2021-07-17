import { LoadingOutlined } from '@ant-design/icons';
import { Alert, DatePicker } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DATE_FORMAT } from '../../constants/DATE_FORMAT';
import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { getLoader } from '../../helpers/functions/getLoader';
import { renderServerError } from '../../helpers/functions/renderServerError';
import { successUpdate } from '../../helpers/functions/responseChecker';
import { rescheduleTask } from '../../store/actions/task';
import { RESCHEDULE_TASK } from '../../store/actions/types';
import { RootStateType, ViewTaskType } from '../../types.d';
import Button from '../button';
import RenderIcon from '../icons/RenderIcon';
import Input from '../input';

const emptyFormData: { date: moment.Moment; title: string } = {
  date: moment(new Date(), DATE_FORMAT.secondary),
  title: EMPTY_STRING,
};

const RescheduleTaskForm = ({
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
  const { errorData, progressData, successData } = getLoader(loader, RESCHEDULE_TASK);
  const loading = progressData ? true : false;

  // Check if task was created or updated successfully
  const isSuccess = successUpdate(successData);

  const update = (values: ViewTaskType) => {
    if (data) {
      dispatch(rescheduleTask(values, data.id));
    }
  };

  const onChangeDate = (date: moment.Moment | null, dateString: string): void => {
    setFormData((prevSate: any) => {
      return {
        ...prevSate,
        date,
      };
    });
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
      const title = data?.title || EMPTY_STRING;
      setFormData({ title, date: moment(data.date, DATE_FORMAT.secondary) });
    }
  }, [data]);

  return (
    <Modal footer={null} title="Reschedule Task" visible={modalVisible} onCancel={handleCancel}>
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
            <RenderIcon title="mdi mdi-title" /> Date
          </label>
          <DatePicker
            style={{ width: '100%', height: 50 }}
            defaultValue={formData.date}
            onChange={onChangeDate}
          />
        </div>

        <Button disabled={loading} type="submit">
          Update {loading && <LoadingOutlined spin />}
        </Button>
      </form>
    </Modal>
  );
};

export default RescheduleTaskForm;
