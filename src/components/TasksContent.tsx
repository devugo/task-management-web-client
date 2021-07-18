import { LoadingOutlined } from '@ant-design/icons';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getLoader } from '../helpers/functions/getLoader';
import { DELETE_LABEL, DELETE_PROJECT, DELETE_TASK, READ_TASKS } from '../store/actions/types';
import { RootStateType } from '../types.d';
import PageContent from './PageContent';
import PageContentTitle from './PageContentTitle';
import Task from './Task';

const TasksContent = ({
  showModal,
  setModalTitle,
  setModalData,
  toggleOverlay,
  showStatusModal,
  showRescheduleModal,
  showProjectModal,
  showLabelModal,
  pageTitle,
  search,
}: {
  showModal: () => void;
  setModalTitle: (title: string) => void;
  setModalData: (data: any) => void;
  toggleOverlay: (value: boolean) => void;
  showStatusModal: () => void;
  showRescheduleModal: () => void;
  showProjectModal: () => void;
  showLabelModal: () => void;
  pageTitle: string;
  search: string;
}) => {
  const { loader, tasks } = useSelector((state: RootStateType) => state);
  const tasksData = tasks.data;

  // READING
  const readTasksLoaders = getLoader(loader, READ_TASKS);
  const { progressData } = readTasksLoaders;
  const fetching = progressData ? true : false;

  // In Progress loading
  const deleteData = getLoader(loader, DELETE_TASK);
  const deleting = deleteData.progressData ? true : false;
  const { progressData: deleteProjectProgressData } = getLoader(loader, DELETE_PROJECT);
  const deletingProject = deleteProjectProgressData ? true : false;
  const { progressData: deleteLabelProgressData } = getLoader(loader, DELETE_LABEL);
  const deletingLabel = deleteLabelProgressData ? true : false;

  useEffect(() => {
    if (deleting || deletingProject || deletingLabel) {
      toggleOverlay(true);
    } else {
      toggleOverlay(false);
    }
  }, [deleting, deletingProject, deletingLabel]);

  return (
    <PageContent>
      <div className="tasks-content">
        <PageContentTitle
          setModalTitle={setModalTitle}
          showProjectModal={showProjectModal}
          showLabelModal={showLabelModal}
          title={pageTitle}
          search={search}
          setModalData={setModalData}
        />
        <div className="tasks">
          {fetching ? (
            <div className="center">
              <LoadingOutlined style={{ color: '#fd5c63' }} spin />
            </div>
          ) : (
            tasksData.map((task, index) => {
              return (
                <Fragment key={index}>
                  <Task
                    showModal={showModal}
                    setModalTitle={setModalTitle}
                    setModalData={setModalData}
                    data={task}
                    showStatusModal={showStatusModal}
                    showRescheduleModal={showRescheduleModal}
                  />
                </Fragment>
              );
            })
          )}
        </div>
      </div>
    </PageContent>
  );
};

export default TasksContent;
