import { LoadingOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { MODE } from '../../constants/MODE';
import { getLoader } from '../../helpers/functions/getLoader';
import { renderServerError } from '../../helpers/functions/renderServerError';
import { successUpdate } from '../../helpers/functions/responseChecker';
import { showMessage } from '../../helpers/functions/showMessage';
import { createProject, updateProject } from '../../store/actions/project';
import { CREATE_PROJECT, UPDATE_PROJECT } from '../../store/actions/types';
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
  color: Yup.string().required('Please, provide a color'),
  description: Yup.string().nullable(),
});

const ProjectForm = ({
  title,
  modalVisible,
  handleCancel,
  data,
}: {
  title: string;
  modalVisible: boolean;
  handleCancel: () => void;
  data?: any;
}) => {
  const dispatch = useDispatch();

  const { loader } = useSelector((state: RootStateType) => state);

  //  Get Project Form Mode
  const mode = data ? MODE.edit : MODE.new;

  const { errorData, progressData, successData } =
    mode === MODE.new ? getLoader(loader, CREATE_PROJECT) : getLoader(loader, UPDATE_PROJECT);
  const loading = progressData ? true : false;

  const isUpdated = successUpdate(successData);

  const [formikFormValues, setFormikFormValues] = useState(initialFormValues);

  const add = (values: ProjectType) => {
    dispatch(createProject(values));
  };

  const update = (values: ProjectType) => {
    dispatch(updateProject(values, data.id));
  };

  useEffect(() => {
    if (isUpdated) {
      showMessage('success', 'Project was updated successfully', 4);
      handleCancel();
    }
  }, [isUpdated]);

  useEffect(() => {
    if (data) {
      setFormikFormValues({ title: data.title, description: data.description, color: data.color });
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
            add(values);
          } else {
            update(values);
          }
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
              {mode === MODE.new ? 'Add' : 'Update'} {loading && <LoadingOutlined spin />}
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default ProjectForm;
