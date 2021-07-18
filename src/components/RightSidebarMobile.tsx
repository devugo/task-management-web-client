import { useState } from 'react';

import RenderIcon from './RenderIcon';
import RightSideBar from './RightSidebar';

const RightSidebarMobile = ({
  showModal,
  setModalTitle,
  searchFilter,
  setModalData,
}: {
  showModal: () => void;
  setModalTitle: (x: string) => void;
  searchFilter?: (value: { search: string; status: string }) => void;
  setModalData: (data: any) => void;
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className="right-sidebar-mobile">
      <div className={`right-sidebar-mobile-modal${open ? ' open' : ''}`}>
        <RightSideBar
          searchFilter={searchFilter}
          showModal={showModal}
          setModalTitle={setModalTitle}
          setModalData={setModalData}
        />
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
