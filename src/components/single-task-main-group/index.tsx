import './single-task-main-group.scss';

import { Link, useParams } from 'react-router-dom';

const SingleTaskMainGroup = (props: {
  title: string;
  icon: string;
  bg: boolean;
  color?: string;
  link: string;
}) => {
  const { type }: { type: string } = useParams();
  let { title, icon, bg, color, link } = props;

  if (color === '#ffffff') {
    color = '';
  }

  const isActive =
    title === 'Home' && !type
      ? ' active'
      : title.toLowerCase() == type?.toLowerCase()
      ? ' active'
      : '';
  return (
    <Link to={link} className={`single-task-main-group${isActive}`}>
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
