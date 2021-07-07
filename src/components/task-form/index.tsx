import { LoadingOutlined } from '@ant-design/icons';
import { Alert, DatePicker, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Formik } from 'formik';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { DATE_FORMAT } from '../../constants/DATE_FORMAT';
import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { MODE } from '../../constants/MODE';
import { getLoader } from '../../helpers/functions/getLoader';
import { renderServerError } from '../../helpers/functions/renderServerError';
import { successCreation, successUpdate } from '../../helpers/functions/responseChecker';
import { showMessage } from '../../helpers/functions/showMessage';
import { createTask, updateTask } from '../../store/actions/task';
import { CREATE_TASK, UPDATE_TASK } from '../../store/actions/types';
import { CreateTaskType, RootStateType, ViewTaskType } from '../../types.d';
import Button from '../button';
import ButtonRadio from '../button-radio';
import RenderIcon from '../icons/RenderIcon';
import Input from '../input';
import TextareaInput from '../textarea-input';

const initialFormValues: { title: string; description?: string } = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
};

// moment(date).format(DateFormats.main)

const emptyFormData: { project: string; labels: string[]; level: string; date: moment.Moment } = {
  project: EMPTY_STRING,
  labels: [],
  level: EMPTY_STRING,
  date: moment(new Date(), DATE_FORMAT.secondary),
};

const validationSchema = Yup.object({
  title: Yup.string().required('Please, provide a title'),
  description: Yup.string().nullable(),
});

const TaskForm = ({
  title,
  modalVisible,
  handleCancel,
  data,
}: {
  title: string;
  modalVisible: boolean;
  handleCancel: () => void;
  data?: ViewTaskType;
}) => {
  const dispatch = useDispatch();

  const { loader, projects, labels } = useSelector((state: RootStateType) => state);

  const [formData, setFormData] = useState(emptyFormData as any);
  const [formikFormValues, setFormikFormValues] = useState(initialFormValues);

  //  Get task mode of form
  const mode = data ? MODE.edit : MODE.new;

  // In Progress loading
  const { errorData, progressData, successData } =
    mode === MODE.new ? getLoader(loader, CREATE_TASK) : getLoader(loader, UPDATE_TASK);
  const loading = progressData ? true : false;

  // Check if task was created or updated successfully
  const isSuccess = mode === MODE.new ? successCreation(successData) : successUpdate(successData);

  const { Option }: { Option: any } = Select;

  const add = (values: CreateTaskType) => {
    dispatch(createTask(values));
  };

  const update = (values: ViewTaskType) => {
    if (data) {
      dispatch(updateTask(values, data.id));
    }
  };

  const changeSelect = (value: any, key: string) => {
    setFormData({
      ...formData,
      [key]: key === 'level' && value === formData[key] ? '' : value,
    });
  };

  const onChangeDate = (date: moment.Moment | null, dateString: string): void => {
    setFormData((prevSate: any) => {
      return {
        ...prevSate,
        date,
      };
    });
  };

  useEffect(() => {
    if (isSuccess) {
      showMessage(
        'success',
        `Task was ${mode === MODE.new ? 'created' : 'updated'} successfully`,
        4
      );
      handleCancel();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (data) {
      const labels = data.labels?.map((label) => label.id) || [];
      const level = data.level?.id || '';
      const project = data.project?.id || '';
      setFormikFormValues({ title: data.title, description: data.description });
      setFormData({ project, level, labels, date: moment(data.date, DATE_FORMAT.secondary) });
    }
  }, [data]);

  return (
    <Modal footer={null} title={title} visible={modalVisible} onCancel={handleCancel}>
      <Formik
        enableReinitialize
        initialValues={formikFormValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (mode === MODE.new) {
            add({ ...values, ...formData });
          } else {
            update({ ...values, ...formData });
          }
          resetForm();
          setFormData(emptyFormData);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
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
              <Input
                name="title"
                placeholder="Enter project title"
                onChange={handleChange}
                id="title"
                value={values.title}
              />
              <small className="danger">{errors.title && touched.title && errors.title}</small>
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

            <div className="input-container">
              <label>
                <RenderIcon title="mdi mdi-title" /> Description
              </label>
              <TextareaInput
                name="description"
                placeholder="Enter description title"
                onChange={handleChange}
                id="description"
                value={values.description}
              />
              <small className="danger">
                {errors.description && touched.description && errors.description}
              </small>
            </div>

            <div className="input-container">
              <label>
                <RenderIcon title="mdi mdi-title" /> Project
              </label>
              <Select
                allowClear
                placeholder="Please select"
                defaultValue={formData.project}
                onChange={(value) => changeSelect(value, 'project')}
                id="project"
                showArrow={false}
              >
                {projects.data.map((project, index) => (
                  <Option key={index} value={project.id}>
                    {project.title}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="input-container">
              <label>
                <RenderIcon title="mdi mdi-title" /> Labels
              </label>
              <Select
                mode="tags"
                allowClear
                placeholder="Please select"
                defaultValue={formData.labels}
                onChange={(value) => changeSelect(value, 'labels')}
                id="labels"
              >
                {labels.data.map((label, index) => (
                  <Option value={label.id} key={index}>
                    {label.title}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="input-container">
              <label>
                <RenderIcon title="mdi mdi-title" /> Priority
              </label>
              <ButtonRadio value={formData.level} changeSelect={changeSelect} />
            </div>

            <Button disabled={loading} type="submit">
              {mode === MODE.new ? 'Add' : 'Update'} {loading && <LoadingOutlined spin />}
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default TaskForm;
