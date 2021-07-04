import './task-options-toggler.scss';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Modal } from 'antd';

import { ViewTaskType } from '../../types.d';
import RenderIcon from '../icons/RenderIcon';

const { confirm } = Modal;

const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sutre delete this  task?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('Ok');
    },
    onCancel() {
      console.log('cancel');
    },
  });
};

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
  const openModal = async () => {
    await setModalTitle('Udpdate Task');
    await setModalData(data);
    showModal();
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
        {/* <a
          target="_blank"
          style={{ color: 'dodgerBlue' }}
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        > */}
        <RenderIcon styles={{ color: 'dodgerBlue' }} title="mdi mdi-playlist-edit" /> Edit
        {/* </a> */}
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
      <Menu.Item>
        <a rel="noopener noreferrer" style={{ color: 'red' }} href="#" onClick={showDeleteConfirm}>
          <RenderIcon title="mdi mdi-delete-sweep-outline" /> Delete
        </a>
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
