import './dashboard.scss';

import { useState } from 'react';

import DashboardContent from '../../components/dashboard-content';
import LeftSideBar from '../../components/left-sidebar';
import LoaderOverlay from '../../components/loader-overlay';
import PageWrapper from '../../components/page-wrapper';
import RescheduleTaskForm from '../../components/reschedule-task-form';
import RightSideBar from '../../components/right-sidebar';
import StatusForm from '../../components/status-form';
import TaskForm from '../../components/task-form';

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalData, setModalData] = useState();

  // Status Modal
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  // Reschedule Modal
  const [rescheduleModalVisible, setRescheduleModalVisible] = useState(false);

  const [openOverlay, setOpenOverlay] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };

  const showStatusModal = () => {
    setStatusModalVisible(true);
  };
  const cancelStatusModal = () => {
    setStatusModalVisible(false);
  };

  const showRescheduleModal = () => {
    setRescheduleModalVisible(true);
  };
  const cancelRescheduleModal = () => {
    setRescheduleModalVisible(false);
  };

  const toggleOverlay = (value: boolean) => {
    setOpenOverlay(value);
  };

  return (
    <PageWrapper>
      <LeftSideBar />
      <DashboardContent
        showModal={showModal}
        setModalTitle={setModalTitle}
        setModalData={setModalData}
        toggleOverlay={toggleOverlay}
        showStatusModal={showStatusModal}
        showRescheduleModal={showRescheduleModal}
      />
      <RightSideBar showModal={showModal} setModalTitle={setModalTitle} />

      <TaskForm
        data={modalData}
        title={modalTitle}
        modalVisible={modalVisible}
        handleCancel={handleCancel}
      />
      <StatusForm
        data={modalData}
        handleCancel={cancelStatusModal}
        modalVisible={statusModalVisible}
      />
      <RescheduleTaskForm
        data={modalData}
        handleCancel={cancelRescheduleModal}
        modalVisible={rescheduleModalVisible}
      />
      {openOverlay && <LoaderOverlay />}
    </PageWrapper>
  );
};

export default Dashboard;
