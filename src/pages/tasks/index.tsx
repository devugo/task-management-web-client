import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import LeftSideBar from '../../components/left-sidebar';
import LeftSidebarMobile from '../../components/left-sideebar-mobile';
import LoaderOverlay from '../../components/loader-overlay';
import PageWrapper from '../../components/page-wrapper';
import RescheduleTaskForm from '../../components/reschedule-task-form';
import RightSideBar from '../../components/right-sidebar';
import RightSidebarMobile from '../../components/right-sidebar-mobile';
import StatusForm from '../../components/status-form';
import TaskForm from '../../components/task-form';
import TasksContent from '../../components/tasks-content';
import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { getPageContentTitle } from '../../helpers/functions/getPageContentTitle';
import { getTasks } from '../../store/actions/task';

const Tasks = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(EMPTY_STRING);
  const [modalData, setModalData] = useState();
  const [pageTitle, setPageTitle] = useState(EMPTY_STRING);

  // Status Modal
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  // Reschedule Modal
  const [rescheduleModalVisible, setRescheduleModalVisible] = useState(false);

  const [openOverlay, setOpenOverlay] = useState(false);

  // Params
  const { type }: { type: string } = useParams();
  const { search }: { search: string } = useLocation();

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

  const searchFilter = (value: { search: string; status: string }): void => {
    const statusQuery = value.status ? `&status=${value.status}` : EMPTY_STRING;
    let urlQuery = `?search=${value.search}${statusQuery}`;
    if (search) {
      urlQuery = `${search}&search=${value.search}${statusQuery}`;
    }
    dispatch(getTasks(type || EMPTY_STRING, urlQuery));
  };

  useEffect(() => {
    const title = getPageContentTitle(type, search);
    setPageTitle(title);
  }, [type, search]);

  useEffect(() => {
    dispatch(getTasks(type, search));
  }, [type, search]);

  return (
    <PageWrapper>
      <LeftSideBar />
      <LeftSidebarMobile />
      <TasksContent
        pageTitle={pageTitle}
        showModal={showModal}
        setModalTitle={setModalTitle}
        setModalData={setModalData}
        toggleOverlay={toggleOverlay}
        showStatusModal={showStatusModal}
        showRescheduleModal={showRescheduleModal}
      />
      <RightSideBar
        searchFilter={searchFilter}
        showModal={showModal}
        setModalTitle={setModalTitle}
      />
      <RightSidebarMobile
        searchFilter={searchFilter}
        showModal={showModal}
        setModalTitle={setModalTitle}
      />

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

export default Tasks;
