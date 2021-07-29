import { LoadingOutlined } from '@ant-design/icons';
import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import { ICONS } from '../constants/ICONS';
import { getLoader } from '../helpers/functions/getLoader';
import { READ_PRIORITIES } from '../store/actions/types';
import { RootStateType } from '../types.d';
import SidebarTitle from './SidebarTitle';
import SingleTaskMainGroup from './SingleTaskMainGrup';

const TaskPriorities = () => {
  const { loader, priorities } = useSelector((state: RootStateType) => state);
  const priorityData = priorities.data;

  // READING
  const readPriorityLoaders = getLoader(loader, READ_PRIORITIES);
  const { progressData } = readPriorityLoaders;
  const fetching = progressData ? true : false;

  const [open, setOpen] = useState(true);

  const changeOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="task-priorities">
      <SidebarTitle changeOpen={changeOpen} title="Priorities" />
      <div className={`task-priorities__content${open ? ' open' : ''}`}>
        {fetching ? (
          <div className="center">
            <LoadingOutlined spin />
          </div>
        ) : (
          priorityData.map((priority, index) => {
            return (
              <Fragment key={index}>
                <SingleTaskMainGroup
                  link={`/tasks?level=${priority.id}`}
                  icon={ICONS.priority}
                  bg={false}
                  {...priority}
                />
              </Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskPriorities;
