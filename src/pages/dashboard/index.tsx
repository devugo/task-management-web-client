import './dashboard.scss';

import { useState } from 'react';

import DashboardContent from '../../components/dashboard-content';
import LeftSideBar from '../../components/left-sidebar';
import LeftSidebarMobile from '../../components/left-sideebar-mobile';
import LoaderOverlay from '../../components/loader-overlay';
import PageWrapper from '../../components/page-wrapper';
import RightSideBar from '../../components/right-sidebar';
import RightSidebarMobile from '../../components/right-sidebar-mobile';
import TaskForm from '../../components/task-form';

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalData] = useState();

  const [openOverlay, setOpenOverlay] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };

  const toggleOverlay = (value: boolean) => {
    setOpenOverlay(value);
  };

  return (
    <PageWrapper>
      <LeftSideBar />
      <LeftSidebarMobile />
      <DashboardContent toggleOverlay={toggleOverlay} />
      <RightSideBar showModal={showModal} setModalTitle={setModalTitle} />
      <RightSidebarMobile showModal={showModal} setModalTitle={setModalTitle} />

      <TaskForm
        data={modalData}
        title={modalTitle}
        modalVisible={modalVisible}
        handleCancel={handleCancel}
      />
      {openOverlay && <LoaderOverlay />}
    </PageWrapper>
  );
};

export default Dashboard;
