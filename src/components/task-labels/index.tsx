import './task-labels.scss';

import { LoadingOutlined } from '@ant-design/icons';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ICONS } from '../../constants/ICONS';
import { getLoader } from '../../helpers/functions/getLoader';
import { successCreation } from '../../helpers/functions/responseChecker';
import { showMessage } from '../../helpers/functions/showMessage';
import { getLabels } from '../../store/actions/label';
import { CREATE_LABEL, READ_LABELS } from '../../store/actions/types';
import { RootStateType } from '../../types.d';
import LabelForm from '../label-form';
import SidebarAddNew from '../sidebar-add-new';
import SidebarTitle from '../sidebar-title';
import SingleTaskMainGroup from '../single-task-main-group';

const TaskLabels = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { loader, labels } = useSelector((state: RootStateType) => state);
  const labelData = labels.data;

  // READING
  const readLabelLoaders = getLoader(loader, READ_LABELS);
  const { progressData } = readLabelLoaders;
  const fetching = progressData ? true : false;
  // CREATING
  const { successData } = getLoader(loader, CREATE_LABEL);
  const isCreated = successCreation(successData);

  const changeOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (isCreated) {
      showMessage('success', 'Project was successfully', 4);
      handleCancel();
    }
  }, [isCreated]);

  useEffect(() => {
    dispatch(getLabels());
  }, []);
  return (
    <div className="task-labels">
      <SidebarTitle changeOpen={changeOpen} title="Labels" />
      <div className={`task-labels__content${open ? ' open' : ''}`}>
        {fetching ? (
          <div className="center">
            <LoadingOutlined spin />
          </div>
        ) : (
          labelData.map((group, index) => {
            return (
              <Fragment key={index}>
                <SingleTaskMainGroup
                  link={`/tasks?label=${group.id}`}
                  icon={ICONS.label}
                  bg={false}
                  {...group}
                />
              </Fragment>
            );
          })
        )}
        <SidebarAddNew title="Add New" toggleModal={showModal} />
      </div>
      <LabelForm title="Add Label" modalVisible={modalVisible} handleCancel={handleCancel} />
    </div>
  );
};

export default TaskLabels;
