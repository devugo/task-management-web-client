import './single-task-main-group.scss';

import { Link } from 'react-router-dom';

const SingleTaskMainGroup = (props: {
  title: string;
  icon: string;
  bg: boolean;
  color?: string;
}) => {
  let { title, icon, bg, color } = props;

  if (color === '#ffffff') {
    color = '';
  }
  return (
    <Link to="/" className={`single-task-main-group${title === 'Home' ? ' active' : ''}`}>
      <div className="single-task-main-group__content">
        <div className={`icon${!bg ? ' hide-bg' : ''}`}>
          <i className={icon} style={{ color: color || '' }}></i>
        </div>
        <div className="title">
          <span style={{ color: color || '' }}>{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default SingleTaskMainGroup;
