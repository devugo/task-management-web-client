import './single-task-main-group.scss';

import { Link, useLocation, useParams } from 'react-router-dom';

const splitSearch = (value: string) => {
  return value.split('/tasks', -1);
};

const SingleTaskMainGroup = (props: {
  title: string;
  icon: string;
  bg: boolean;
  color?: string;
  link: string;
}) => {
  const { type }: { type: string } = useParams();
  const { search }: { search: string } = useLocation();
  let { title, icon, bg, color, link } = props;

  if (color === '#ffffff') {
    color = '';
  }

  const isActive =
    type && title.toLowerCase() === type?.toLowerCase()
      ? ' active'
      : search === splitSearch(link)[1]
      ? ' active'
      : !search && !type && title === 'Home'
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
