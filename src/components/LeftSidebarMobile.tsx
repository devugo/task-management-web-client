import { useState } from 'react';

import LeftSideBar from './LeftSidebar';
import RenderIcon from './RenderIcon';

const LeftSidebarMobile = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="left-sidebar-mobile">
      <div onClick={toggle} className={`left-sidebar-mobile__toggler${open ? ' open' : ''}`}>
        {open ? (
          <span style={{ color: '#fff' }}>X</span>
        ) : (
          <RenderIcon styles={{ color: 'rgb(236, 236, 236)' }} title="mdi mdi-menu" />
        )}
      </div>

      <div className={`left-sidebar-mobile-modal${open ? ' open' : ''}`}>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default LeftSidebarMobile;
