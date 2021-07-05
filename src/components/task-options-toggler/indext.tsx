import './task-options-toggler.scss';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Modal } from 'antd';
import { useDispatch } from 'react-redux';

import { STORAGE_VARIABLE } from '../../constants/STORAGE_VARIABLE';
import { saveToStorage } from '../../helpers/functions/localStorage';
import { deleteTask } from '../../store/actions/task';
import { ViewTaskType } from '../../types.d';
import RenderIcon from '../icons/RenderIcon';

const { confirm } = Modal;

const TaskOptionsToggler = ({
  data,
  showModal,
  setModalTitle,
  setModalData,
}: {
  data: ViewTaskType;
  showModal: () => void;
  setModalTitle: (title: string) => void;
  setModalData: (data: any) => void;
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
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'grey' }}
          href="https://www.antgroup.com"
        >
          <RenderIcon title="mdi mdi-file-tree" /> Status
        </a>
      </Menu.Item>
      <Menu.Item onClick={openModal}>
        <RenderIcon styles={{ color: 'dodgerBlue' }} title="mdi mdi-playlist-edit" /> Edit
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'orange' }}
          href="https://www.aliyun.com"
        >
          <RenderIcon title="mdi mdi-clock-outline" /> Re-schedule
        </a>
      </Menu.Item>
      <Menu.Item onClick={showDeleteConfirm}>
        <RenderIcon styles={{ color: 'red' }} title="mdi mdi-delete-sweep-outline" /> Delete
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
