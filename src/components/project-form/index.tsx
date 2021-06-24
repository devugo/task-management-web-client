import { LoadingOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { getLoader } from '../../helpers/functions/getLoader';
import { renderServerError } from '../../helpers/functions/renderServerError';
import { createProject } from '../../store/actions/project';
import { CREATE_PROJECT } from '../../store/actions/types';
import { ProjectType, RootStateType } from '../../types.d';
import Button from '../button';
import RenderIcon from '../icons/RenderIcon';
import Input from '../input';
import TextareaInput from '../textarea-input';

const initialFormValues: ProjectType = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
  color: '#ffffff',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Please, provide a title'),
  description: Yup.string().nullable(),
});

const ProjectForm = ({
  title,
  modalVisible,
  handleCancel,
}: {
  title: string;
  modalVisible: boolean;
  handleCancel: () => void;
}) => {
  const dispatch = useDispatch();

  const { loader } = useSelector((state: RootStateType) => state);

  const { errorData, progressData } = getLoader(loader, CREATE_PROJECT);
  const loading = progressData ? true : false;

  const addProject = (values: ProjectType) => {
    dispatch(createProject(values));
  };

  return (
    <Modal footer={null} title={title} visible={modalVisible} onCancel={handleCancel}>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addProject(values);
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
                <RenderIcon title="mdi mdi-title" /> Color
              </label>
              <Input
                name="color"
                placeholder="Enter color code"
                onChange={handleChange}
                id="color"
                value={values.color}
                type="color"
              />
              <small className="danger">{errors.color && touched.color && errors.color}</small>
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

export default ProjectForm;
