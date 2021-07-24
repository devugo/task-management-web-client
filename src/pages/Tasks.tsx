import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import LabelForm from '../components/LabelForm';
import LeftSideBar from '../components/LeftSidebar';
import LeftSidebarMobile from '../components/LeftSidebarMobile';
import LoaderOverlay from '../components/LoaderOverlay';
import PageHeader from '../components/PageHeader';
import ProjectForm from '../components/ProjectForm';
import RescheduleTaskForm from '../components/RescheduleTaskForm';
import RightSideBar from '../components/RightSidebar';
import RightSidebarMobile from '../components/RightSidebarMobile';
import StatusForm from '../components/StatusForm';
import TaskForm from '../components/TaskForm';
import TasksContent from '../components/TasksContent';
import { EMPTY_STRING } from '../constants/EMPTY_STRING';
import { getPageContentTitle } from '../helpers/functions/getPageContentTitle';
import PageWrapper from '../PageWrapper';
import { getTasks } from '../store/actions/task';
import { RootStateType } from '../types.d';

const Tasks = () => {
  const dispatch = useDispatch();

  const { projects, labels, priorities } = useSelector((state: RootStateType) => state);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(EMPTY_STRING);
  const [modalData, setModalData] = useState();
  const [pageTitle, setPageTitle] = useState(EMPTY_STRING);
  const [queryParams, setQueryParams] = useState(EMPTY_STRING);
  const [currentPage, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);

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
    setQueryParams(urlQuery);
    dispatch(getTasks(type || EMPTY_STRING, urlQuery));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (loaded) {
      let params = queryParams;
      if (params) {
        params += `&page=${currentPage}`;
      } else {
        params += `?page=${currentPage}`;
      }
      dispatch(getTasks(type || EMPTY_STRING, params));
    }
  }, [currentPage]);

  useEffect(() => {
    const title = getPageContentTitle(projects.data, labels.data, priorities.data, type, search);
    setPageTitle(title);
  }, [type, search, projects, labels, priorities]);

  useEffect(() => {
    dispatch(getTasks(type, search));
    setLoaded(true);
  }, [type, search]);

  return (
    <>
      <PageHeader />
      <PageWrapper>
        <LeftSideBar />
        <LeftSidebarMobile />
        <TasksContent
          goToPage={goToPage}
          currentPage={currentPage}
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
    </>
  );
};

export default Tasks;
