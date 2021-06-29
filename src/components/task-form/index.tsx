import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { getLoader } from '../../helpers/functions/getLoader';
import { renderServerError } from '../../helpers/functions/renderServerError';
// import { createTask } from '../../store/actions/task';
import { CREATE_TASK } from '../../store/actions/types';
import { RootStateType, TaskType } from '../../types.d';
import Button from '../button';
import RenderIcon from '../icons/RenderIcon';
import Input from '../input';
import MultiSelectInput from '../multi-select-input';
import SelectInput from '../select-input';
import TextareaInput from '../textarea-input';

const initialFormValues: TaskType = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
  labels: [],
  project: EMPTY_STRING,
  level: EMPTY_STRING,
};

const validationSchema = Yup.object({
  title: Yup.string().required('Please, provide a title'),
  description: Yup.string().nullable(),
});

const TaskForm = ({
  title,
  modalVisible,
  handleCancel,
}: {
  title: string;
  modalVisible: boolean;
  handleCancel: () => void;
}) => {
  // const dispatch = useDispatch();

  const { loader } = useSelector((state: RootStateType) => state);

  const { errorData, progressData } = getLoader(loader, CREATE_TASK);
  const loading = progressData ? true : false;

  const { Option }: { Option: any } = Select;

  const children: number[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i);
  }

  // function handleChangeSelect(value: any) {
  //   console.log(value);
  //   console.log(`selected ${value}`);
  // }

  const addTask = (values: TaskType) => {
    return console.log(values);
    // dispatch(createTask(values));
  };

  return (
    <Modal footer={null} title={title} visible={modalVisible} onCancel={handleCancel}>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addTask(values);
          resetForm();
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
                <RenderIcon title="mdi mdi-title" /> Labels
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%', height: '100px' }}
                placeholder="Please select"
                defaultValue={values.labels as string[]}
                onChange={handleChange}
                id="labels"
              >
                {children.map((i) => (
                  <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
                ))}
              </Select>
              {/* <small className="danger">{errors.color && touched.color && errors.color}</small> */}
            </div>

            <div className="input-container">
              <label>
                <RenderIcon title="mdi mdi-title" /> Project
              </label>
              <SelectInput />
              {/* <small className="danger">{errors.color && touched.color && errors.color}</small> */}
            </div>

            <div className="input-container">
              <label>
                <RenderIcon title="mdi mdi-title" /> Multi
              </label>
              <MultiSelectInput />
              {/* <small className="danger">{errors.color && touched.color && errors.color}</small> */}
            </div>

            <Button disabled={loading} type="submit">
              Add {loading && <LoadingOutlined spin />}
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default TaskForm;
