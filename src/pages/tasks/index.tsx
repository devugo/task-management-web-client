import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import LabelForm from '../../components/label-form';
import LeftSideBar from '../../components/left-sidebar';
import LeftSidebarMobile from '../../components/left-sideebar-mobile';
import LoaderOverlay from '../../components/loader-overlay';
import PageWrapper from '../../components/page-wrapper';
import ProjectForm from '../../components/project-form';
import RescheduleTaskForm from '../../components/reschedule-task-form';
import RightSideBar from '../../components/right-sidebar';
import RightSidebarMobile from '../../components/right-sidebar-mobile';
import StatusForm from '../../components/status-form';
import TaskForm from '../../components/task-form';
import TasksContent from '../../components/tasks-content';
import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { getPageContentTitle } from '../../helpers/functions/getPageContentTitle';
import { getTasks } from '../../store/actions/task';
import { RootStateType } from '../../types.d';

const Tasks = () => {
  const dispatch = useDispatch();

  const { projects, labels, priorities } = useSelector((state: RootStateType) => state);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(EMPTY_STRING);
  const [modalData, setModalData] = useState();
  const [pageTitle, setPageTitle] = useState(EMPTY_STRING);

  // Status Modal
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  // Reschedule Modal
  const [rescheduleModalVisible, setRescheduleModalVisible] = useState(false);

  // Project Modal
  const [projectModalVisible, setProjectModalVisible] = useState(false);

  // Label Modal
  const [labelModalVisible, setLabelModalVisible] = useState(false);

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

  const showProjectModal = () => {
    setProjectModalVisible(true);
  };
  const cancelProjectModal = () => {
    setProjectModalVisible(false);
  };

  const showLabelModal = () => {
    setLabelModalVisible(true);
  };
  const cancelLabelModal = () => {
    setLabelModalVisible(false);
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
    const title = getPageContentTitle(projects.data, labels.data, priorities.data, type, search);
    setPageTitle(title);
  }, [type, search, projects, labels, priorities]);

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
        showProjectModal={showProjectModal}
        showLabelModal={showLabelModal}
        search={search}
      />
      <RightSideBar
        searchFilter={searchFilter}
        showModal={showModal}
        setModalTitle={setModalTitle}
        setModalData={setModalData}
      />
      <RightSidebarMobile
        searchFilter={searchFilter}
        showModal={showModal}
        setModalTitle={setModalTitle}
        setModalData={setModalData}
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
      <ProjectForm
        title={modalTitle}
        modalVisible={projectModalVisible}
        handleCancel={cancelProjectModal}
        data={modalData}
      />
      <LabelForm
        title={modalTitle}
        modalVisible={labelModalVisible}
        handleCancel={cancelLabelModal}
        data={modalData}
      />
      {openOverlay && <LoaderOverlay />}
    </PageWrapper>
  );
};

export default Tasks;
