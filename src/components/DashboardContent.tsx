import { LoadingOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLoader } from '../helpers/functions/getLoader';
import { getTasksSummary } from '../store/actions/task';
import { DELETE_TASK } from '../store/actions/types';
import { RootStateType } from '../types.d';
import DashboardChart from './DashboardChart';
import DashboardSummaryCard from './DashboardSummaryCard';
import PageContent from './PageContent';
import PageContentTitle from './PageContentTitle';

const makeStartUppercase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const DashboardContent = ({ toggleOverlay }: { toggleOverlay: (value: boolean) => void }) => {
  const dispatch = useDispatch();
  const {
    loader,
    tasks: { summary },
  } = useSelector((state: RootStateType) => state);

  // In Progress loading
  const deleteData = getLoader(loader, DELETE_TASK);
  const deleting = deleteData.progressData ? true : false;

  const chartData =
    summary &&
    Object.keys(summary as object).map((key: string) => {
      return { name: makeStartUppercase(key), count: summary[key] };
    });

  useEffect(() => {
    dispatch(getTasksSummary());
  }, []);

  useEffect(() => {
    if (deleting) {
      toggleOverlay(true);
    } else {
      toggleOverlay(false);
    }
  }, [deleting]);

  useEffect(() => {
    // dispatch(getTasks());
  }, []);

  return (
    <PageContent>
      <div className="dashboard-content">
        <PageContentTitle title="Home" />
        {chartData ? (
          <>
            <div className="dashboard-summary-cards">
              <DashboardSummaryCard
                title="Today Tasks"
                count={summary.today}
                iconTitle="mdi mdi-calendar-today"
                iconClass="today"
              />
              <DashboardSummaryCard
                title="Due Tasks"
                count={summary.due}
                iconTitle="mdi mdi-debug-step-over"
                iconClass="due"
              />
              <DashboardSummaryCard
                title="Upcoming Tasks"
                count={summary.upcoming}
                iconTitle="mdi mdi-ufo-outline"
                iconClass="upcoming"
              />
              <DashboardSummaryCard
                title="Open Tasks"
                count={summary.open}
                iconTitle="mdi mdi-open-in-new"
                iconClass="open"
              />
              <DashboardSummaryCard
                title="In-Progress Tasks"
                count={summary.inProgress}
                iconTitle="mdi mdi-progress-clock"
                iconClass="progress"
              />
              <DashboardSummaryCard
                title="Completed Tasks"
                count={summary.completed}
                iconTitle="mdi mdi-check-outline"
                iconClass="complete"
              />
            </div>
            <DashboardChart data={chartData} />
          </>
        ) : (
          <div className="center">
            <LoadingOutlined style={{ color: '#f64e60', fontSize: 50 }} spin />
          </div>
        )}
      </div>
    </PageContent>
  );
};

export default DashboardContent;
