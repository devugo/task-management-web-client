import './single-task-main-group.scss';

import { Link } from 'react-router-dom';

const SingleTaskMainGroup = (props: { title: string; icon: string; bg: boolean }) => {
  const { title, icon, bg } = props;
  return (
    <Link to="/" className={`single-task-main-group${title === 'Home' ? ' active' : ''}`}>
      <div className="single-task-main-group__content">
        <div className={`icon${!bg ? ' hide-bg' : ''}`}>
          <i className={icon}></i>
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleTaskMainGroup;
