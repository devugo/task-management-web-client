import './sidebar-title.scss';

const SidebarTitle = (props: { title: string; changeOpen: () => void }) => {
  const { title, changeOpen } = props;

  return (
    <div className="sidebar-title" onClick={changeOpen}>
      <h3>{title}</h3>
      <p className="open-icon">+</p>
    </div>
  );
};

export default SidebarTitle;
