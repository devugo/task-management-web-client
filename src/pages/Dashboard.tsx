import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import DashboardContent from '../components/DashboardContent';
import LeftSideBar from '../components/LeftSidebar';
import LeftSidebarMobile from '../components/LeftSidebarMobile';
import LoaderOverlay from '../components/LoaderOverlay';
import PageHeader from '../components/PageHeader';
import RightSideBar from '../components/RightSidebar';
import RightSidebarMobile from '../components/RightSidebarMobile';
import TaskForm from '../components/TaskForm';
import PageWrapper from '../PageWrapper';
import { getLabels } from '../store/actions/label';
import { getProjects } from '../store/actions/project';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalData, setModalData] = useState();

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

  useEffect(() => {
    dispatch(getProjects());
    dispatch(getLabels());
  }, []);

  return (
    <>
      <PageHeader />
      <PageWrapper>
        <LeftSideBar />
        <LeftSidebarMobile />
        <DashboardContent toggleOverlay={toggleOverlay} />
        <RightSideBar
          setModalData={setModalData}
          showModal={showModal}
          setModalTitle={setModalTitle}
        />
        <RightSidebarMobile
          setModalData={setModalData}
          showModal={showModal}
          setModalTitle={setModalTitle}
        />

        <TaskForm
          data={modalData}
          title={modalTitle}
          modalVisible={modalVisible}
          handleCancel={handleCancel}
        />
        {openOverlay && <LoaderOverlay />}
      </PageWrapper>
    </>
  );
};

export default Dashboard;
