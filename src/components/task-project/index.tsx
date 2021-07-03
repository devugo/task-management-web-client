import './task-project.scss';

import { ProjectType } from '../../types.d';
import RenderIcon from '../icons/RenderIcon';

const TaskProject = (props: { item: ProjectType }) => {
  const { item } = props;
  if (!item) return null;
  return (
    <div
      className="task-project"
      style={{
        backgroundColor: item.color ? item.color : 'inherit',
        borderColor: item.color ? item.color : '',
      }}
    >
      <RenderIcon title="mdi mdi-ufo-outline" />
      <span>{item?.title}</span>
    </div>
  );
};

export default TaskProject;
