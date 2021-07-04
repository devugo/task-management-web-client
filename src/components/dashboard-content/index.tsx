import './dashboard-content.scss';

import { LoadingOutlined } from '@ant-design/icons';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLoader } from '../../helpers/functions/getLoader';
import { getTasks } from '../../store/actions/task';
import { READ_TASKS } from '../../store/actions/types';
import { RootStateType } from '../../types.d';
import PageContent from '../page-content';
import PageContentTitle from '../page-content-title';
import Task from '../task';

const DashboardContent = ({
  showModal,
  setModalTitle,
  setModalData,
}: {
  showModal: () => void;
  setModalTitle: (title: string) => void;
  setModalData: (data: any) => void;
}) => {
  const dispatch = useDispatch();
  const { loader, tasks } = useSelector((state: RootStateType) => state);
  const tasksData = tasks.data;

  // READING
  const readTasksLoaders = getLoader(loader, READ_TASKS);
  const { progressData } = readTasksLoaders;
  const fetching = progressData ? true : false;

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <PageContent>
      <div className="dashboard-content">
        <PageContentTitle title="Today Tasks" />
        {fetching ? (
          <div className="center">
            <LoadingOutlined spin />
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
                />
              </Fragment>
            );
          })
        )}
      </div>
    </PageContent>
  );
};

export default DashboardContent;
