import { ExclamationCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { Alert, Modal } from 'antd';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { EMPTY_STRING } from '../constants/EMPTY_STRING';
import { MODE } from '../constants/MODE';
import { STORAGE_VARIABLE } from '../constants/STORAGE_VARIABLE';
import { getLoader } from '../helpers/functions/getLoader';
import { saveToStorage } from '../helpers/functions/localStorage';
import { renderServerError } from '../helpers/functions/renderServerError';
import { successDelete, successUpdate } from '../helpers/functions/responseChecker';
import { createProject, deleteProject, updateProject } from '../store/actions/project';
import { CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from '../store/actions/types';
import { ProjectType, RootStateType } from '../types.d';
import Button from './Button';
import Input from './Input';
import RenderIcon from './RenderIcon';
import TextareaInput from './TextAreaInput';

const initialFormValues: ProjectType = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
  color: '#353535',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Please, provide a title'),
  color: Yup.string().required('Please, provide a color'),
  description: Yup.string().nullable(),
});

const { confirm } = Modal;

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

  // UPDATE / CREATE LOADERS
  const { errorData, progressData, successData } =
    mode === MODE.new ? getLoader(loader, CREATE_PROJECT) : getLoader(loader, UPDATE_PROJECT);
  const loading = progressData ? true : false;
  const isUpdated = successUpdate(successData);

  // DELETE Loader
  const {
    errorData: deleteErrorData,
    progressData: deleteProgressData,
    successData: deleteSuccessData,
  } = getLoader(loader, DELETE_PROJECT);
  const isDeleting = deleteProgressData ? true : false;
  const isDeleted = successDelete(deleteSuccessData);

  const [formikFormValues, setFormikFormValues] = useState(initialFormValues);

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure you want delete this project?',
      icon: <ExclamationCircleOutlined />,
      content:
        'Deleting this project, deletes every tasks associated with it. This action is not reversible. Click Yes to continue',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        remove();
      },
    });
  };

  const add = (values: ProjectType) => {
    dispatch(createProject(values));
  };

  const update = (values: ProjectType) => {
    dispatch(updateProject(values, data.id));
  };

  const remove = () => {
    if (data) {
      saveToStorage(STORAGE_VARIABLE.deleteID, data.id);
      dispatch(deleteProject(data.id));
    }
  };

  useEffect(() => {
    if (isDeleted || isUpdated) {
      handleCancel();
    }
  }, [isDeleted, isUpdated]);

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
          <>
            <form onSubmit={handleSubmit} className="devugo-form">
              {renderServerError(errorData || deleteErrorData).length > 0 && (
                <div className="server-message mb-2 mt-2">
                  <Alert
                    message="Error"
                    description={renderServerError(errorData || deleteErrorData)}
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
            {mode !== MODE.new && (
              <Button
                style={{
                  backgroundImage: 'inherit',
                  backgroundColor: '#F64E60',
                  width: '100%',
                  height: '50px',
                  marginTop: 10,
                }}
                disabled={isDeleting}
                onClick={showDeleteConfirm}
              >
                Delete {isDeleting && <LoadingOutlined spin />}
              </Button>
            )}
          </>
        )}
      </Formik>
    </Modal>
  );
};

export default ProjectForm;
