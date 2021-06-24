import './sidebar-add-new.scss';

const SidebarAddNew = ({ title, toggleModal }: { title: string; toggleModal: () => void }) => {
  return (
    <div className="sidebar-add-new" onClick={toggleModal}>
      <div className="icon">
        <i className="mdi mdi-plus-thick"></i>
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default SidebarAddNew;
