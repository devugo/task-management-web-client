import './dashboard.scss';

import { useState } from 'react';

import DashboardContent from '../../components/dashboard-content';
import LeftSideBar from '../../components/left-sidebar';
import PageWrapper from '../../components/page-wrapper';
import RightSideBar from '../../components/right-sidebar';
import TaskForm from '../../components/task-form';

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalData, setModalData] = useState();

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <PageWrapper>
      <LeftSideBar />
      <DashboardContent
        showModal={showModal}
        setModalTitle={setModalTitle}
        setModalData={setModalData}
      />
      <RightSideBar showModal={showModal} setModalTitle={setModalTitle} />

      <TaskForm
        data={modalData}
        title={modalTitle}
        modalVisible={modalVisible}
        handleCancel={handleCancel}
      />
    </PageWrapper>
  );
};

export default Dashboard;
