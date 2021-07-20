import { useState } from 'react';

import TaskLabels from './TaskLabels';
import TaskMainGroup from './TaskMainGroup';
import TaskProjects from './TaskProjects';
import Watermark from './Watermark';

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
      <Watermark />
    </div>
  );
};

export default LeftSideBar;
