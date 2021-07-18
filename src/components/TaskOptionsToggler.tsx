import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Modal } from 'antd';
import { useDispatch } from 'react-redux';

import { STORAGE_VARIABLE } from '../constants/STORAGE_VARIABLE';
import { saveToStorage } from '../helpers/functions/localStorage';
import { deleteTask } from '../store/actions/task';
import { ViewTaskType } from '../types.d';
import RenderIcon from './RenderIcon';

const { confirm } = Modal;

const TaskOptionsToggler = ({
  data,
  showModal,
  setModalTitle,
  setModalData,
  showStatusModal,
  showRescheduleModal,
}: {
  data: ViewTaskType;
  showModal: () => void;
  setModalTitle: (title: string) => void;
  setModalData: (data: any) => void;
  showStatusModal: () => void;
  showRescheduleModal: () => void;
}) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    if (data) {
      saveToStorage(STORAGE_VARIABLE.deleteID, data.id);
      dispatch(deleteTask(data.id));
    }
  };

  const openModal = async () => {
    await setModalTitle('Udpdate Task');
    await setModalData(data);
    showModal();
  };

  const openStatusModal = async () => {
    await setModalData(data);
    showStatusModal();
  };

  const openRescheduleModal = async () => {
    await setModalData(data);
    showRescheduleModal();
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure you want delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action is not reversible. Click Yes to continue',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        removeTask();
      },
    });
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={openStatusModal}>
        <RenderIcon styles={{ color: 'grey' }} title="mdi mdi-file-tree" /> Status
      </Menu.Item>
      <Menu.Item onClick={openModal}>
        <RenderIcon styles={{ color: 'dodgerBlue' }} title="mdi mdi-playlist-edit" /> Edit
      </Menu.Item>
      <Menu.Item onClick={openRescheduleModal}>
        <RenderIcon styles={{ color: 'orange' }} title="mdi mdi-clock-outline" /> Re-schedule
      </Menu.Item>
      <Menu.Item onClick={showDeleteConfirm}>
        <RenderIcon styles={{ color: '#f64e60' }} title="mdi mdi-delete-sweep-outline" /> Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} placement="bottomCenter">
        <div className="task-options-toggler">
          <RenderIcon title="mdi mdi-video-input-component" />
        </div>
      </Dropdown>
    </>
  );
};

export default TaskOptionsToggler;
