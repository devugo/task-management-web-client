import './task-project.scss';

import { Link } from 'react-router-dom';

import { ICONS } from '../../constants/ICONS';
import { ProjectType } from '../../types.d';
import RenderIcon from '../icons/RenderIcon';

const TaskProject = (props: { item: ProjectType }) => {
  const { item } = props;
  if (!item) return null;
  return (
    <Link
      to={`/tasks?project=${item.id}`}
      className="task-project"
      style={{
        backgroundColor: item.color ? item.color : 'red',
        borderColor: item.color ? item.color : '',
      }}
    >
      <RenderIcon title={ICONS.project} />
      <span>{item?.title}</span>
    </Link>
  );
};

export default TaskProject;
