import moment from 'moment';

import { DATE_FORMAT } from '../constants/DATE_FORMAT';
import RenderIcon from './RenderIcon';

const TaskDate = (props: { date: moment.Moment }) => {
  const { date } = props;
  return (
    <div className="task-date">
      <RenderIcon title="mdi mdi-calendar-today" />
      <span>{moment(date).format(DATE_FORMAT.main)}</span>
    </div>
  );
};

export default TaskDate;
