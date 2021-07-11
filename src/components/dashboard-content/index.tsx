import './dashboard-content.scss';

import { LoadingOutlined } from '@ant-design/icons';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLoader } from '../../helpers/functions/getLoader';
import { successDelete } from '../../helpers/functions/responseChecker';
import { showMessage } from '../../helpers/functions/showMessage';
import { getTasks } from '../../store/actions/task';
import { DELETE_TASK, READ_TASKS } from '../../store/actions/types';
import { RootStateType } from '../../types.d';
import DashboardSummaryCard from '../dashboard-summary-card';
import PageContent from '../page-content';
import PageContentTitle from '../page-content-title';

const DashboardContent = ({ toggleOverlay }: { toggleOverlay: (value: boolean) => void }) => {
  const dispatch = useDispatch();
  const { loader, tasks } = useSelector((state: RootStateType) => state);
  const tasksData = tasks.data;

  // READING
  const readTasksLoaders = getLoader(loader, READ_TASKS);
  const { progressData } = readTasksLoaders;
  const fetching = progressData ? true : false;

  // In Progress loading
  const deleteData = getLoader(loader, DELETE_TASK);
  const deleting = deleteData.progressData ? true : false;

  // Check if task was deleted successfully
  const isDeleted = successDelete(deleteData.successData);

  useEffect(() => {
    if (deleting) {
      toggleOverlay(true);
    } else {
      toggleOverlay(false);
    }
  }, [deleting]);

  useEffect(() => {
    if (isDeleted) {
      showMessage('success', 'Task was deleted successfully', 4);
    }
  }, [isDeleted]);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <PageContent>
      <div className="dashboard-content">
        <PageContentTitle title="Home" />
        <div className="dashboard-summary-cards">
          <DashboardSummaryCard
            title="Today Tasks"
            count={200}
            iconTitle="mdi mdi-calendar-today"
          />
          <DashboardSummaryCard title="Due Tasks" count={20} iconTitle="mdi mdi-debug-step-over" />
          <DashboardSummaryCard title="Upcoming Tasks" count={20} iconTitle="mdi mdi-ufo-outline" />
          <DashboardSummaryCard title="Open Tasks" count={100} iconTitle="mdi mdi-email" />
          <DashboardSummaryCard title="In-Progress Tasks" count={20} iconTitle="mdi mdi-email" />
          <DashboardSummaryCard title="Completed Tasks" count={120} iconTitle="mdi mdi-email" />
          {fetching ? (
            <div className="center">
              <LoadingOutlined style={{ color: 'red' }} spin />
            </div>
          ) : (
            tasksData.map((task, index) => {
              return (
                <Fragment key={index}>
                  {/* <DashboardSummaryCard
                    title="Completed Task"
                    count={200}
                    iconTitle="mdi mdi-email"
                  /> */}
                </Fragment>
              );
            })
          )}
        </div>
      </div>
    </PageContent>
  );
};

export default DashboardContent;
