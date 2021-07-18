import { Link } from 'react-router-dom';

import { ICONS } from '../constants/ICONS';
import RenderIcon from './RenderIcon';

const TaskLabel = (props: { title: string; color: string; id: string | undefined }) => {
  const { title, color, id } = props;
  return (
    <Link
      to={`/tasks?label=${id}`}
      className="task-label"
      style={{ color: color ? color : 'inherit', borderColor: color ? color : 'inherit' }}
    >
      <RenderIcon title={ICONS.label} />
      <span>{title}</span>
    </Link>
  );
};

export default TaskLabel;
