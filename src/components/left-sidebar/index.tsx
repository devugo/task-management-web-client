import './left-sidebar.scss';

import { useState } from 'react';

import TaskLabels from '../task-labels';
import TaskMainGroup from '../task-main-group';
import TaskProjects from '../task-projects';

const LeftSideBar = () => {
  const [openSide, setOpenSide] = useState('');

  const changeOpenSide = (current: string): void => {
    setOpenSide((prevState) => (prevState === current ? '' : current));
  };

  return (
    <div className="left-sidebar">
      <TaskMainGroup />
      <TaskProjects changeOpenSide={changeOpenSide} openSide={openSide} />
      <TaskLabels changeOpenSide={changeOpenSide} openSide={openSide} />
    </div>
  );
};

export default LeftSideBar;
