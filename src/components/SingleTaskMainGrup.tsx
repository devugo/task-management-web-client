import { Link, useLocation, useParams } from 'react-router-dom';

import { EMPTY_STRING } from '../constants/EMPTY_STRING';

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
    color = EMPTY_STRING;
  }

  const isActive =
    type && title.toLowerCase() === type?.toLowerCase()
      ? ' active'
      : search === splitSearch(link)[1]
      ? ' active'
      : !search && !type && title === 'Home'
      ? ' active'
      : EMPTY_STRING;

  return (
    <Link to={link} className={`single-task-main-group${isActive}`}>
      <div className="single-task-main-group__content">
        <div className={`icon${!bg ? ' hide-bg' : EMPTY_STRING}`}>
          <i className={icon} style={{ color: color || EMPTY_STRING }}></i>
        </div>
        <div className="title">
          <span style={{ color: color || EMPTY_STRING }}>{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default SingleTaskMainGroup;
