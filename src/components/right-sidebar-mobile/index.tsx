import './right-sidebar-mobile.scss';

import { useState } from 'react';

import RenderIcon from '../icons/RenderIcon';
import RightSideBar from '../right-sidebar';

const RightSidebarMobile = ({
  showModal,
  setModalTitle,
}: {
  showModal: () => void;
  setModalTitle: (x: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className="right-sidebar-mobile">
      <div className={`right-sidebar-mobile-modal${open ? ' open' : ''}`}>
        <RightSideBar showModal={showModal} setModalTitle={setModalTitle} />
      </div>
      <div onClick={toggle} className={`right-sidebar-mobile__toggler${open ? ' open' : ''}`}>
        {open ? (
          <span style={{ color: '#fff' }}>X</span>
        ) : (
          <RenderIcon styles={{ color: 'rgb(236, 236, 236)' }} title="mdi mdi-plus" />
        )}
      </div>
    </div>
  );
};

export default RightSidebarMobile;
